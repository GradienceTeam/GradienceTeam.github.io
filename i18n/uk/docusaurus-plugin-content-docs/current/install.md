---
sidebar_position: 1
---

# Інсталяція

## Флатпак

### Метхуб

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

## Будівля та встановлення

Градієнтність можна встановити за допомогою декількох методів.

- Металобудівля (рекомендовано)
- Як RPM пакет
- Як DEB пакет (не доступний)
- З AUR

### Флатпак

Градієнція доступна на Flathub. Ви можете встановити його за допомогою наступної команди:

```bash
flatpak встановлення flathub com.github.GradienceTeam.Gradience
```

### КОРАР

Градієнтність доступна на COPR. Ви можете встановити його за допомогою наступної команди:

```bash
dnf copr увімкнути lyessaadi/градієнтність
dnf install градієнт
```

### Debian (і деривати)

Ще не доступно. Якщо бажаєте, подайте PR.

### Дор

Градієнтність доступна в AUR. Ви можете встановити його за допомогою наступної команди:

```bash
градієнція yay -S # або градієнти-git
```

### Побудова з вихідного коду

#### Вимоги

- Python 3 `python`
- PyGObject `python-gobject`
- Креслення [`компілятор`](https://jwestman.pages.gitlab.gnome.org/blueprint-compiler/setup.html)
- GTK4 `gtk4`
- libadwaita (>= 1.2.alpha) `libadwaita`
- Meson `meson`
- Ніндзя `ніндзя`

Встановити необхідні бібліотеки Python:

```sh
pip встановити -r requirements.txt
```

### Глобальна установка

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### Локальна збірка (для тестування та розробки)

```sh
git clone https://github.com/GradienceTeam/Gradience. він
cd Gradience
meson builddir
meson налаштувати builddir -Dprefix="$(pwd)/builddir"
ninja -C builddir install
ninja -C builddir run
```

::note

Під час тестування та розробки ви можете використати скрипт `local.sh` для швидкого відновлення локальних будівель.

:::

## Уперед

Тепер ви можете [налаштувати](/docs/setup) вашу систему і після неї, можете запустити градієнт.
