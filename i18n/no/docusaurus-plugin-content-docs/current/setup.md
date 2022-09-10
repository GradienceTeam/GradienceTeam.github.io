# Oppsett

## Libadwaita applikasjoner

Ingen ekstra oppsett kreves for Libadwaita-applikasjoner.

For Flatpak Libadwaita applikasjoner, du må overstyre tillatelsene sine:

- Kjør `sudo flatpak overstyr --filesystem=xdg-config/gtk-4.0` or
- Bruk [Flatseal](https://github.com/tchx84/Flatseal) og legg til `xdg-config/gtk-4.0` til **Andre filer** i **filsystem** avsnitt **Alle applikasjoner**

## Vanilla GTK 4 applikasjoner

Bruk [denne veiledningen](https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md) for tema vanilla GTK 4 applikasjoner.

## GTK 3 applikasjoner

- Installer og bruk [adw-gtk3](https://github.com/lassekongo83/adw-gtk3#readme) temaet (ikke glem å installere Flatpak pakken!)
- For Flatpak applikasjoner, må du overstyre tillatelsene sine:
  - Kjør `sudo flatpak overstyr --filesystem=xdg-config/gtk-3.0` eller
  - Bruk [Flatseal](https://github.com/tchx84/Flatseal) og legg til `xdg-config/gtk-3.0` til **Andre filer** i **filsystem** avsnitt **Alle applikasjoner**
