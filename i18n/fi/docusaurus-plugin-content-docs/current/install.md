---
sidebar_position: 1
---

# Asennus

## Flatpak

### Flathub

<a href="https://flathub.org/apps/details/com.github.GradienceTeam.Gradience">
    <img width="200" alt="Download on Flathub" src="https://flathub.org/assets/badges/flathub-badge-i-en.svg"/>
</a>

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

### Yleinen asennus

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

Testauksen ja kehittämisen aikana voit mukavuuden vuoksi käyttää `local.sh` skriptiä paikallisten rakennusten nopeaan uudelleenrakentamiseen.

:::

## Seuraava

Nyt voit [asettaa](/docs/setup) järjestelmäsi ja sen jälkeen, voit ajaa Gradience-toimintoa.
