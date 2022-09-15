---
sidebar_position: 1
---

# Installatie

## Flatpak

### Flathub

<a href="https://flathub.org/apps/details/com.github.GradienceTeam.Gradience">
    <img width="200" alt="Download on Flathub" src="https://flathub.org/assets/badges/flathub-badge-i-en.svg"/>
</a>

```shell
flatpak install com.github.GradienceTeam.Gradience
```

### Van Github acties

Ga naar de [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) workflowpagina en klik op de laatste build. Scroll naar de Artefact-sectie, download en installeer.

### `flatpak-builder` gebruiken

1. Open terminal
2. Start `git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. Voeg de `gnome-nightly` Flatpak repository `flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpako`
4. Installeer de `master` versie van GNOME SDK: `flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. Voer `flatpak-builder --user --user --force-clean repo/ com.github.GradienceTeam.Gradience.json` uit

Als alternatief kan je het project openen met GNOME Bouwer, bouw het vervolgens en voer het uit.

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

### Globale installatie

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/loc
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

Tijdens het testen en ontwikkelen kun je als gemak het `local.sh` script gebruiken om snel lokale versies opnieuw op te bouwen.

:::

## Volgende

Nu kunt u [uw systeem](/docs/setup) instellen en daarna, u kunt Gradience uitvoeren.
