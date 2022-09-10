---
sidebar_position: 1
---

# Instalação

## Frágil

### Flathub

:::cautela

Não disponível ainda

:::

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

## Da fonte

### Instalação global

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Instalação local (para fins de teste e desenvolvimento)

```sh
clone https://github.com/GradienceTeam/Gradience. it
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir/testdir"
ninja -C builddir install
ninja -C builddir run
```

:::nota

Durante testes e desenvolvidos, como uma conveniência, você pode usar o script `local.sh` para reconstruir rapidamente compilações locais.

:::

## Próximo

Agora, você pode [configurar](/docs/setup) seu sistema e depois, você pode executar o Gradience.
