---
sidebar_position: 1
---

# Asennus

## Flatpak

### Flathub

::Varoitus

Ei vielä saatavilla

:::

```shell
flatpak asentaa com.github.GradienceTeam.Gradience
```

### GitHub Toimista

Mene [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) työnkulun sivulle, ja klikkaa viimeisin rakennus. Vieritä Artifacts osioon, lataa ja asenna.

### Käyttämällä `flatpak-rakentajaa`

1. Avaa Pääte
2. Suorita `git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. Lisää `gnome-nightly` Flatpak repository `flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo`
4. Asenna `master` versio Gnomen SDK: `flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. Suorita `flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json`

Vaihtoehtoisesti avaa projekti Gnomen rakentajalla, sitten rakentaa ja ajaa sitä.

## Lähteestä

### Yleinen asennus

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Paikallinen asennus (testausta ja kehittämistä varten)

```sh
git clone https://github.com/GradienceTeam/Gradience. it
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir/testdir"
ninja -C builddir install
ninja -C builddir run
```

::note

Testauksen ja kehittämisen aikana voit mukavuuden vuoksi käyttää `local.sh` skriptiä paikallisten rakennusten nopeaan uudelleenrakentamiseen.

:::

## Seuraava

Nyt voit [asettaa](/docs/setup) järjestelmäsi ja sen jälkeen, voit ajaa Gradience-toimintoa.
