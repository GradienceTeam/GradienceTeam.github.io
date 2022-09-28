---
sidebar_position: 1
---

# Installazione

## Flatpak

### Flathub

```shell
flatpak install com.github.GradienceTeam.Gradience
```

### Dalle Azioni Di Github

Vai sulla pagina del flusso di lavoro [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) , e clicca sull'ultima costruzione. Scorri alla sezione Artefatti, scarica e installa.

### Utilizzando `flatpak-builder`

1. Apri Terminale
2. Esegui `git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. Aggiungi il `gnome-nightly` repository Flatpak `flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo`
4. Installare la versione `master` di GNOME SDK: `flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. Esegui `flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json`

In alternativa, aprire il progetto con GNOME Builder, quindi generarlo ed eseguirlo.

## Edificio ed installazione

La radiazione può essere installata con più metodi.

- Flathub (raccomandato)
- Come pacchetto RPM
- Come pacchetto DEB (non ancora disponibile)
- Da AUR

### Flatpak

La radiazione è disponibile su Flathub. È possibile installarlo utilizzando il seguente comando:

```bash
flatpak install flathub com.github.GradienceTeam.Gradience
```

### COPR

La radiazione è disponibile sul COPR. È possibile installarlo utilizzando il seguente comando:

```bash
dnf copr enable lyessaadi/gradience
dnf install gradience
```

### Debian (E derivati)

Non ancora disponibile. Se vuoi, invia un PR.

### AUR

La radiazione è disponibile su AUR. È possibile installarlo utilizzando il seguente comando:

```bash
yay -S gradience # o gradience-git
```

### Edificio dalla sorgente

#### Requisiti

- Python 3 `python`
- PyGObject `python-gobject`
- Progetto [`blueprint-compiler`](https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/setup.html)
- GTK4 `gtk4`
- libadwaita (>= 1.2.alpha) `libadwaita`
- Meson `meson`
- Ninja `ninja-build`

Installare le librerie Python richieste:

```sh
pip install -r requirements.txt
```

### Installazione globale

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Edificio locale (per scopi di collaudo e sviluppo)

```sh
git clone https://github.com/GradienceTeam/Gradience. it
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir"
ninja -C builddir install
ninja -C builddir run
```

:::note

Durante il test e lo sviluppo, come convenienza, è possibile utilizzare lo script `local.sh` per ricostruire rapidamente le build locali.

:::

## Successivo

Ora puoi [configurare](/docs/setup) il tuo sistema e dopo, puoi eseguire Gradience.
