---
sidebar_position: 1
---

# Installation

## Flatpak

### Flaskugga

::::försiktighet

Inte tillgänglig än

:::

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

## Från källa

### Global installation

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Lokal installation (för testning och utveckling)

```sh
git clone https://github.com/GradienceTeam/Gradience. it
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir/testdir"
ninja -C builddir install
ninja -C builddir run
```

::::note

Under testning och utveckling, som en bekvämlighet, kan du använda `local.sh` skriptet för att snabbt bygga om lokala byggnader.

:::

## Nästa

Nu kan du [ställa in](/docs/setup) ditt system och efter kan du köra Gradience.
