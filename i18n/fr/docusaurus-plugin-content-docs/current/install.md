---
sidebar_position: 1
---

# Installation

## Flatpak

### Flathub

:::prudence

Pas encore disponible

:::

```shell
flatpak installe com.github.GradienceTeam.Gradience
```

### Depuis les actions de Github

Allez sur la page de workflow [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) et cliquez sur la dernière version. Faites défiler la section Artefacts, téléchargez et installez.

### Utilisation de `flatpak-builder`

1. Ouvrir le terminal
2. Exécutez `git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. Ajouter le dépôt `gnome-nightly` Flatpak `flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo`
4. Installez la version `master` de GNOME SDK : `flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. Exécutez `flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json`

Sinon, ouvrez le projet avec le constructeur GNOME, puis construisez et exécutez-le.

## Depuis la source

### Installation globale

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Installation locale (pour les tests et les développements)

```sh
git clone https://github.com/GradienceTeam/Gradience. it
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir/testdir"
ninja -C builddir install
ninja -C builddir run
```

:::note

Lors des tests et du développement, vous pouvez utiliser le script `local.sh` pour reconstruire rapidement les versions locales.

:::

## Suivant

Maintenant, vous pouvez [configurer](/docs/setup) votre système et après, vous pouvez exécuter Gradience.
