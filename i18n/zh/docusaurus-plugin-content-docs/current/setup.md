# 设置

## Libadwaita 应用程序

本机Libadwaita应用程序不需要额外安装。

对于Flatpak Libadwaita应用，您需要覆盖他们的权限：

- 运行 `sudo flatpak override --filesystem=xdg-config/gtk-4.0` 或
- 使用 [Flatseal](https://github.com/tchx84/Flatseal) 并添加 `xdg-config/gtk-4.0` 到 **其他文件** 在 **文件系统** 部分 **所有应用程序**

## Vanilla GTK 4 应用程序

使用 [本指南](https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md) 作为主题原版 GTK 4 应用程序。

## GTK 3 应用程序

- 安装并应用 [adw-gtk3](https://github.com/lassekongo83/adw-gtk3#readme) 主题 (不要忘记安装Flatpak 包!)
- 对于Flatpak应用，您需要覆盖他们的权限：
  - 运行 `sudo flatpak override --filesystem=xdg-config/gtk-3.0` 或
  - 使用 [Flatseal](https://github.com/tchx84/Flatseal) 并添加 `xdg-config/gtk-3.0` 到 **其他文件** 在 **文件系统** 部分 **所有应用程序**
