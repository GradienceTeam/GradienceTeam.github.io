---
sidebar_position: 1
---

# Installation

## Flatpak

### Flaskugga

<a href="https://flathub.org/apps/details/com.github.GradienceTeam.Gradience">
    <img width="200" alt="Ladda ner på Flathub" src="https://flathub.org/assets/badges/flathub-badge-i-en.svg"/>
</a>

```shell
flatpak installera com.github.GradienceTeam.Gradience
```

### Från Github åtgärder

Gå till arbetsflödessidan [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) och klicka på den senaste versionen. Bläddra till avsnittet Artifakt, ladda ner och installera.

### Använder `flatpak-builder`

1. Öppna Terminal
2. Kör `git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. Lägg till `gnome-nightly` Flatpak repository `flatpak remote-add --if-not-exists gnome-nightly https://nighly.gnome.org/gnome-nightly.flatpakrepo`
4. Installera `master` versionen av GNOME SDK: `flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. Kör `flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json`

Alternativt kan du öppna projektet med GNOME Builder, sedan bygga och köra det.

## Bygga och installera

Gradiens kan installeras med flera metoder.

- Flathub (Rekommenderad)
- Som RPM-paket
- Som DEB-paket (inte tillgängligt ännu)
- Från AUR

### Flatpak

Gradiens finns på Flathub. Du kan installera den med följande kommando:

```bash
flatpak installera flathub com.github.GradienceTeam.Gradience
```

### KOSTNAD

Gradiens finns tillgänglig på COPR. Du kan installera den med följande kommando:

```bash
dnf copr aktivera lyessaadi/gradience
dnf install gradience
```

### Debian (Och derivat)

Inte tillgänglig ännu. Om du vill, skicka in en PR.

### AUR

Gradiens finns tillgänglig på AUR. Du kan installera den med följande kommando:

```bash
yay -S gradiens # eller gradience-git
```

### Bygga från källa

#### Krav

- Python 3 `python`
- PyGObject `python-gobject`
- Ritning [`rita-kompilator`](https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/setup.html)
- GTK4 `gtk4`
- libadwaita (>= 1.2.alpha) `libadwaita`
- Meson `meson`
- Ninja `ninja-build`

Installera nödvändiga Python-bibliotek:

```sh
pip install -r requirements.txt
```

### Global installation

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Lokalt byggande (för test- och utvecklingsändamål)

```sh
git clone https://github.com/GradienceTeam/Gradience. it
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir"
ninja -C builddir install
ninja -C builddir run
```

::::note

Under testning och utveckling, som en bekvämlighet, kan du använda `local.sh` skriptet för att snabbt bygga om lokala byggnader.

:::

## Nästa

Nu kan du [ställa in](/docs/setup) ditt system och efter kan du köra Gradience.
