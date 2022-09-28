---
sidebar_position: 1
---

# Installation

## Flatpak

### Flathu

<a href="https://flathub.org/apps/details/com.github.GradienceTeam.Gradience">
    <img width="200" alt="Auf Flathub herunterladen" src="https://flathub.org/assets/badges/flathub-badge-i-en.svg"/>
</a>

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

## Bauen und Installieren

Gradience kann mit mehreren Methoden installiert werden.

- Flathub (empfohlen)
- Als RPM-Paket
- Als DEB-Paket (noch nicht verfügbar)
- Von AUR

### Flatpak

Gradience ist auf Flathub. Sie können es mit dem folgenden Befehl installieren:

```bash
flatpak Installation flathub com.github.GradienceTeam.Gradience
```

### COPR

Gradience ist auf COPR verfügbar. Sie können es mit dem folgenden Befehl installieren:

```bash
dnf copr aktivieren lyessaadi/gradience
dnf install gradience
```

### Debian (Und Derivate)

Noch nicht verfügbar. Wenn Sie möchten, senden Sie eine PR.

### AUR

Gradience ist auf AUR verfügbar. Sie können es mit dem folgenden Befehl installieren:

```bash
yay -S Gradienz # oder Gradience-Git
```

### Aus Quelle bauen

#### Anforderungen

- Python 3 `python`
- PyGObject `python-gobject`
- Blaupause [`Blaupausen-Compiler`](https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/setup.html)
- GTK4 `gtk4`
- libadwaita (>= 1.2.alpha) `libadwaita`
- Meson `meson`
- Ninja `ninja-build`

Benötigte Python-Bibliotheken installieren:

```sh
pip install -r requirements.txt
```

### Globale Installation

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Lokales Build (für Testzwecke und Entwicklungszwecke)

```sh
git clone https://github.com/GradienceTeam/Gradience.
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir"
ninja -C builddir installieren
ninja -C builddir laufen
```

:::note

Während des Tests und der Entwicklung können Sie das `local.sh` Skript verwenden, um lokale Builds schnell neu aufzubauen.

:::

## Nächste

Now, you can [setup](/docs/setup) your system and after, you can run Gradience.
