---
sidebar_position: 1
---

# Installation

## Flatpak

### Flathu

:::caution

Noch nicht verfügbar

:::

```shell
flatpak Installation com.github.GradienceTeam.Gradience
```

### Von Github Aktionen

Gehen Sie auf die [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) Workflow-Seite und klicken Sie auf die neueste Build. Scrollen Sie zum Bereich Artefakte, downloaden und installieren.

### Verwende `flatpak-builder`

1. Terminal öffnen
2. git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience ausfhren
3. Füge `gnome-nightly` Flatpak Repository `flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo` hinzu
4. Installieren Sie die `Master` Version des GNOME SDK: `flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. `flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json` ausführen

Alternativ können Sie das Projekt mit dem GNOME-Builder öffnen und dann erstellen und ausführen.

## Von Quelle

### Globale Installation

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Lokale Installation (für Testzwecke und Entwicklung)

```sh
git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience ausfhren
```

:::note

Während des Tests und der Entwicklung können Sie das `local.sh` Skript verwenden, um lokale Builds schnell neu aufzubauen.

:::

## Nächste

Now, you can [setup](/docs/setup) your system and after, you can run Gradience.
