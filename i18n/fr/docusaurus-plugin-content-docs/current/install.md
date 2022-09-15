---
sidebar_position: 1
---

# Installation

## Flatpak

### Flathub

<a href="https://flathub.org/apps/details/com.github.GradienceTeam.Gradience">
    <img width="200" alt="Télécharger sur Flathub" src="https://flathub.org/assets/badges/flathub-badge-i-en.svg"/>
</a>

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

## Construction et installation

Gradience peut être installé en utilisant plusieurs méthodes.

- Flathub (Recommandé)
- En tant que paquet RPM
- En tant que paquet DEB (non disponible)
- De AUR

### Flatpak

Le rayonnement est disponible sur Flathub. Vous pouvez l'installer en utilisant la commande suivante :

```bash
flatpak installez flathub com.github.GradienceTeam.Gradience
```

### COPR

Le rayonnement est disponible sur la COPR. Vous pouvez l'installer en utilisant la commande suivante :

```bash
dnf copr active lyessaadi/gradience
dnf install gradience
```

### Debian (Et dérivés)

Pas encore disponible. Si vous le souhaitez, soumettez une PR.

### AUR

Le rayonnement est disponible sur AUR. Vous pouvez l'installer en utilisant la commande suivante :

```bash
yay -S gradience # ou gradience-git
```

### Construction à partir de la source

#### Exigences

- Python 3 `python`
- PyGObject `python-gobject`
- Plan de compilation de plans [``](https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/setup.html)
- GTK4 `gtk4`
- libadwaita (>= 1.2.alpha) `libadwaita`
- Meson `meson`
- Ninja `ninja-build`

Installer les bibliothèques Python requises :

```sh
pip install -r requirements.txt
```

### Installation globale

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Version locale (pour les tests et les développements)

```sh
git clone https://github.com/GradienceTeam/Gradience. it
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir"
ninja -C builddir install
ninja -C builddir run
```

:::note

Lors des tests et du développement, vous pouvez utiliser le script `local.sh` pour reconstruire rapidement les versions locales.

:::

## Suivant

Maintenant, vous pouvez [configurer](/docs/setup) votre système et après, vous pouvez exécuter Gradience.
