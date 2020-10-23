sudo apt update -y

# sudo apt full-upgrade -y

sudo SKIP_WARNING=1 rpi-update

curl -o nodejs.tar.gz https://unofficial-builds.nodejs.org/download/release/v12.18.0/node-v12.18.0-linux-armv6l.tar.gz

tar -xzf nodejs.tar.gz

sudo cp -r node-v12.18.0-linux-armv6l/* /usr/local/

rm nodejs.tar.gz

rm -Rf node-v12.18.0-linux-armv6l

cd && git clone https://github.com/nordseele/hans.git

sudo cp /home/pi/hans/hans.service /etc/systemd/system

sudo systemctl enable hans

sudo apt-get install libdbus-1-dev libglib2.0-dev libudev-dev libical-dev libreadline-dev libasound2-dev -y
wget https://github.com/antiprism/amidiauto/releases/download/v1.01Raspbian/amidiauto-1.01_buster.deb
sudo apt install ./amidiauto-1.01_buster.deb
sudo cp amidiauto.conf /etc/amidiauto.conf
sudo systemctl enable amidiauto
sudo cp mod-ttymidi.service /etc/systemd/system/mod-ttymidi.service
sudo systemctl enable mod-ttymidi.service

sudo raspi-config nonint do_i2c 0
sudo sh -c "echo 'dtoverlay=i2c-gpio,bus=3,i2c_gpio_delay_us=2,i2c_gpio_sda=5,i2c_gpio_scl=6' >> /boot/config.txt"

sudo raspi-config nonint do_expand_rootfs

sudo apt-get install comitup -y
sudo systemctl disable systemd-resolved
sudo rm /etc/wpa_supplicant/wpa_supplicant.conf
sudo systemctl mask dnsmasq.service

sudo sh -c "echo 'ap_name: hans' >> /etc/comitup.conf"
sudo sh -c "echo 'ap_password: hhhhhhhh' >> /etc/comitup.conf"

sudo raspi-config nonint do_hostname hans
sudo cp config.txt /boot/config.txt
sudo reboot
