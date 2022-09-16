---
sidebar_position: 1
---

# Instalación

## Paco

### Almacén

<a href="https://flathub.org/apps/details/com.github.GradienceTeam.Gradience">
    <img width="200" alt="Descargar en Flathub" src="https://flathub.org/assets/badges/flathub-badge-i-en.svg"/>
</a>

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

## Construyendo e instalando

Gradience se puede instalar utilizando múltiples métodos.

- Flathub (Recomendado)
- Como paquete RPM
- Como paquete DEB (no disponible todavía)
- Desde AUR

### Paco

Gradience está disponible en Flathub. Puedes instalarlo usando el siguiente comando:

```bash
flatpak instalar flathub com.github.GradienceTeam.Gradience
```

### COPR

Gradience está disponible en COPR. Puedes instalarlo usando el siguiente comando:

```bash
dnf copr habilita lyessaadi/gradience
gradience de instalación dnf
```

### Debian (Y derivados)

No disponible todavía. Si lo desea, envíe un PR.

### AUR

Gradience está disponible en AUR. Puedes instalarlo usando el siguiente comando:

```bash
yay -S gradience # o gradience-git
```

### Construyendo desde fuente

#### Requisitos

- Python 3 `python`
- PyGObject `python-gobject`
- Plano [`compilador de planos`](https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/setup.html)
- GTK4 `gtk4`
- libadwaita (>= 1.2.alpha) `libadwaita`
- Meson `meson`
- Ninja `ninja-build`

Instalar librerías Python necesarias:

```sh
pip install -r requirements.txt
```

### Instalación global

```sh
git clon https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Construcción local (para pruebas y desarrollo)

```sh
git clone https://github.com/GradienceTeam/Gradience. it
cd Gradience
meson builddir
configure builddir -Dprefix="$(pwd)/builddir"
ninja -C builddir install
ninja -C builddir run
```

:::note

Durante las pruebas y el desarrollo, como una comodidad, puedes usar el script `local.sh` para reconstruir rápidamente compilaciones locales.

:::

## Siguiente

Ahora, puede [configurar](/docs/setup) su sistema y después, puede ejecutar Gradience.
