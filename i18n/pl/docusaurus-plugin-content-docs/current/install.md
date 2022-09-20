---
sidebar_position: 1
---

# Instalacja

## Flatpak

### Folia

<a href="https://flathub.org/apps/details/com.github.GradienceTeam.Gradience">
    <img width="200" alt="Pobierz na Flathub" src="https://flathub.org/assets/badges/flathub-badge-i-en.svg"/>
</a>

```shell
flatpak install com.github.GradienceTeam.Gradience
```

### Z akcji na Githubie

Przejdź na stronę przepływu pracy [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) i kliknij na najnowszą wersję Przewiń do sekcji Artefakty, pobierz i zainstaluj.

### Używanie `flatpak-builder`

1. Otwórz terminal
2. Uruchom `git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. Dodaj `gnome-nightly` Repozytorium Flatpak `flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo`
4. Zainstaluj `wersję główną` GNOME SDK: `flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. Uruchom `flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json`

Alternatywnie, otwórz projekt z GNOME Builder, a następnie zbuduj i uruchom go.

## Budowanie i instalacja

Gradiację można zainstalować za pomocą wielu metod.

- Flara (zalecane)
- Jako pakiet RPM
- Jako pakiet DEB jeszcze niedostępny)
- Z AUR

### Flatpak

Gradiencja jest dostępna na Flathubie. Możesz go zainstalować za pomocą następującej komendy:

```bash
flatpak zainstaluj flathub com.github.GradienceTeam.Gradience
```

### COPR

Gradiencja jest dostępna na COPR. Możesz go zainstalować za pomocą następującej komendy:

```bash
dnf copr enable lyessaadi/gradience
dnf install gradience
```

### Debian (oraz pochodne)

Jeszcze niedostępny. Jeśli chcesz, zgłoś PR.

### AUR

Gradiencja jest dostępna w AUR. Możesz go zainstalować za pomocą następującej komendy:

```bash
yay -S gradience # lub gradience-git
```

### Budynek ze źródła

#### Wymagania

- Python 3 `python`
- PyGObject `python-gobject`
- Schemat [`schemat-kompilator`](https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/setup.html)
- GTK4 `gtk4`
- libadwaita (>= 1.2.alpha) `libadwaita`
- Meson `meson`
- Ninja `ninja-build`

Instalacja wymaganych bibliotek Pythona:

```sh
pip install -r requirements.txt
```

### Instalacja globalna

```sh
Klon git https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir
```

### Budowa lokalna (do celów testowania i rozwoju)

```sh
Klon git https://github.com/GradienceTeam/Gradience.
cd Gradience
meson builddir
configure builddir -Dprefix="$(pwd)/builddir"
ninja -C builddir install
ninja -C builddir run
```

:::note

Podczas testowania i rozwoju możesz użyć skryptu `local.sh` , aby szybko odbudować lokalne kompilacje.

:::

## Następny

Teraz możesz [skonfigurować](/docs/setup) swój system, a następnie uruchomić Gradience.
