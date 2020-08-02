# Software install


## Part 1. Headless RPI setup
Use the Raspberry Pi Imager to instal Raspberry Pi OS <u>Lite</u> on your SD card. 

https://www.raspberrypi.org/downloads/

Mount the SD Card and 

```shell
cd /volumes/boot && touch ssh
```



#### Connection over Wifi 

Then we need to create a *WPA_supplicant.conf* file. It contains your network info. Follow these instructions: 

https://www.raspberrypi.org/documentation/configuration/wireless/headless.md

and drop the file at the root of the sd card. 

Eject the card, put it in the Raspberry Pi and power the Pi up.

(If you prefer, you can connect the Pi Zero W using a micro USB to Ethernet adaptor/hub or using its OTG capability.)



Open a terminal window and connect to the Raspberry Pi via SSH. The password is "raspberry".

```shell
ssh pi@raspberrypi.local 
```

`ssh-keygen -R raspberrypi.local` if you encounter an "host/key verification" error. Note that it can take a few minutes until the pi connects to your wifi network. Check with Lanscan when it's connected and ready.

The whole install process is now scripted.

```shell
sudo apt install git -y
wget https://raw.githubusercontent.com/nordseele/hans/master/install.sh
chmod +x install.sh && ./install.sh
```

Once the script has started, it will take approx. 30 minutes to update the pi, install things, etc... At the very end, you will be disconnected. Wait until the RPI reboots and the network "hans" shows up in the list of SSID. 

At this point, The Raspberry Pi advertises an hotspot. 

Connect to the hotspot "hans"

Network name : "hans"

Password : "hhhhhhhh" (you can change the password later in /etc/comitup.conf if you wish)


If you wish to connect the Pi to another network, open http://hans.local then choose a network connected to internet and enter the details. 



## Notes

If you wish to connect to re-activate the hotspot):

ssh to the Pi and `comitup-cli` and type *d*

the IP of the pi is 10.41.0.1 



If you want to prevent Hans from starting automatically, use: `sudo systemctl disable hans` 

<u>Reminder is you want to start and stop Hans manually:</u>

Start: `sudo systemctl start hans`

Stop: `sudo systemctl stop hans`

Or from the root `cd /hans && npm start` 
