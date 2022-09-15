---
sidebar_position: 1
---

# Instalação

## Frágil

### Flathub

<a href="https://flathub.org/apps/details/com.github.GradienceTeam.Gradience">
    <img width="200" alt="Download on Flathub" src="https://flathub.org/assets/badges/flathub-badge-i-en.svg"/>
</a>

```shell
flatpak install com.github. GradienceTeam.
```

### De ações do Github

Vá na página de fluxo de trabalho [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) e clique na última compilação. Vá até a seção de Artefatos, baixe e instale.

### Usando `flatpak-builder`

1. Abrir terminal
2. Execute `git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. Adicione o `gnome-noturno` Repositório do Flatpak `flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo`
4. Install the `master` version of GNOME SDK: `flatpak install org.gnome. Sdk/x86_64/master org.gnome. Platform/x86_64/master`
5. Run `flatpak-builder --install --user --force-clean repo/ com.github. GradienceTeam. Gradience.json`

Alternativamente, abra o projeto com o GNOME Builder, depois construa e execute-o.

## Building and Installing

Gradience can be installed using multiple methods.

- Flathub (Recommended)
- As RPM package
- As DEB package (not available yet)
- From AUR

### Frágil

Gradience is available on Flathub. You can install it using the following command:

```bash
flatpak install flathub com.github.GradienceTeam.Gradience
```

### COPR

Gradience is available on COPR. You can install it using the following command:

```bash
dnf copr enable lyessaadi/gradience
dnf install gradience
```

### Debian (And derivates)

Not available yet. If you want, submit a PR.

### AUR

Gradience is available on AUR. You can install it using the following command:

```bash
yay -S gradience # or gradience-git
```

### Building from source

#### Requirements

- Python 3 `python`
- PyGObject `python-gobject`
- Blueprint [`blueprint-compiler`](https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/setup.html)
- GTK4 `gtk4`
- libadwaita (>= 1.2.alpha) `libadwaita`
- Meson `meson`
- Ninja `ninja-build`

Install required Python libraries:

```sh
pip install -r requirements.txt
```

### Instalação global

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Local build (for testing and development purposes)

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir"
ninja -C builddir install
ninja -C builddir run
```

:::nota

Durante testes e desenvolvidos, como uma conveniência, você pode usar o script `local.sh` para reconstruir rapidamente compilações locais.

:::

## Próximo

Agora, você pode [configurar](/docs/setup) seu sistema e depois, você pode executar o Gradience.
