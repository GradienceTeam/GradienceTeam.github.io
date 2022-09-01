---
sidebar_position: 1
---

# Установка

## Плоская пака

### Flathub

::caution

Ещё не доступен

:::

```shell
flatpak установить com.github.GradienceTeam.Gradience
```

### Действия с Github

Перейдите на страницу [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) и нажмите на последнюю сборку. Прокрутите раздел Артефакты, загрузите и установите.

### Используя `flatpak-builder`

1. Открыть терминал
2. Запустите `git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. Добавьте `gnome-nightly` Flatpak repository `flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo`
4. Установите `master` версию GNOME SDK: `flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. Запустите `flatpak-builder --install --force-clean repo/ com.github.GradienceTeam.Gradience.json`

Кроме того, откройте проект с помощью GNOME Builder, затем создайте и запустите его.

## Из источника

### Глобальная установка

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Местная установка (для целей тестирования и разработки)

```sh
git clone https://github.com/GradienceTeam/Gradience. он
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir/testdir"
ninja -C builddir install
ninja -C builddir run
```

::note

Во время тестирования и разработки в качестве удобства вы можете использовать сценарий `local.sh` для быстрого пересборки локальных сборок.

:::

## Следующий

Теперь вы можете [настроить](/docs/setup) свою систему, а затем запустить Gradience.
