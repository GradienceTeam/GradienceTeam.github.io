---
sidebar_position: 1
---

# Montáž

## Flatální

### Flathub

:::Pozornost

Ještě není k dispozici

:::

```shell
flatpak nainstalujte com.github.GradienceTeam.Gradience
```

### Z akce Githubu

Přejděte na stránku [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) pracovního postupu a klikněte na nejnovější sestavení. Přejít do sekce Artefakty, stahování a instalace.

### Použití `flatpak-builder`

1. Otevřít terminál
2. Spustit `git klonování https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. Přidejte `gnome-nightly` Flatpak repozitář `flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo`
4. Nainstalujte `master` verzi GNOME SDK: `flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. Spustit `flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json`

Případně otevřete projekt s stavitelem GNOME a poté ho vytvořte a spustíte.

## Ze zdroje

### Globální instalace

```sh
git klonovat https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir instalace
```

### Místní instalace (pro účely zkoušení a vývoje)

```sh
klonovat https://github.com/GradienceTeam/Gradience.
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir/testdir"
ninja -C builddir
ninja -C builddir běží
```

:::note

Během testování a vývoje můžete jako pohodlí použít skript `local.sh` k rychlé přestavbě místních budov.

:::

## Další

Nyní můžete [nastavit](/docs/setup) váš systém a poté můžete spustit Gradience.
