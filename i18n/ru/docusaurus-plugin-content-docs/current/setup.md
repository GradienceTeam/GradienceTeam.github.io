# Настройка

## Приложение Libadwaita

Дополнительная настройка не требуется для приложений Libadwaita.

Для приложений Flatpak Libadwaita необходимо переопределить их разрешения:

- Запустите `sudo flatpak переопределить --filesystem=xdg-config/gtk-4.0` или
- Используйте [Flatseal](https://github.com/tchx84/Flatseal) и добавьте `xdg-config/gtk-4.0` в **Другие файлы** в **Файловая система** в разделе **Все приложения**

## Ванильные приложения GTK 4

Используйте [эту инструкцию](https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md), чтобы применить тему для приложений GTK 4.

## Приложения GTK 3

- Установите и примените тему [adw-gtk3](https://github.com/lassekongo83/adw-gtk3#readme) (не забудьте установить пакет Flatpak!)
- Для приложений Flatpak, вам нужно переопределить их разрешения:
  - Запустите `sudo flatpak override --filesystem=xdg-config/gtk-3.0` или
  - Используйте [Flatseal](https://github.com/tchx84/Flatseal) и добавьте `xdg-config/gtk-3.0` в **Другие файлы** в **Файловая система** в разделе **Все приложения**
