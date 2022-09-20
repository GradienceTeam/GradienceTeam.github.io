---
sidebar_position: 1
---

# Установка

## Flatpak

### Flathub

<a href="https://flathub.org/apps/details/com.github.GradienceTeam.Gradience">
    <img width="200" alt="Загрузить на Flathub" src="https://flathub.org/assets/badges/flathub-badge-i-en.svg"/>
</a>

```shell
flatpak install com.github.GradienceTeam.Gradience
```

### Из Github Actions

Перейдите на [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) страницу сборки и нажмите на последнюю сборку. Прокрутите до раздела Артефакты, загрузите и установите.

### Используя `flatpak-builder`

1. Откройте терминал
2. Запустите `git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. Добавьте репозиторий Flatpak `gnome-nightly` `flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo`
4. Установите `master` версию GNOME SDK: `flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. Запустите `flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json`

Или откройте проект с помощью GNOME Builder, затем соберите и запустите его.

## Сборка и установка

Gradience может быть установлен несколькими методами.

- Flathub (рекомендуется)
- В виде RPM пакета
- В виде DEB пакета (недоступен)
- Из AUR

### Flatpak

Gradience доступен в Flathub. Вы можете установить его, используя следующую команду:

```bash
flatpak install flathub com.github.GradienceTeam.Gradience
```

### COPR

Gradience доступен в COPR. Вы можете установить его, используя следующую команду:

```bash
dnf copr enable lyessaadi/gradience
dnf install gradience
```

### Debian (и производные)

Пока недоступно. Если вы хотите, представьте PR.

### AUR

Gradience доступен в AUR. Вы можете установить его, используя следующую команду:

```bash
yay -S gradience # или gradience-git
```

### Сборка из исходного кода

#### Требования

- Python 3 `python`
- PyGObject `python-gobject`
- Blueprint [`blueprint-compiler`](https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/setup.html)
- GTK4 `gtk4`
- libadwaita (>= 1.2.alpha) `libadwaita`
- Meson `meson`
- Ninja `ninja-build`

Установить необходимые библиотеки Python:

```sh
pip install -r requirements.txt
```

### Глобальная установка

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Локальная сборка (для целей тестирования и разработки)

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir"
ninja -C builddir install
ninja -C builddir run
```

:::заметка

Во время тестирования и разработки для удобства вы можете использовать скрипт `local.sh` для быстрой пересборки локальных сборок.

:::

## Следующее

Теперь вы можете [настроить](/docs/setup) свою систему, а затем запустить Gradience.
