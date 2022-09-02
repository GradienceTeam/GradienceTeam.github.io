---
sidebar_position: 1
---

# Установка

## Flatpak

### Flathub

:::осторожно

Ещё недоступно

:::

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

## Из исходника

### Глобальная установка

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Локальная установка (для целей тестирования и разработки)

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir/testdir"
ninja -C builddir install
ninja -C builddir run
```

:::заметка

Во время тестирования и разработки для удобства вы можете использовать скрипт `local.sh` для быстрой пересборки локальных сборок.

:::

## Следующее

Теперь вы можете [настроить](/docs/setup) свою систему, а затем запустить Gradience.
