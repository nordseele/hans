![Hans_revB](/docs/images/hans.png)

###### *Hans add-on board Version 1 Rev B & Raspberry Pi Zero W*

-----

## Status: 

#### July 2023 
V2 is here https://github.com/nordseele/hans_2

#### January 2023 
- 🔴 Version 1 (running on RPI Zero W) is abandonned. No PCBs or pre-built units in stock, some componnents unavailable due to global shortage.
V2 embedded proto ready, smaller footprint, power from 12V rail and many other improvements. No ETA yet.

Please see: https://github.com/nordseele/hans/discussions/10#discussioncomment-4594479 for more details.


## [Description](#description)

Hans is an add-on board made for the Raspberry Pi Zero W. It is powered from the 5V rail of a Eurorack case. MIDI Over i2c for ER-301 etc.


### Features:

- Control the **ER-301 and TXo** Eurorack modules via **MIDI and OSC** *(Serial, USB)*.
- Send **MIDI from Monome Teletype.**
- Use it as a standalone MIDI processor or as an OSC to MIDI converter.
- ...



### Technical details:

- Serial MIDI input and output. 

- Two i2c busses on which Hans acts as a leader. 

- A third bus on which Hans acts as a follower and thus can be used for converting i2c messages received from Teletype to MIDI. 

## [Status](#status)


#### Achieved:

- [x] OSC over UDP implementation (receiver), conversion to i2c, full set of ii commands.
- [x] Custom hardware PCB (double i2c bus, pull-up resistors and power (w/ pwr protection) from the 5V rail of a Eurorack case)
- [X] Serial midi IO 
- [X] MIDI over USB
- [X] i2C follower on separate bus (Messages received from Monome Teletype via i2c converted to MIDI - BETA)

#### In progress: 

- [ ] Documentation
- [ ] Bluetooth LE MIDI
- [ ] Full MIDI to i2c mapping

#### Under consideration:

- [ ] Support for more "followers" modules (Disting EX, W/, Ansible and Crow), technically, already possible but the commands need to be added to commands.js.
- [ ] Web interface (Settings)
- [ ] Support for "getters" commands
- [ ] Host and trigger custom scripts


![Hans_diagram](/docs/images/diagram.png)

![Hans_revC](/docs/images/hans_c.jpg)


## [Log](#log)

##### 04/01/2023

🔴 Version 1 (RPI Zero W) is abandonned, no PCBs or pre-built units in stock, some componnents unavailable due to global shortage. No plans to open-source the full add-on board, but probably the circuit if I can get my hands on the Eagle file :-) V2 prototype ready for several months now but no firmware written yet. PCB also impacted by component shortage. Difficulty to find Pico W in stock. Hard to say if this project will ever get back to life.


##### 14/01/2021

Repository and project re-organization.

##### 13/01/2021

Hardware REV C fully tested and working.
This codebase was completely replaced by a Rust version. The Node.js version of the project is deprecated. 

##### 25/10/20

Hardware successfully tested. Although the actual node.js system used for sketching this app is functionnal, I've decided to move to another language and I'm currently rewriting the whole app in Rust!

##### 23/10/20

Testing REV C PCB

##### 20/09/2020

REV C PCB almost ready for production. Removed the MIDI "Thru" output. Replaced the hex-inverter with a single non-inverting buffer. Removed the duplicate row of "hardware I2c GPIO 2& 3" and added a row for "I2c following" mode (SPI1)

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




