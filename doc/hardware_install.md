## Hardware connections (Caution)

### Optimal solution =>

<img src="/doc/images/software_i2c_gpio.png" alt="i2c_GPIO" style="zoom:50%;" />

Software i2c overlay - this requires creating an external circuit with two 4.7k pull-up resistors. We use another set of GPIO for SDA and SCL, this seems to prevent issues with the ER-301. (cf. list of issues). In this example we're using GPIO 23 and 24. 

____

##### ⚠️ Important: 
You should never "Hot-wire" the i2c bus. Both the Raspberry PI and your Eurorack case should be turned <u>off</u> before plugging the wires.  

____

⚠️ Pay attention to the orientation of the board and headers in this picture. Double-check that the connections are correct. 

The hardware i2c Gpios of the Raspberry Pi provide two pull-up resistors (1.8k) on the SCL and SDA lines. If you want to learn more about i2c, [read this](https://llllllll.co/t/a-users-guide-to-i2c/19219).

<img src="/doc/images/i2c_gpio.png" alt="i2c_GPIO" style="zoom:50%;" />

This is the full GPIO pinout diagram of a Raspberry PI Zero or RPI 3. Be extremely careful. **The <u>SDA I2C is GPIO2 (which is pin3)</u> and the <u>SCL I2C is GPIO3 (which is pin5)</u>. Use <u>pin9 for the GROUND</u> (GND).** 


<img src="/doc/images/rpi_gpio_pinout.png" alt="rpiZ-08" style="zoom: 50%;" />

*Raspberry Pi GPIO pinout*

