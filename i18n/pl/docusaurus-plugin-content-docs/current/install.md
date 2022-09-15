---
sidebar_position: 1
---

# Instalacja

## Flatpak

### Folia

:::ostrożność

Jeszcze niedostępne

:::

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

## Z źródła

### Instalacja globalna

```sh
Klon git https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir
```

### Instalacja lokalna (do celów testowania i rozwoju)

```sh
Klon git https://github.com/GradienceTeam/Gradience.
cd Gradience
meson builddir
configure builddir -Dprefix="$(pwd)/builddir/testdir"
ninja -C builddir install
ninja -C builddir run
```

:::note

Podczas testowania i rozwoju możesz użyć skryptu `local.sh` , aby szybko odbudować lokalne kompilacje.

:::

## Następny

Teraz możesz [skonfigurować](/docs/setup) swój system, a następnie uruchomić Gradience.
