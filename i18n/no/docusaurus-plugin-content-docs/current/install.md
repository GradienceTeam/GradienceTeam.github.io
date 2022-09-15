---
sidebar_position: 1
---

# Installasjon

## Flatpak

### Flathub

<a href="https://flathub.org/apps/details/com.github.GradienceTeam.Gradience">
    <img width="200" alt="Download on Flathub" src="https://flathub.org/assets/badges/flathub-badge-i-en.svg"/>
</a>

```shell
flatpak install com.github.GradienceTeam.Gradience
```

### Fra Github Handlinger

Gå på [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) arbeidsflytside, og klikk på det siste bygget. Rull til Artifritt-seksjonen, last ned og installer.

### Bruker `flatshjelper`

1. Åpne terminal
2. Kjør `git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. Legg til `gnome-nightly` Flatpak repository `flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo`
4. Installer `master` versjonen av GNOME SDK: `flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. Kjør `flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json`

Alternativt kan du åpne prosjektet med GNOME Builder, og så bygge og kjøre det.

## Building and Installing

Gradience can be installed using multiple methods.

- Flathub (Recommended)
- As RPM package
- As DEB package (not available yet)
- From AUR

### Flatpak

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

### Globalt anlegg

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
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

::note

Under testing og utvikling, som et bekvemmelighet, kan du bruke `local.sh` skriptet til å raskt gjenoppbygge lokale bygg.

:::

## Neste

Nå kan du [sette opp](/docs/setup) systemet ditt og etterpå kan du kjøre gradiens.
