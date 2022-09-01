# Instellen

## Libadwaita applicaties

Voor native Libadwaita applicaties is geen extra installatie nodig.

Voor Flatpak Libadwaita applicaties moet je hun machtigingen overschrijven:

- Voer `sudo flatpak override --filesystem=xdg-config/gtk-4.0` uit of
- Gebruik [Flatseal](https://github.com/tchx84/Flatseal) en voeg `xdg-config/gtk-4.0` toe aan **Andere bestanden** in de **Filesystem** sectie van **Alle applicaties**

## Vanilla GTK 4 toepassingen

Gebruik [deze handleiding](https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md) voor het thema vanilla GTK 4 applicaties.

## GTK 3 toepassingen

- Installeer en pas het [adw-gtk3](https://github.com/lassekongo83/adw-gtk3#readme) thema toe (vergeet niet het Flatpak pakket te installeren!)
- Voor Flatpak applicaties moet je hun rechten overschrijven:
  - Voer `sudo flatpak override --filesystem=xdg-config/gtk-3.0` uit of
  - Gebruik [Flatseal](https://github.com/tchx84/Flatseal) en voeg `xdg-config/gtk-3.0` toe aan **Andere bestanden** in de **Filesystem** sectie van **Alle applicaties**
