# Configurazione

## Applicazioni di Libadwaita

Non è richiesta alcuna configurazione aggiuntiva per le applicazioni native di Libadwaita.

Per le applicazioni Flatpak Libadwaita è necessario sovrascrivere i loro permessi:

- Esegui `sudo flatpak override --filesystem=xdg-config/gtk-4.0` o
- Usa [Flatseal](https://github.com/tchx84/Flatseal) e aggiungi `xdg-config/gtk-4.0` a **Altri file** nella sezione **Filesystem** di **Tutte le Applicazioni**

## Applicazioni Vanilla GTK 4

Usa [questa guida](https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md) per le applicazioni GTK 4 del tema vaniglia.

## Applicazioni GTK 3

- Installa e applica il tema [adw-gtk3](https://github.com/lassekongo83/adw-gtk3#readme) (non dimenticare di installare il pacchetto Flatpak!)
- Per le applicazioni Flatpak, è necessario sovrascrivere i loro permessi:
  - Esegui `sudo flatpak override --filesystem=xdg-config/gtk-3.0` o
  - Usa [Flatseal](https://github.com/tchx84/Flatseal) e aggiungi `xdg-config/gtk-3.0` a **Altri file** nella sezione **Filesystem** di **Tutte le Applicazioni**
