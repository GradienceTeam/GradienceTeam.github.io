# Configurare

## Aplicații Libadwaita

Nu este necesară o configurare suplimentară pentru aplicațiile native Libadwaita.

Pentru aplicațiile Flatpak Libadwaita, trebuie să le suprascrieți permisiunile:

- Executați `sudo flatpak override --filesystem=xdg-config/gtk-4.0` sau
- Utilizaţi [Flatseal](https://github.com/tchx84/Flatseal) şi adăugaţi `xdg-config/gtk-4.0` la **Alte fişiere** în secţiunea **Filesystem** **Toate Aplicaţiile**

## Aplicații Vanilla GTK 4

Folosește [acest ghid](https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md) pentru tema cu vanilie a aplicațiilor GTK 4.

## Aplicații GTK 3

- Instalează și aplică tema [adw-gtk3](https://github.com/lassekongo83/adw-gtk3#readme) (nu uita să instalezi pachetul Flatpak!)
- Pentru cererile Flatpak, trebuie să înlocuiți permisiunile acestora:
  - Executați `sudo flatpak override --filesystem=xdg-config/gtk-3.0` sau
  - Folosește [Flatseal](https://github.com/tchx84/Flatseal) și adaugă `xdg-config/gtk-3.0` la **Alte fișiere** în secțiunea **Fișiere** **Toate Aplicațiile**
