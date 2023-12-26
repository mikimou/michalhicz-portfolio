sudo pacman -Syu
sudo pacman -S alacritty \
alsa-utils \
breeze \
breeze-gtk \
cmake \
docker \
docker-compose \
dunst \
feh \
fuse2 \
ghostscript \
git \
gnome-terminal \
gnome-themes-extra \
htop \
jre-openjdk \
libadwaita \
lollypop \
lxappearance \
lxsession \
man-db \
nano \
nemo \
neofetch \
neovim \
nitrogen \
npm \
obs-studio \
pavucontrol \
picom \
pipewire \
pipewire-alsa \
pipewire-jack \
pipewire-pulse \
python-dbus-next \
python-pip \
python-psutil \
python-pywal \
qjackctl \
qtile \
rofi \
rofi-calc \
scrcpy \
scrot \
thunar \
unzip \
vlc \
wireplumber \
xsettingsd \
github-cli \
noto-fonts \
helvum
sudo pacman -S --needed git base-devel && git clone https://aur.archlinux.org/yay.git && cd yay && makepkg -si
yay -S wpgtk \
visual-studio-code-bin \
themix-full-git \
qtile-extras-git \
pycharm-community-jre \
gtk-theme-flat-color-git \
google-chrome \
chrome-remote-desktop \
brightness-controller-git \
brave-bin \
audiorelay \
adwaita-qt5-git \
cava
cd ~
git clone https://github.com/mikimou/dotfiles.git
cp -arf ~/dotfiles/. ~
cp -a ~/dotfiles/Downloads/. ~/Downloads/
sudo cp -a ~/dotfiles/fonts/. /usr/share/fonts/
sudo cp -rf ~/dotfiles/chrome-remote-desktop /opt/google/chrome-remote-desktop/chrome-remote-desktop
sudo systemctl start docker
wal -i ~/Downloads/
wpg-install.sh -g
echo
echo "Setup complete!"
echo