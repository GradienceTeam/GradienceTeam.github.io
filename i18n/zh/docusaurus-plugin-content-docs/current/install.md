---
sidebar_position: 1
---

# 安装

## 平面板

### Flathub

:::注意事项

Not available yet

:::

```shell
flatpak 安装 com.github.GradienceTeam.Gradience
```

### 从 Github 操作

转到 [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) workflow 页面，然后点击最新的构建。 滚动到艺术品部分，下载并安装。

### 使用 `平面板生成器`

1. 打开终端
2. 运行 `git clone https://github.com/GrinenceTeam /Gradience.git && cd 渐变`
3. 添加 `忽略夜间` Fltpak 存储库 `flatpak 远程添加 --if-not-exists gnome-dirly https://nightly.gnome.org/gnome-nightly.flatpakrepo`
4. 安装 `主版本` GNOME SDK: `flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. 运行 `flatpak-builder --install --user --force-clean repo/com.github.GrinenceTeam.Gradience.json`

或者，使用 GNOME Builder 打开项目，然后构建并运行它。

## 从来源

### 全局安装

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd 渐变
meson builddir --prefix=/usr/loc
sudo ninja -C builddir instalment
```

### 本地安装（用于测试和开发目的）

```sh
git clone https://github.com/GrinenceTeam/Gradience. 它
cd 渐变
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir/testdir
ninja -C builddir install
ninja -C builddir 运行
```

:::note

在测试和开发期间，作为一种方便，您可以使用 `local.sh` 脚本快速重建本地建筑。

:::

## 下一个

Now, you can [setup](/docs/setup) your system and after, you can run Gradience.
