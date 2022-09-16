---
sidebar_position: 1
---

# Montáž

## Flatální

### Flathub

<a href="https://flathub.org/apps/details/com.github.GradienceTeam.Gradience">
    <img width="200" alt="Stáhnout na Flathub" src="https://flathub.org/assets/badges/flathub-badge-i-en.svg"/>
</a>

```shell
flatpak nainstalujte com.github.GradienceTeam.Gradience
```

### Z akce Githubu

Přejděte na stránku [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) pracovního postupu a klikněte na nejnovější sestavení. Přejít do sekce Artefakty, stahování a instalace.

### Použití `flatpak-builder`

1. Otevřít terminál
2. Spustit `git klonování https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. Přidejte `gnome-nightly` Flatpak repozitář `flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo`
4. Nainstalujte `master` verzi GNOME SDK: `flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. Spustit `flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json`

Případně otevřete projekt s stavitelem GNOME a poté ho vytvořte a spustíte.

## Stavba a instalace

Gradience lze nainstalovat pomocí více metod.

- Flathub (doporučeno)
- Jako RPM balíček
- Jako DEB balíček (ještě není k dispozici)
- Z AUR

### Flatální

Gradience je k dispozici na Flathubu. Můžete ji nainstalovat pomocí následujícího příkazu:

```bash
flatpak nainstalujte flathub com.github.GradienceTeam.Gradience
```

### COPR

Gradience je k dispozici na COPR. Můžete ji nainstalovat pomocí následujícího příkazu:

```bash
dnf copr povolit lyessaadi/gradience
dnf instalace
```

### Debian (a deriváty)

Ještě není k dispozici. Pokud chcete, pošlete PR.

### AUR

Gradience je k dispozici na AUR. Můžete ji nainstalovat pomocí následujícího příkazu:

```bash
yay -S gradience # nebo gradience-git
```

### Budova ze zdroje

#### Požadavky

- Python 3 `python`
- PyGObject `python-gobject`
- Plán [`kompilátor plánů`](https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/setup.html)
- GTK4 `gtk4`
- libadwaita (>= 1.2.alpha) `libadwaita`
- Meson `meson`
- Ninja `ninja-build`

Nainstalujte požadované Python knihovny:

```sh
pip install -r requires.txt
```

### Globální instalace

```sh
git klonovat https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir instalace
```

### Místní stavba (pro účely testování a vývoje)

```sh
klonovat https://github.com/GradienceTeam/Gradience.
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir"
ninja -C builddir nainstalovat
ninja -C builddir
```

:::note

Během testování a vývoje můžete jako pohodlí použít skript `local.sh` k rychlé přestavbě místních budov.

:::

## Další

Nyní můžete [nastavit](/docs/setup) váš systém a poté můžete spustit Gradience.
