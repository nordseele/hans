/*
===================================
Hans / v0.0.3
OSC and midi to i2c app - ER-301, TXo, etc
Nordseele 2020 
Usage : /module/number/command/args
Status: Experimental
===================================
*/

const osc = require('osc');
const midi = require('midi');
const i2c = require('i2c-bus');
const modules = require('./assets/commands');
const midimap = require('./assets/midimap');
const settings = require('./settings');
const DEBUG_MIDI = true;

const clamp = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
Number.prototype.mapped = function (in_min, in_max, out_min, out_max) {
    return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
// ----- OSC

const getIPAddresses = () => {
    const os = require("os"),
        interfaces = os.networkInterfaces(),
        ipAddresses = [];
    for (deviceName in interfaces) {
        let addresses = interfaces[deviceName];
        for (let i = 0; i < addresses.length; i++) {
            let addressInfo = addresses[i];
            if (addressInfo.family === "IPv4" && !addressInfo.internal) {
                ipAddresses.push(addressInfo.address);
            }
        }
    }
    return ipAddresses;
};

const udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: settings.listening_port 
});

udpPort.on("ready", () => {
        let ipAddresses = getIPAddresses();
        console.log("HANS");
        console.log("Listening for OSC over UDP.");
        ipAddresses.forEach(function (address) {
            console.log("Host:", address + ", Port:", udpPort.options.localPort);
        }); // map  ??
        console.log("i2c bus number:", settings.busno);
    });

udpPort.on("message", (oscMessage) => {
        let msg = oscMessage;
        let d = [];
        d = msg.address.split("/");
        let e = {
            "device": d[1],
            "unit_number": parseInt(d[2]),
            "command": d[3],
            "args": [parseInt(d[4]) - 1]
        };
        if ((msg.args.length !== 0)) { // append additional args when present
            let a = [...e.args, ...msg.args];
            e.args = a;
        }
        if (DEBUG_MIDI == false) {
            formati2cMessage(e);
        }
        console.log(e);
    });

udpPort.on("error", (err) => {
        console.log(err);
    });

udpPort.open();


// ----- MIDI

const input = new midi.Input();
const output = new midi.Output();

input.on('message', (deltaTime, message) => {
    let m_command = Math.floor(message[0]/16);
    let m_channel = Math.floor(message[0] - (m_command*16)) + 1;
    let m_value = message[2];
    let m_number = message[1];
    output.sendMessage(message);   
    switch(m_command) {
        case 8: // note off
        if (midimap.note_off[m_number] !== undefined) {
            for(let m of midimap.note_off[m_number](m_number, m_value)) {
                //console.log(m);
                if (DEBUG_MIDI == false) {
                    formati2cMessage(m);
                }
            }
        };
        break;

        case 9: // note on
            if (midimap.note_on[m_number] !== undefined) {
                for(let m of midimap.note_on[m_number](m_number, m_value)) {
                    //console.log(m);
                    if (DEBUG_MIDI == false) {
                        formati2cMessage(m);
                    }
                }
            };
        break;

        case 11: // cc
            console.log(m_value, m_number);
            if (midimap.cc[m_number] !== undefined) { // if there is a corresponding function in midimap.js, send the i2c command
                for(let m of midimap.cc[m_number](m_value)) {
                    //console.log(m);
                    if (DEBUG_MIDI == false) {
                        formati2cMessage(m);
                    }
                }
            };
        break;
    };
});


input.openVirtualPort("Hans_MIDI_IN");
output.openVirtualPort("Hans_MIDI_OUT");

// ----- I2C

const formati2cMessage = (msg) => { 
    let m = msg;
    console.log(m);
    let message = {}; 

    if (m.args.length != modules[m.device].commands[m.command].arg.length) {
        console.log("Incorrect number of arguments");
    } else {
        let bytes = [];
        let args = modules[m.device].commands[m.command].arg;
        for (let i in args) { // map ??
          if(args[i] !== null) { 
            let type = args[i].type;
            let size = type == 'u8' ? 1 : type == 's8' ? 1 : 2;
            let buf = Buffer.alloc(size);

            switch (args[i].type) {
                case 'u8':
                    buf.writeUInt8(clamp(0, 255, m.args[i]));
                    break;
                case 's8':
                    buf.writeInt8(clamp(-128, 127, m.args[i]));
                    break;
                case 's16':
                case 's16V': 
                    buf.writeInt16BE(clamp(-16384, 16383, m.args[i])); 
                    break;
            }
            bytes.push(buf);
         }
        }
        message.payload = Buffer.concat(bytes);
    }

message.address = modules[m.device].address[m.unit_number - 1];
message.command = modules[m.device].commands[m.command].cmd;
sendi2cMessage(message);
}

const sendi2cMessage = (message) => {
    const i2c1 = i2c.openSync(settings.busno);
    i2c1.writeI2cBlockSync(message.address, message.command, message.payload.length, message.payload); 
    i2c1.closeSync(); 
}