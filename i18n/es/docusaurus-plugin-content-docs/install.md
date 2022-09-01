---
sidebar_position: 1
---

# Instalación

## Paco

### Almacén

:::precaución

No disponible aún

:::

```shell
flatpak instalar com.github.GradienceTeam.Gradience
```

### Desde acciones de Github

Go on the [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) workflow page, and click on the latest build. Desplácese a la sección Artefactos, descargue e instale.

### Usando `flatpak-builder`

1. Abrir Terminal
2. Ejecute `git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. Agregue el repositorio `gnome-nightly` Flatpak `flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo`
4. Instala la versión `master` de GNOME SDK: `flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. Ejecute `flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json`

También puede abrir el proyecto con GNOME Builder, luego construirlo y ejecutarlo.

## Desde la fuente

### Instalación global

```sh
git clon https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Instalación local (para pruebas y desarrollo)

```sh
git clone https://github.com/GradienceTeam/Gradience. it
cd Gradience
meson builddir
configure builddir -Dprefix="$(pwd)/builddir/testdir"
ninja -C builddir install
ninja -C builddir run
```

:::note

Durante las pruebas y el desarrollo, como una comodidad, puedes usar el script `local.sh` para reconstruir rápidamente compilaciones locales.

:::

## Siguiente

Ahora, puede [configurar](/docs/setup) su sistema y después, puede ejecutar Gradience.
