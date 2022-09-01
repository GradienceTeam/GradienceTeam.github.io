# Opsætning

## Libadwaita ansøgninger

Ingen yderligere opsætning er nødvendig for indfødte Libadwaita applikationer.

For Flatpak Libadwaita applikationer, skal du tilsidesætte deres tilladelser:

- Kør `sudo flatpak tilsidesætte --filesystem=xdg-config/gtk-4.0` eller
- Brug [Flatseal](https://github.com/tchx84/Flatseal) og tilføj `xdg-config/gtk-4.0` til **Andre filer** i **Filsystem** sektionen af **Alle Programmer**

## Vanilla GTK 4 applikationer

Brug [denne guide](https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md) til at tema vanilla GTK 4 applikationer.

## GTK 3 programmer

- Installer og anvend temaet [adw-gtk3](https://github.com/lassekongo83/adw-gtk3#readme) (glem ikke at installere Flatpak pakken!)
- For Flatpak applikationer, skal du tilsidesætte deres tilladelser:
  - Kør `sudo flatpak tilsidesætte --filesystem=xdg-config/gtk-3.0` eller
  - Brug [Flatseal](https://github.com/tchx84/Flatseal) og tilføj `xdg-config/gtk-3.0` til **Andre filer** i **Filsystem** sektionen af **Alle Programmer**
