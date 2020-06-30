/*
===================================
Hans / v0.1
OSC to i2c app - ER-301, TXo, etc
Nordseele 2020 
Usage : /module/number/command/args
===================================
*/

const osc = require('osc');
const i2c = require('i2c-bus');
const listening_port = 9998; // UDP receive port
const busno = 1; // i2c bus number
const clamp = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));
const modules = require('./ii/commands');

// OSC server over UDP

var getIPAddresses = function () {
    var os = require("os"),
        interfaces = os.networkInterfaces(),
        ipAddresses = [];

    for (var deviceName in interfaces) {
        var addresses = interfaces[deviceName];z
        for (var i = 0; i < addresses.length; i++) {
            var addressInfo = addresses[i];
            if (addressInfo.family === "IPv4" && !addressInfo.internal) {
                ipAddresses.push(addressInfo.address);
            }
        }
    }

    return ipAddresses;
};

var udpPort = new osc.UDPPort({
    localAddress: "0.0.0.0",
    localPort: listening_port // change listening port
});

udpPort.on("ready", function () {
    var ipAddresses = getIPAddresses();

    console.log("Hello Hans ! Listening for OSC over UDP.");
    ipAddresses.forEach(function (address) {
        console.log(" Host:", address + ", Port:", udpPort.options.localPort);
    });
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


// Prepare i2c buffer

const prepareMessage = (msg) => { 
    let m = msg;
    let message = {}; 

if (m.args.length != modules[m.device].commands[m.command].arg.length) {
    console.log("Incorrect number of arguments");
} else {
    let bytes = [];
    let args = modules[m.device].commands[m.command].arg;
    for (let i in args) {
    let size = args[i].type == 'u8' ? 1 : 2;
    let buf = Buffer.alloc(size);
    if (size == 1) {
        buf.writeInt8(clamp(-128, 127, m.args[i]));
    } else {
        buf.writeInt16BE(clamp(-16384, 16383, m.args[i])); // clamp to the TT values
    }
    bytes.push(buf);
}
    message.payload = Buffer.concat(bytes); // we need to concat all the buffers before we send them to the i2c node.
}

message.address = modules[m.device].address[m.unit_number];
message.command = modules[m.device].commands[m.command].cmd;
sendMessage(message);
}


// Send i2c message

const sendMessage = (message) => {
    const i2c1 = i2c.openSync(busno);
    i2c1.writeI2cBlockSync(message.address, message.command, message.payload.length, message.payload); //syn method, could switch to async w/ callback 
    i2c1.closeSync(); 
}



