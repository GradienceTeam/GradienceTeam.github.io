---
sidebar_position: 1
---

# Installatie

## Flatpak

### Flathub

:::voorzichtigheid

Nog niet beschikbaar

:::

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

## Uit bron

### Globale installatie

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/loc
sudo ninja -C builddir install
```

### Lokale installatie (voor test- en ontwikkelingsdoeleinden)

```sh
git kloon https://github.com/GradienceTeam/Gradience. it
cd Gradience
meson builddir
meson configureer builddir -Dprefix="$(pwd)/builddir/testdir"
ninja -C builddir install
ninja -C builddir run
```

::note

Tijdens het testen en ontwikkelen kun je als gemak het `local.sh` script gebruiken om snel lokale versies opnieuw op te bouwen.

:::

## Volgende

Nu kunt u [uw systeem](/docs/setup) instellen en daarna, u kunt Gradience uitvoeren.
