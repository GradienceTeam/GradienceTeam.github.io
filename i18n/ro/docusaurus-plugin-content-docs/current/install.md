---
sidebar_position: 1
---

# Instalare

## Flatpak

### Flathub

:::prudență

Nu este încă disponibil

:::

```shell
flatpak install com.github.GradienceTeam.Gradience
```

### Din acțiuni Github

Mergeți pe pagina de flux de lucru [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) și faceți clic pe ultima construcție. Derulează la secțiunea Artefact și instalează.

### Folosind `flatpak-builder`

1. Deschide Terminalul
2. Rulează `clona git https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. Adaugă `gnome-nightly` Repo-ul Flatpak `flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo`
4. Instalați versiunea `master` a GNOME SDK: `flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. Executați `flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json`

Alternativ, deschideți proiectul cu GNOME Builder, apoi construiți-l și executați-l.

## De la sursă

### Instalare globală

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Instalare locală (în scopuri de testare și dezvoltare)

```sh
git clone https://github.com/GradienceTeam/Gradience.
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir/testdir"
ninja -C builddir install
ninja -C builddir run
```

:::note

În timpul testării și dezvoltării, ca o conveniență, puteți utiliza script-ul `local.sh` pentru a reconstrui rapid construcții locale.

:::

## Următoarea

Acum, poți [configura](/docs/setup) sistemul tău și după, poți rula Gradience.
