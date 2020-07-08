/*
===================================
Hans / v0.0.1
OSC to i2c app - ER-301, TXo, etc
Nordseele 2020 
Usage : /module/number/command/args
Status: Experimental, proof of concept
===================================
*/

const osc = require('osc');
const i2c = require('i2c-bus');
const clamp = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
const modules = require('./ii/commands');
const settings = require('./settings');


const getIPAddresses = function () {
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

udpPort.on("ready", function () {
    let ipAddresses = getIPAddresses();
    console.log("H A N S");
    console.log("Listening for OSC over UDP.");
    ipAddresses.forEach(function (address) {
        console.log("Host:", address + ", Port:", udpPort.options.localPort);
    });
    console.log("i2c bus number:", settings.busno);
});

udpPort.on("message", function (oscMessage) {
    let msg = oscMessage;
    let d = [];
    d = msg.address.split("/");
    let e = {
        "device" : d[1],
        "unit_number"   : parseInt(d[2]) - 1,
        "command"   : d[3],
        "args" : [parseInt(d[4]) - 1]
    }
    if((msg.args.length !== 0)){ // append additional args if present
        let a = [...e.args, ...msg.args];
        e.args = a;
   } 
    prepareMessage(e);
});

udpPort.on("error", function (err) {
    console.log(err);
});

udpPort.open();

// Prepare the i2c buffer

const prepareMessage = (msg) => { 
    let m = msg;
    let message = {}; 

    if (m.args.length != modules[m.device].commands[m.command].arg.length) {
        console.log("Incorrect number of arguments");
    } else {
        let bytes = [];
        let args = modules[m.device].commands[m.command].arg;
        for (let i in args) {
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
        message.payload = Buffer.concat(bytes); // concat all the buffers before we send them to the i2c node.
    }

message.address = modules[m.device].address[m.unit_number];
message.command = modules[m.device].commands[m.command].cmd;
sendMessage(message);
}

// Send i2c message

const sendMessage = (message) => {
    const i2c1 = i2c.openSync(settings.busno);
    i2c1.writeI2cBlockSync(message.address, message.command, message.payload.length, message.payload); 
    i2c1.closeSync(); 
}
