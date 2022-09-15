---
sidebar_position: 1
---

# 安装

## 平面板

### 拉休布文

<a href="https://flathub.org/apps/details/com.github.GradienceTeam.Gradience">
    <img width="200" alt="在 Flathub 上下载" src="https://flathub.org/assets/badges/flathub-badge-i-en.svg"/>
</a>

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

## 正在构建和安装

可使用多种方法安装渐变性。

- Flathub (推荐)
- 为 RPM 包
- 作为DEB软件包(尚不可用)
- 从 AUR

### 平面板

渐变在Flathub上可用。 您可以使用以下命令安装它：

```bash
flatpak 安装 flathuthub com.github.GrinenceTeam.Gradience
```

### 外观

GPR 上有渐变性。 您可以使用以下命令安装它：

```bash
dnf copr 启用 lyessaadi/渐变
dnf 安装渐变
```

### Debian (和衍生工具)

尚不可用。 如果你想要，提交一个 PR。

### AUR

渐变可在 AUR上使用。 您可以使用以下命令安装它：

```bash
yay -S 梯度 # 或梯度 git
```

### 从源代码创建

#### B. 所需经费

- Python 3 `python`
- PyGObject `python-gobject`
- 蓝图 [`蓝图编译器`](https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/setup.html)
- GTK4 `gtk4`
- libadwaita (>= 1.2.alpha) `libadwaita`
- Meson `meson`
- 忍者 `ninja build`

安装必需的 Python 库：

```sh
pip 安装-r requirements.txt
```

### 全局安装

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd 渐变
meson builddir --prefix=/usr/loc
sudo ninja -C builddir instalment
```

### 本地建筑（用于测试和开发目的）

```sh
git clone https://github.com/GrinenceTeam/Gradience. 它
cd 渐变
meson builddir
meson configure builddir -Dprefix="$(pwd)/ builddir
ninja -C builddir install
ninja -C builddir 运行
```

:::note

在测试和开发期间，作为一种方便，您可以使用 `local.sh` 脚本快速重建本地建筑。

:::

## 下一个

Now, you can [setup](/docs/setup) your system and after, you can run Gradience.
