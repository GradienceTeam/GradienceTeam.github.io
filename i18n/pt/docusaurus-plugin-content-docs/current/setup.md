# Configuração

## Aplicativos Libadwaita

Nenhuma configuração adicional é necessária para aplicações nativas do Libadwaita.

Para aplicativos Flatpak Libadwaita, você precisa substituir as permissões deles:

- Execute `sudo flatpak override --filesystem=xdg-config/gtk-4.0` ou
- Use [Flatseal](https://github.com/tchx84/Flatseal) e adicione `xdg-config/gtk-4.0` para **Outros arquivos** na seção **Arquivos** de **Todos os aplicativos**

## Aplicativos Vanilla GTK 4

Use [este guia](https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md) para o tema vanilla GTK 4.

## Aplicativos do GTK 3

- Instale e aplique o tema [adw-gtk3](https://github.com/lassekongo83/adw-gtk3#readme) (não esqueça de instalar o pacote do Flatpak!)
- Para aplicativos Flatpak, você precisa sobrescrever suas permissões:
  - Execute `sudo flatpak override --filesystem=xdg-config/gtk-3.0` ou
  - Use [Flatseal](https://github.com/tchx84/Flatseal) e adicione `xdg-config/gtk-3.0` para **Outros arquivos** na seção **Arquivos** de **Todos os aplicativos**
