# Hardware connections (OBSOLETE, issues solved with a custom hardware solution)


## ⚠️ Important: 
You should never "hot-wire" the i2c bus. Both the Raspberry PI and your Eurorack case should be turned <u>off</u> before plugging and manipulating the wires.  

Pay attention to the orientation of the board and headers in this picture. Double-check that the connections are correct. 

_____

## Optimal solution: software i2c + external pull-up resistors circuit


<img src="/docs/images/software_i2c_gpio.png" alt="i2c_GPIO" style="zoom:50%;" />

Software i2c overlay - this requires building an external circuit with two 4.7k pull-up resistors. We use another set of GPIO for SDA and SCL, this seems to prevent issues with the ER-301. (cf. list of issues). In this example we're using GPIO 23 and 24 for SDA and SCL.

Be extremely careful. You may seriously damage the Raspberry Pi and your modules if you connect a wire to the wrong GPIO. If you decide to try, you do this at your own risk. 


First we need to `sudo rpi-update` because of [a bug introduced in Raspbian Buster ](https://www.raspberrypi.org/forums/viewtopic.php?f=107&t=275991) (08/07/20) 

Software i2c overlay is enabled by adding this line in `/boot/config.txt` -> 

`
dtoverlay=i2c-gpio,bus=3,i2c_gpio_delay_us=2,i2c_gpio_sda=23,i2c_gpio_scl=24
`

We also need to edit `/hans/settings.js` and change the bus number to 3.

Don't connect the gpio yet.

Reboot and `ls /dev/i2c*` The terminal should return `/dev/i2c-1  /dev/i2c-3`

[More infos about the hardware i2c vs software i2c on RPI](https://github.com/fivdi/i2c-bus/blob/master/doc/raspberry-pi-software-i2c.md)

____

## Alternative solution: not recommended with an ER-301

This should be the normal and regular solution. Using the hardware i2c gpios of the Rapsberry PI. They have their own 1.8k pull-up resistors and don't need an external circuit. Unfortunately, this solution won't work correctly with the ER-301, once again: if you choose to connect the ER-301 to these gpios anyway or even if the 301 is present on the i2c bus, both the RPI and the 301 need to start simultaneously. Otherwise, the 301 won't boot. 

The exact cause has not been determined but this module uses its TX and RX lines for UART com during startup, the same lines are later used for i2c, this causes a conflict with the RPI. Surprinsigly, this doesn't happen with the software i2c-overlay. If you have an idea on how to solve that or if you know the cause of the issue, fell free to join the conversation in the "issues" section of this repository. It would be great to solve that. 

[More infos](https://github.com/fivdi/i2c-bus/blob/master/doc/raspberry-pi-software-i2c.md)

If you want to learn more about i2c, [read this](https://llllllll.co/t/a-users-guide-to-i2c/19219).

<img src="/docs/images/i2c_gpio.png" alt="i2c_GPIO" style="zoom:50%;" />

The <u>SDA I2C is GPIO2 (which is pin 3)</u> and the <u>SCL I2C is GPIO3 (which is pin 5)</u>. Use <u>pin 9 for the GROUND</u> (GND).

We also need to edit `/hans/settings.js` and change the bus number to 1.

This is the full GPIO pinout diagram of a Raspberry PI Zero or RPI 3. Be extremely careful. You may seriously damage the Raspberry Pi and your modules if you connect a wire to the wrong GPIO. If you decide to try, you do this at your own risk. 


<img src="/docs/images/rpi_gpio_pinout.png" alt="rpiZ-08" style="zoom: 50%;" />

*Raspberry Pi GPIO pinout*


### Links

https://hackaday.io/project/161718-pca9548a-i2c-mux-device-overlay-for-pi-gpio-i2c/log/154260-the-virtues-of-software-i2c-on-the-raspberry-pi

