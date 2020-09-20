## [Status](#status)

Experimental ⚠️ / Work in progress.

This project is still a work in progress and is partially published here as a "proof of concept" and not as a set of instructions to follow.

This project requires the "Hans hat" created specifically and a Raspberry Pi Zero W.

## [Log](#log)

##### 16/08/2020

REV B PCB sent to production. This new PCB features a serial MIDI IN/OUT/THRU header.

##### 07/08/2020

Midi implementation. User defined Midi mapping + support for both Bluetooth midi and hardware midi connected via USB.

##### 03/08/2020

Hardware successfully tested. 

##### 24/07/2020

PCB received, prototype built. Testing in progress. 

##### 08/07/2020

PCB sent to production.

##### 07/07/2020

Prototype PCB design ready to be sent for production. It features a double i2c IO (regular hardware IO + software i2c on another set of GPIO) and a "safe" 5V input.



## [Tracker](#tracker)


#### In progress:

- [x] OSC over UDP implementation (receiver), conversion to i2c, full set of ii commands.
- [x] Switch between Hotspot and other network via captive portal or cli
- [x] Bluetooth LE Midi with custom mapping file 
- [x] Custom functions triggered by Midi (in Midimap.js) 
- [x] Custom hardware PCB (double i2c bus, pull-up resistors and power (w/ pwr protection) from the 5V rail of a Eurorack case)
- [ ] Serial midi IO on the hat
- [ ] i2C follower on separate bus
#### Under consideration:

- [ ] Support for more "followers" modules (Disting EX, W/, Ansible and Crow), technically, already possible but the commands need to be added to commands.js.
- [ ] Web interface (Settings)
- [ ] Support for "getters" commands



