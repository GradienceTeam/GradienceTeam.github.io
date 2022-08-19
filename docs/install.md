---
sidebar_position: 1
---

# Installation

## Flatpak

### Flathub

:::warn

Not available yet

:::

```shell
flatpak install com.github.GradienceTeam.Gradience
```

### From Github Actions

Go on the [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) workflow page, and click on the latest build. Scroll to the Artifacts section, download and install.

### Using `flatpak-builder`

1. Open Terminal
2. Run `git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. Add the `gnome-nightly` Flatpak repository `flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo`
4. Install the `master` version of GNOME SDK: `flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. Run `flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json`

Alternatively, open the project with GNOME Builder, then build and run it.

## From source

### Global installation

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Local installation (for testing and development purposes)

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir/testdir"
ninja -C builddir install
ninja -C builddir run
```

:::note

During testing and developement, as a convenience, you can use the `local.sh` script to quickly rebuild local builds.

:::

## Next

Now, you can [setup](/docs/setup) your system and after, you can run Gradience.
