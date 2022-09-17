---
sidebar_position: 1
---

# Installation

## Flatpak

### Flathub

<a href="https://flathub.org/apps/details/com.github.GradienceTeam.Gradience">
    <img width="200" alt="Download på Flathub" src="https://flathub.org/assets/badges/flathub-badge-i-en.svg"/>
</a>

```shell
flatpak install com.github.GradienceTeam.Gradience
```

### Fra Github Handlinger

Gå på arbejdsprocessiden [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) , og klik på den seneste bygning. Rul til afsnittet Artefakter, download og installer.

### Bruger `flatpak-builder`

1. Åben Terminal
2. Kør `git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. Tilføj `gnome-nightly` Flatpak repository `flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nighly.flatpakrepo`
4. Installer `master` versionen af GNOME SDK: `flatpak installer org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. Kør `flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json`

Alternativt kan du åbne projektet med GNOME Builder, bygge og køre det.

## Bygning og installation

Gradience kan installeres ved hjælp af flere metoder.

- Flathub (anbefalet)
- Som RPM-pakke
- Som DEB pakke (ikke tilgængelig endnu)
- Fra AUR

### Flatpak

Gradience er tilgængelig på Flathub. Du kan installere det ved hjælp af følgende kommando:

```bash
flatpak installation flathub com.github.GradienceTeam.Gradience
```

### COPR

Gradience findes på COPR. Du kan installere det ved hjælp af følgende kommando:

```bash
dnf copr enable lyessaadi/gradience
dnf install gradience
```

### Debian (derivater)

Ikke tilgængelig endnu. Hvis du ønsker, skal du indsende en PR.

### AUR

Gradience er tilgængelig på AUR. Du kan installere det ved hjælp af følgende kommando:

```bash
yay -S gradiens # eller gradience-git
```

### Bygning fra kilde

#### Krav

- Python 3 `python`
- PyGObject `python-gobject`
- Blueprint [`blueprint-compiler`](https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/setup.html)
- GTK4 `gtk4`
- libadwaita (>= 1.2.alpha) `libadwaita`
- Meson `meson`
- Ninja `ninja-build`

Installér påkrævede Python- biblioteker:

```sh
pip install -r requirements.txt
```

### Global installation

```sh
git klone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Lokal opbygning (til test- og udviklingsformål)

```sh
git klon https://github.com/GradienceTeam/Gradience. it
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir"
ninja -C builddir install
ninja -C builddir run
```

::note

Under test og udvikling, som en bekvemmelighed, kan du bruge `local.sh` scriptet til hurtigt at genopbygge lokale bygninger.

:::

## Næste

Nu kan du [opsætte](/docs/setup) dit system og efter, du kan køre Gradience.
