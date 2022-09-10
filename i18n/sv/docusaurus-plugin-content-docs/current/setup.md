# Konfiguration

## Libadwaita applikationer

Ingen ytterligare installation krävs för inhemska Libadwaita applikationer.

För Flatpak Libadwaita program måste du åsidosätta deras behörigheter:

- Kör `sudo flatpak åsidosätta --filesystem=xdg-config/gtk-4.0` eller
- Använd [Flatseal](https://github.com/tchx84/Flatseal) och lägg till `xdg-config/gtk-4.0` till **Andra filer** i **-filsystemet** -sektionen i **Alla program**

## Vanilla GTK 4 applikationer

Använd [den här guiden](https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md) för att tema vanilj GTK 4 program.

## GTK 3 applikationer

- Installera och tillämpa temat [adw-gtk3](https://github.com/lassekongo83/adw-gtk3#readme) (glöm inte att installera Flatpak paketet!)
- För Flatpak program måste du åsidosätta deras behörigheter:
  - Kör `sudo flatpak åsidosätta --filesystem=xdg-config/gtk-3.0` eller
  - Använd [Flatseal](https://github.com/tchx84/Flatseal) och lägg till `xdg-config/gtk-3.0` till **Andra filer** i **-filsystemet** -sektionen i **Alla program**
