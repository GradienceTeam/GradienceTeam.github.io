# Nastavení

## Aplikace Libadwaita

Pro nativní aplikace Libadwaita není vyžadováno žádné další nastavení.

Pro aplikace Flatpak Libadwaita musíte přepsat jejich oprávnění:

- Spustit `sudo flatpak override --filesystem=xdg-config/gtk-4.0` nebo
- Použijte [Flatseal](https://github.com/tchx84/Flatseal) a přidejte `xdg-config/gtk-4.0` do **ostatních souborů** v sekci **Souborový systém** z **Všechny aplikace**

## Vanilla GTK 4 aplikace

Použijte [tento průvodce](https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md) pro vzhled standardních GTK 4 aplikací.

## GTK 3 aplikace

- Nainstalujte a aplikujte [adw-gtk3](https://github.com/lassekongo83/adw-gtk3#readme) šablonu (nezapomeňte nainstalovat Flatpak balíček!)
- Pro Flatpak aplikace musíte přepsat jejich oprávnění:
  - Spustit `sudo flatpak override --filesystem=xdg-config/gtk-3.0` nebo
  - Použijte [Flatseal](https://github.com/tchx84/Flatseal) a přidejte `xdg-config/gtk-3.0` do **ostatních souborů** v sekci **Souborový systém** z **Všechny aplikace**
