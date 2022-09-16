---
sidebar_position: 1
---

# Installation

## Flatpak

### Flathub

:::caution

Ikke tilgængelig endnu

:::

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

## Fra kilde

### Global installation

```sh
git klone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Lokalt anlæg (til test- og udviklingsformål)

```sh
git klon https://github.com/GradienceTeam/Gradience. it
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir/testdir"
ninja -C builddir install
ninja -C builddir run
```

::note

Under test og udvikling, som en bekvemmelighed, kan du bruge `local.sh` scriptet til hurtigt at genopbygge lokale bygninger.

:::

## Næste

Nu kan du [opsætte](/docs/setup) dit system og efter, du kan køre Gradience.
