# Asetukset

## Libadwaita sovellukset

Libadwaita -sovelluksiin ei tarvita lisäasetuksia.

Flatpak Libadwaita sovelluksia varten sinun täytyy ohittaa niiden käyttöoikeudet:

- Suorita `sudo flatpak ohitus --filesystem=xdg-config/gtk-4.0` tai
- Käytä [Flatseal](https://github.com/tchx84/Flatseal) ja lisää `xdg-config/gtk-4.0` **Muut tiedostot** **Tiedostojärjestelmä** osa **Kaikki sovellukset**

## Vanilla GTK 4 sovellukset

Käytä [tätä opasta](https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md) teema vanilja GTK 4 sovelluksiin.

## GTK 3 sovellukset

- Asenna ja käytä [adw-gtk3](https://github.com/lassekongo83/adw-gtk3#readme) teemaa (älä unohda asentaa Flatpak-pakettia!)
- Flatpak-sovelluksia varten sinun täytyy ohittaa niiden käyttöoikeudet:
  - Suorita `sudo flatpak ohitus --filesystem=xdg-config/gtk-3.0` tai
  - Käytä [Flatseal](https://github.com/tchx84/Flatseal) ja lisää `xdg-config/gtk-3.0` **Muut tiedostot** **Tiedostojärjestelmän** osa **Kaikki sovellukset**
