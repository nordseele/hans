sudo apt update -y

sudo apt full-upgrade -y

sudo SKIP_WARNING=1 rpi-update

curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

sudo apt install -y nodejs

sudo ln -s /usr/bin/npm /usr/local/bin/npm

cd && git clone https://github.com/nordseele/hans.git

sudo cp /home/pi/hans/hans.service /etc/systemd/system

sudo systemctl enable hans

sudo raspi-config nonint do_i2c 0
sudo sh -c "echo 'dtoverlay=i2c-gpio,bus=3,i2c_gpio_delay_us=2,i2c_gpio_sda=5,i2c_gpio_scl=6' >> /boot/config.txt"

sudo raspi-config nonint do_expand_rootfs

sudo apt-get install comitup -y
sudo systemctl disable systemd-resolved
sudo rm /etc/wpa_supplicant/wpa_supplicant.conf
sudo systemctl mask dnsmasq.service

sudo sh -c "echo 'ap_name: hans_dev' >> /etc/comitup.conf"
sudo sh -c "echo 'ap_password: hhhhhhhh' >> /etc/comitup.conf"

sudo raspi-config nonint do_hostname hans

sudo reboot