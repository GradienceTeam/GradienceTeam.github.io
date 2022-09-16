---
sidebar_position: 1
---

# Installasjon

## Flatpak

### Flathub

:::caution

Ikke tilgjengelig enda

:::

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

## Fra kilde

### Globalt anlegg

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Lokal installasjon (for prøving og utvikling av formål)

```sh
git clone https://github.com/GradienceTeam/Gradience. det
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir/testdir"
ninja -C builddir installering
ninja -C builddir run
```

::note

Under testing og utvikling, som et bekvemmelighet, kan du bruke `local.sh` skriptet til å raskt gjenoppbygge lokale bygg.

:::

## Neste

Nå kan du [sette opp](/docs/setup) systemet ditt og etterpå kan du kjøre gradiens.
