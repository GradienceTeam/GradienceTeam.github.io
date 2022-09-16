# Шаблони

Ця інструкція буде керувати в процесі створення пресету для градієнту.

## Інструменти

Для створення пресетів для Gradience вам знадобиться такі інструменти:

- [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast)
- [Палітра](https://flathub.org/apps/details/org.gnome.design.Palette)
- [Вибір кольору](https://extensions.gnome.org/extension/3396/color-picker) або [прийом](https://github.com/FineFindus/eyedropper)

Це основний набір інструментів для комфортного створення теми.

## Створити

По-перше, ви хочете зробити пресет за допомогою існуючої теми або створення однієї з палітри кольору?

#### Портування існуючої теми

Якщо тема має варіант GTK4, наприклад, [Gruvbox GTK](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Клонувати тему: `git clone https://github.com/Fausto-Corpsvart/Gruvbox-GTK-Theme.git`
2. У `Тема Gruvbox-GTK-` входить в `themes/Gnome42`
3. Open `Gruvbox-Dark-B.css`

У цьому файлі міститься сполучення кольорів для теми програми Libadwaita Вам потрібно скопіювати лише значення кольорів до градієнту, приклад значення кольору копії з `@define-color window_bg_color #1d2021` у розділ "Window Colors" зробити це для кожного доступного в `Gruvbox-Dark-B. ss`.

Якщо тема не має різновидів GTK4, наприклад, [Gruvbox GTK](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Клонувати тему: `git clone https://github.com/Fausto-Corpsvart/Gruvbox-GTK-Theme.git`
2. У `Gruvbox-GTK-Theme` входить в `themes/Gruvbox-Dark-B/gtk-3.0`
3. Open `gtk-dark.css`

У цьому файлі міститься сполучення кольорів для теми програми GTK3, Вам потрібно скопіювати лише значення кольорів до градієнту, наприклад значення кольору копіювання з `@define-color theme_base_color #1d2021` в розділ "Window Colors" зробити це для кожного кольору авіалізованим в `gtk-dark. ss`.

#### Створення пресету з палітри кольорів

Якщо ви хочете створити тему з палітри кольорів, наприклад [Catppuccin](https://github.com/catppuccin/catppuccin).

1. Перейти до [інструкції для стилю](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md)
2. Використовуйте ці відтінки, виберіть перманий варіант кольорів в [Палети](https://github.com/catppuccin/catppuccin#-palettes), наприклад Frappe<unk>
3. Використання bindings з [style guide](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md) для вставлення належних кольорів до градієнту

#### Створення пресету без палітри кольорів

Якщо не було палітри кольорів або важко знайти у файлах теми, то обрати з неї кольори

1. Застосувати тему або відкрити скріншот
2. Запустіть [Піктограма](https://extensions.gnome.org/extension/3396/color-picker) або [Піпетка](https://github.com/FineFindus/eyedropper)
3. Pick needed color (zoom in using `alt + super + 8` and zoom in/out using `alt + super` `+` or `-`)
4. Вставити вибраний колір в градієнт

#### Перевірити якість передустановок

Для того, щоб відправити ваш пресет ви повинні перевірити наступні речі:

- Ознайомтесь з кольорами контекстного значення [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag) , використовуючи [Контраст](https://flathub.org/apps/details/org.gnome.design.Contrast) (зміна масштабу використовуючи `alt + 8 + 8` і збільшення/виведення з використання `alt + super` `+` або `-`)
- Обертайте дисплей вгору/вниз на 10/15° для перевірки чи готовий текст
- Бачите в тебе перш за все запитати, чи гарно?

## Опублікувати

Якщо хочете, ви можете додати шаблон до репозиторію спільноти. Роблячи це, користувачі можуть завантажити пресет, використовуючи менеджер пресетів.

1. Розгалуження репозиторію спільноти на GitHub
2. Додайте ваш пресет у куратор теку
3. Додайте рядок в `curated.json` з посиланням на ваш сирий пресет
4. Створити запит на злиття `v2` на гілку і бути впевненим, що ви відповідаєте усім вимогам.
5. Розробка команда перегляне ваш PR і об'єднає його, якщо воно слідує за інструкціями, якщо ні, ми попросимо вас налаштувати специфічні частини
