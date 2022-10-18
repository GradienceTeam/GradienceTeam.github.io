---
title: Installation
description: How to install Gradience
order: 1
---

> **Warning**
> The main installation method is Flatpak from Flathub
### COPR 

Gradience is available on COPR. You can install it using the following command:

```shell
dnf copr enable lyessaadi/gradience
dnf install gradience
```

### Debian (And derivates)

> **Warning**
> Not available yet.
### AUR 

Gradience is available on AUR:

Using [Paru](https://github.com/morganamilo/paru):
    
```shell
paru -S gradience
```

For latest changes:

```shell
paru -S gradience-git
```

<details>
  <summary>🪛️ Without AUR helpers</summary>

```shell
git clone https://aur.archlinux.org/gradience.git
cd gradience
makepkg -sic
```

For latest changes:

```shell
git clone https://aur.archlinux.org/gradience-git.git
cd gradience-git
makepkg -sic
```

</details>


## 🏗️ Building from source

### GNOME Builder

GNOME Builder is the environment used for developing this application.
It can use Flatpak manifests to create a consistent building and running
environment cross-distro. Thus, it is highly recommended you use it.

1. Download [GNOME Builder](https://flathub.org/apps/details/org.gnome.Builder).
2. In Builder, click the "Clone Repository" button at the bottom, using `https://github.com/GradienceTeam/Gradience.git` as the URL.
3. Click the build button at the top once the project is loaded.

### Meson

#### Prerequisites

The following packages are required to build Gradience:

- Python 3 `python`
- PyGObject `python-gobject`
- Blueprint [`blueprint-compiler`](https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/setup.html)
- GTK 4 `gtk4`
- Libadwaita (>= 1.2.alpha) `libadwaita`
- Libsoup 3 (>= 3.2.0) `libsoup`
- Meson `meson`
- Ninja `ninja-build`

Required Python libraries:

```shell
pip install -r requirements.txt
```

#### Build Instruction

##### Global installation

```shell
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

##### Local build (for testing and development purposes)

```shell
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir"
ninja -C builddir install
ninja -C builddir run
```

> **Note** 
> During testing and developement, as a convenience, you can use the `local.sh` script to quickly rebuild local builds.

