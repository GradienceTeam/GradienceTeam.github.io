---
sidebar_position: 1
---

# Інсталяція

## Флатпак

### Метхуб

:::обережність

Ще не доступний

:::

```shell
установка flatpak com.github.GradienceTeam.Gradience
```

### Дії на Github

Перейдіть на [`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) сторінку робочого процесу і натисніть останню збірку. Прокрутіть до розділу Артефакти, завантажити та встановити.

### Використання `flatpak-builder`

1. Відкрити термінал
2. Запустіть `git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. Add the `gnome-nightly` Flatpak repository `flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo`
4. Install the `master` version of GNOME SDK: `flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. Запустити `flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json`

Крім того, відкрийте проект з конструктором GNOME і створіть його.

## З джерела

### Глобальна установка

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Місцеве встановлення (для тестування та розробників)

```sh
git clone https://github.com/GradienceTeam/Gradience. він
cd Gradience
meson builddir
meson налаштувати builddir -Dprefix="$(pwd)/builddir/testdir/testdir"
ninja -C builddir встановить
ninja -C builddir
```

::note

Під час тестування та розробки ви можете використати скрипт `local.sh` для швидкого відновлення локальних будівель.

:::

## Уперед

Тепер ви можете [налаштувати](/docs/setup) вашу систему і після неї, можете запустити градієнт.
