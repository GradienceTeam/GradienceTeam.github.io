---
sidebar_position: 1
---

# 安装

## 平面板

### Flathub

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

## Building and Installing

Gradience can be installed using multiple methods.

- Flathub (Recommended)
- As RPM package
- As DEB package (not available yet)
- From AUR

### 平面板

Gradience is available on Flathub. You can install it using the following command:

```bash
flatpak install flathub com.github.GradienceTeam.Gradience
```

### COPR

Gradience is available on COPR. You can install it using the following command:

```bash
dnf copr enable lyessaadi/gradience
dnf install gradience
```

### Debian (And derivates)

Not available yet. If you want, submit a PR.

### AUR

Gradience is available on AUR. You can install it using the following command:

```bash
yay -S gradience # or gradience-git
```

### Building from source

#### Requirements

- Python 3 `python`
- PyGObject `python-gobject`
- Blueprint [`blueprint-compiler`](https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/setup.html)
- GTK4 `gtk4`
- libadwaita (>= 1.2.alpha) `libadwaita`
- Meson `meson`
- Ninja `ninja-build`

Install required Python libraries:

```sh
pip install -r requirements.txt
```

### 全局安装

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd 渐变
meson builddir --prefix=/usr/loc
sudo ninja -C builddir instalment
```

### Local build (for testing and development purposes)

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir"
ninja -C builddir install
ninja -C builddir run
```

:::note

在测试和开发期间，作为一种方便，您可以使用 `local.sh` 脚本快速重建本地建筑。

:::

## 下一个

Now, you can [setup](/docs/setup) your system and after, you can run Gradience.
