---
sidebar_position: 1
---

# Instalação

## Frágil

### Flathub

<a href="https://flathub.org/apps/details/com.github.GradienceTeam.Gradience">
    <img width="200" alt="Baixar no Flathub" src="https://flathub.org/assets/badges/flathub-badge-i-en.svg"/>
</a>

```shell
flatpak install com.github.GradienceTeam.Gradience
```

### De ações do Github

Vá na página de fluxo de trabalho [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) e clique na última compilação. Vá até a seção de Artefatos, baixe e instale.

### Usando `flatpak-builder`

1. Abrir terminal
2. Execute `git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. Adicione o `gnome-noturno` Repositório do Flatpak `flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo`
4. Instale a versão `master` do GNOME SDK: `flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. Execute `flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json`

Alternativamente, abra o projeto com o GNOME Builder, depois construa e execute-o.

## Construindo e instalando

Gradiência pode ser instalada usando vários métodos.

- Flathub (recomendado)
- Como pacote RPM
- Como pacote DEB (ainda não disponível)
- Do AUR

### Frágil

Gradiência está disponível no Flathub. Você pode instalá-lo usando o seguinte comando:

```bash
flatpak install flathub com.github.GradienceTeam.Gradience
```

### COP

A gradiência está disponível no COPR. Você pode instalá-lo usando o seguinte comando:

```bash
dnf copr ativa o lyessaadi/gradience
dnf install gradience
```

### Debiano (e derivados)

Não disponível ainda. Se você quiser, submeta uma PR.

### JUVA

A gradiência está disponível no AUR. Você pode instalá-lo usando o seguinte comando:

```bash
gradiência yay -S # ou gradiência-git
```

### Construindo da fonte

#### Requisitos

- Python 3 `python`
- PyGObject `python-gobject`
- Planta [`blueprint-compiler`](https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/setup.html)
- GTK4 `gtk4`
- libadwaita (>= 1.2.alpha) `libadwaita`
- Meson `meson`
- Ninja `ninja-build`

Instalar bibliotecas Python necessárias:

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

### Versão local (para fins de teste e desenvolvimento)

```sh
clone https://github.com/GradienceTeam/Gradience. it
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir"
ninja -C builddir instalar
ninja -C builddir run
```

:::nota

Durante testes e desenvolvidos, como uma conveniência, você pode usar o script `local.sh` para reconstruir rapidamente compilações locais.

:::

## Próximo

Agora, você pode [configurar](/docs/setup) seu sistema e depois, você pode executar o Gradience.
