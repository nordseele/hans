## [Tracker](#tracker)


#### In progress:

- Custom hardware PCB (double i2c bus, pull-up resistors and power from 5V rail w/ pwr protection) ✅
- Switch between Hotspot and other network via captive portal or cli ✅
- Lemur template
- Web interface (Settings via node app) ?
- Bluetooth LE Midi w/ custom mapping file
- More follower modules (Disting EX, W/2) ? Can't test that, not sure.
- Custom functions ? 
- make use of the two I2c busses to convert and pass messages between the two


#### Under consideration:

- Internal (0 - 127) notes and CV conversion (similar to N and VV of Teletype) ? / Can be done via Lemur or Max. 
- Support for "getters" commands
- Support for "multi-masters" bus ? We'll use the second I2c bus to connect a second leader and pass messages to followers
