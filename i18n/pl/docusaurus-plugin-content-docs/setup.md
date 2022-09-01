# Ustawienia

## Aplikacje Libadwaita

Nie są wymagane dodatkowe ustawienia dla natywnych aplikacji Libadwaita.

Dla aplikacji Flatpak Libadwaita musisz zastąpić ich uprawnienia:

- Uruchom `sudo flatpak override --filesystem=xdg-config/gtk-4.0` lub
- Użyj [Flatfi](https://github.com/tchx84/Flatseal) i dodaj `xdg-config/gtk-4.0` do **innych plików** w sekcji **Filesystem** **Wszystkie aplikacje**

## Vanilla GTK 4 aplikacje

Użyj [tego przewodnika](https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md) do aplikacji GTK 4.

## GTK 3 aplikacje

- Zainstaluj i zastosuj motyw [adw-gtk3](https://github.com/lassekongo83/adw-gtk3#readme) (nie zapomnij zainstalować pakietu Flatpa!)
- Dla aplikacji Flatpak musisz nadpisać ich uprawnienia:
  - Uruchom `sudo flatpak override --filesystem=xdg-config/gtk-3.0` lub
  - Użyj [Flatfi](https://github.com/tchx84/Flatseal) i dodaj `xdg-config/gtk-3.0` do **innych plików** w sekcji **Filesystem** **Wszystkie aplikacje**
