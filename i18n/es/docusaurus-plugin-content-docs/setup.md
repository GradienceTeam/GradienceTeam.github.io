# Configurar

## Aplicaciones de Libadwaita

No se requiere ninguna configuración adicional para aplicaciones nativas de Libadwaita.

Para aplicaciones de Flatpak Libadwaita, es necesario anular sus permisos:

- Ejecute `sudo flatpak override --filesystem=xdg-config/gtk-4.0` o
- Utilice [Flatseal](https://github.com/tchx84/Flatseal) y añadir `xdg-config/gtk-4.0` a **Otros archivos** en la sección **Filesystem** de **Todas las aplicaciones**

## Aplicaciones Vanilla GTK 4

Usa [esta guía](https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md) para tematizar aplicaciones GTK 4 de vanilla temática.

## Aplicaciones GTK 3

- Instala y aplica el tema [adw-gtk3](https://github.com/lassekongo83/adw-gtk3#readme) (no olvides instalar el paquete Flatpak!)
- Para aplicaciones de Flatpak, necesita anular sus permisos:
  - Ejecute `sudo flatpak override --filesystem=xdg-config/gtk-3.0` o
  - Utilice [Flatseal](https://github.com/tchx84/Flatseal) y añadir `xdg-config/gtk-3.0` a **Otros archivos** en la sección **Filesystem** de **Todas las aplicaciones**
