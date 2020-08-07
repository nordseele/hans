### [Status](#status)

Experimental ⚠️ / Work in progress.


### [Description](#description)

#### OSC and Ble Midi to I2c for Er-301, Txo etc

This project is still a work in progress and is partially published here as a "proof of concept" and not as a set of instructions to follow.

This project requires the "Hans hat" created specifically and a RPI Zero W.

____

### [Log](#log)

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


____

## [Tracker](#tracker)


#### In progress:

- Custom hardware PCB (double i2c bus, pull-up resistors and power from 5V rail w/ pwr protection) ✅
- Switch between Hotspot and other network via captive portal or cli ✅
- Lemur template
- Web interface (Settings via node app) ?
- Bluetooth LE Midi w/ custom mapping file ✅
- More "followers" modules (Disting EX, W/2) ? 

- make use of the two I2c busses to convert and pass messages between the two


#### Under consideration:

- Internal (0 - 127) notes and CV conversion (similar to N and VV of Teletype) ? / Can be done via Lemur or Max. 
- Support for "getters" commands
- Support for "multi-masters" bus ? We'll use the second I2c bus to connect a second leader and pass messages to followers
- Custom functions 


