sudo apt update -y

sudo apt full-upgrade -y

sudo SKIP_WARNING=1 rpi-update

curl -o nodejs.tar.gz https://unofficial-builds.nodejs.org/download/release/v12.18.0/node-v12.18.0-linux-armv6l.tar.gz

tar -xzf nodejs.tar.gz

sudo cp -r node-v12.18.0-linux-armv6l/* /usr/local/

rm nodejs.tar.gz

rm -Rf node-v12.18.0-linux-armv6l


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

sudo reboot
