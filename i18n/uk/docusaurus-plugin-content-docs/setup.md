# Установка

## Програми Libadwaita

Не потрібно додаткового налаштування для місцевих програм Libadwaita

Для додатків Flatpak Libadwaita вам необхідно перевизначити їх дозволи:

- Запустити `sudo flatpak override --filesystem=xdg-config/gtk-4.0` або
- Використовуйте [Flatseal](https://github.com/tchx84/Flatseal) і додайте `xdg-config/gtk-4.0` до **інших файлів** у розділі **Файловій системі** від **Всі додатки**

## Ванільний додаток GTK 4

Використовуйте [цей посібник](https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md) до теми Vanilla GTK 4 додатків.

## GTK 3 додатки

- Встановити та застосувати [adw-gtk3](https://github.com/lassekongo83/adw-gtk3#readme) тему (не забудьте встановити пакет Flatpak!)
- Для додатків Флатпак вам необхідно замінити їхні дозволи:
  - Запустити `sudo flatpak override --filesystem=xdg-config/gtk-3.0` або
  - Використовуйте [Flatseal](https://github.com/tchx84/Flatseal) і додайте `xdg-config/gtk-3.0` до **інших файлів** у розділі **Файлова** **Всі додатки**
