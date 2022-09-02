# Configuration

## Applications Libadwaita

Aucune installation supplémentaire n'est nécessaire pour les applications natives Libadwaita.

Pour les applications Flatpak Libadwaita, vous devez remplacer leurs permissions :

- Exécutez `sudo flatpak override --filesystem=xdg-config/gtk-4.0` ou
- Utilisez [Flatseal](https://github.com/tchx84/Flatseal) et ajoutez `xdg-config/gtk-4.0` à **Autres fichiers** dans la section **Système de fichiers** de **Toutes les applications**

## Applications Vanilla GTK 4

Utilisez [ce guide](https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md) pour thème les applications GTK 4 vanilla.

## Applications GTK 3

- Installez et appliquez le thème [adw-gtk3](https://github.com/lassekongo83/adw-gtk3#readme) (n'oubliez pas d'installer le paquet Flatpak !)
- Pour les applications Flatpak, vous devez remplacer leurs permissions :
  - Exécutez `sudo flatpak override --filesystem=xdg-config/gtk-3.0` ou
  - Utilisez [Flatseal](https://github.com/tchx84/Flatseal) et ajoutez `xdg-config/gtk-3.0` à **Autres fichiers** dans la section **Système de fichiers** de **Toutes les applications**
