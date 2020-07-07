### Status : 

⚠️ **This project is experimental and is still bein developed.**

❌ An issue prevents the ER-301 from booting up normally if both the Raspberry Pi and the ER-301 aren't started simultaneously (see "known issues" below).  

Until an hardware solution is created, it is recommended to avoid connecting the ER-301 to the i2c bus. 

You must pay close attention to the wiring between the GPIO of the Raspberry Pi and your modules. 

The app itself won't damage your modules but if you mess up the wiring between the RPi and the Eurorack modules, you may seriously damage them. Do it at your own risk.

_____

#### Known issues: 

- The boot time of RPI Zero W is approx. 50 seconds. This needs to be improved. 
- ⚠️ Connecting the Raspberry PI directly to the ER-301 module or even to the same i2c bus is a source of problems. If the two devices are not started simultaneously, or if the ER-301 is powered on after the RPI, the Raspberry Pi will prevent the ER-301 from starting normally. To overcome this problem, it is prefereable to create an external circuit including two 4.7k pull-up resistors and use another set of GPIO on the Raspberry for i2c (aka. "Software i2c overlay") rather than the "hardware i2c gpio".
- The latency will vary depending on the network, router etc. If nothing is sent during a long period, the network tends to "fall asleep", the first OSC message you send will be sent with an abnormal latency. Optimal and regular latency and response is achieved by setting up an ad-hoc network on the RPI. 
- Hans only sends "setters" and cannot retrieve from modules aka. "getters" 

[Read the full list of issues.](https://github.com/nordseele/hans/issues) 


____

#### Important:

The Raspberry Pi acts as a "leader" on the i2c bus, it must be the only "leader" on this bus. This means that the Raspberry Pi and a Teletype can not co-exist on the same bus[^1]. Hopefully this might be possible soon.

This configuration has only been tested with an ER-301 and a TXo on the bus, they are both "followers". The configuration has not been tested on a RPI 4, only a RPI3B and a RPI Zero. The installation notes may vary for a RPI4.

