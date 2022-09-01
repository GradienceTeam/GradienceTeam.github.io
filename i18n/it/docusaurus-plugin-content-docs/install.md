---
sidebar_position: 1
---

# Installazione

## Flatpak

### Flathub

:::cautela

Non ancora disponibile

:::

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

## Dalla sorgente

### Installazione globale

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Installazione locale (per prove e sviluppo)

```sh
git clone https://github.com/GradienceTeam/Gradience. it
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir/testdir"
ninja -C builddir install
ninja -C builddir run
```

:::note

Durante il test e lo sviluppo, come convenienza, è possibile utilizzare lo script `local.sh` per ricostruire rapidamente le build locali.

:::

## Next

Ora puoi [configurare](/docs/setup) il tuo sistema e dopo, puoi eseguire Gradience.
