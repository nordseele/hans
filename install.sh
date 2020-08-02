sudo apt update -y

sudo apt full-upgrade -y

sudo SKIP_WARNING=1 rpi-update

curl -o nodejs.tar.gz https://unofficial-builds.nodejs.org/download/release/v12.18.0/node-v12.18.0-linux-armv6l.tar.gz

tar -xzf nodejs.tar.gz

sudo cp -r node-v12.18.0-linux-armv6l/* /usr/local/

rm nodejs.tar.gz

rm -Rf node-v12.18.0-linux-armv6l

sudo apt-get install comitup -y
sudo systemctl disable systemd-resolved
sudo rm /etc/wpa_supplicant/wpa_supplicant.conf
sudo systemctl mask dnsmasq.service
sudo reboot
