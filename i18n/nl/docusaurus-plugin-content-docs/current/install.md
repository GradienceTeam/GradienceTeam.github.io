---
sidebar_position: 1
---

# Installatie

## Flatpak

### Flathub

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

## Bouw en installeer

Gradience kan worden geïnstalleerd met behulp van meerdere methoden.

- Flathub (Aanbevolen)
- Als RPM pakket
- Als DEB pakket (nog niet beschikbaar)
- Van AUR

### Flatpak

Graditie is beschikbaar op Flathub. Je kunt het installeren met behulp van de volgende opdracht:

```bash
flatpak install flathub com.github.GradienceTeam.Gradience
```

### KOPR

Straling is beschikbaar op COPR. Je kunt het installeren met behulp van de volgende opdracht:

```bash
dnf copr inschakelen lyessaadie/gradience
dnf install gradience
```

### Debian (En derivaten)

Nog niet beschikbaar. Als je wilt, stuur dan een PR.

### AUR

Gradientie is beschikbaar op AUR. Je kunt het installeren met behulp van de volgende opdracht:

```bash
yay -S verlopen # of gradience-git
```

### Opbouwen vanuit de bron

#### Vereisten

- Python 3 `python`
- PyGObject `python-gobject`
- Blauwdruk [`blauwdruk compiler`](https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/setup.html)
- GTK4 `gtk4`
- libadwaita (>= 1.2.alpha) `libadwaita`
- Meson `meson`
- Ninja `ninja-build`

Installeren vereist Python bibliotheken:

```sh
pip installeren -r requirements.txt
```

### Globale installatie

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/loc
sudo ninja -C builddir install
```

### Lokale bouw (voor test- en ontwikkelingsdoeleinden)

```sh
git kloon https://github.com/GradienceTeam/Gradience. it
cd Gradience
meson builddir
meson configureer builddir -Dprefix="$(pwd)/builddir"
ninja -C builddir install
ninja -C builddir run
```

::note

Tijdens het testen en ontwikkelen kun je als gemak het `local.sh` script gebruiken om snel lokale versies opnieuw op te bouwen.

:::

## Volgende

Nu kunt u [uw systeem](/docs/setup) instellen en daarna, u kunt Gradience uitvoeren.
