## Software install - A "headless" RPI


## Part 1. Install Raspberry OS, enable SSH, enable i2c, install Git etc.

The installation begins like any fresh headless "Raspi" install: 

Use the Raspberry Pi Imager to instal Raspberry Pi OS <u>Lite</u> on your SD card. 

https://www.raspberrypi.org/downloads/

Mount the SD Card and enter the following command

```shell
cd /volumes/boot && touch ssh
```

This will create an empty SSH file at the root of your SD and will enable SSH on the RPI.

Then we need to create a *WPA_supplicant.conf* file. It contains your network info. Follow these instructions: 

https://www.raspberrypi.org/documentation/configuration/wireless/headless.md

and drop the file at the root of the sd card. 

Eject the card, put it in the Raspberry Pi and start it up.

Use [lanscan](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjKtsb6-qzqAhWhunEKHaLhDE0QFjAAegQIGhAB&url=https%3A%2F%2Fapps.apple.com%2Ffr%2Fapp%2Flanscan%2Fid472226235%3Fmt%3D12&usg=AOvVaw32b0kELbBwROgBLd9MEySP) (or any other suitable tool) to find the IP address of the Pi

Open a terminal window and connect to the Raspberry Pi via SSH. The password is "raspberry".

( ssh-keygen -R )

```shell
ssh pi@192.XX.XX.XX
```

Now we're going to update the RPI and install a few useful things

```shell
sudo apt update

sudo apt full-upgrade

sudo apt-get install git
```

```shell
sudo raspi-config 
```

Navigate within the menus and:

*Network options* -> change the hostname if you wish (I name mine "hans") 

*Interfacing options*  -> **enable i2c**

Change the password if you wish. 

*Localisation options* -> set your "local", and perhaps the timezone if you wish. Set the WiFi country in raspi-config's **Localisation Options**.

*Advanced options* -> **expand the filesystem**

Exit *raspi-config* and reboot when prompted. 



## Part 2. Install Node.js

**On a Raspberry Pi Zero W (Arm6)** 

```shell
curl -o nodejs.tar.gz https://unofficial-builds.nodejs.org/download/release/v12.18.0/node-v12.18.0-linux-armv6l.tar.gz

tar -xzf nodejs.tar.gz

sudo cp -r node-v12.18.0-linux-armv6l/* /usr/local/

rm nodejs.tar.gz

rm -Rf node-v12.18.0-linux-armv6l
```

**On a Raspberry Pi 3 (Arm7)**

```shell
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

sudo apt install -y nodejs

sudo ln -s /usr/bin/npm /usr/local/bin/npm

```



## Part 5. Install Hans (the node.js app)

Check if node is correctly installed `node -v` `npm -v`  If it doesn't return any version number, try to reboot first. 

Now we can proceed to the installation of Hans, it's a simple and lightweight node.js app. We simply clone the github repository. 

```shell
cd && git clone https://github.com/nordseele/hans.git
```



## Part 6. Running the app as a service (recommended)

We want to make Hans start automatically when you power on the Pi. We run the following commands. 

```shell
cd /home/pi/hans && sudo cp hans.service /etc/systemd/system
```

```shell
sudo systemctl enable hans
```

If you change your mind after and want to prevent Hans from starting automatically, use: `sudo systemctl disable hans` 

<u>Reminder is you want to start and stop Hans manually:</u>

Start: `sudo systemctl start hans`

Stop: `sudo systemctl stop hans`

Or from the root `cd /hans && npm start` 



## Parts 7. Setting up the ad-hoc network (optional but recommended) 

Setting up a ad-hoc network will greatly improve the latency and response. 

https://github.com/simondlevy/RPiAdHocWiFi

`cd && git clone https://github.com/simondlevy/RPiAdHocWiFi.git`

`cd RPiAdHocWiFi`

`sudo ./install.sh` 

`sudo nano rc.local`  and change the network name if you wish (I'm setting mine to "Hans") and uncomment the wep key if you wish to use one (recommended)

`sudo reboot` 