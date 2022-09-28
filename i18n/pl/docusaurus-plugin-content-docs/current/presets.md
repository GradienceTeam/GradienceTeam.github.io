# Ustawienia

Ta instrukcja będzie przewodnikiem w procesie tworzenia ustawień wstępnych dla Gradience.

## Narzędzia

Aby utworzyć presety dla Gradience będziesz potrzebował następujących narzędzi:

- [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast)
- [Paleta kolorów](https://flathub.org/apps/details/org.gnome.design.Palette)
- [Wybór kolorów](https://extensions.gnome.org/extension/3396/color-picker) lub [Eyedropper](https://github.com/FineFindus/eyedropper)

To podstawowy zestaw narzędzi do wygodnego tworzenia motywu.

## Utwórz

Po pierwsze, czy chcesz ustawić predefiniowany przez przenoszenie istniejącego motywu lub tworzenie go z palety kolorów?

#### Przenoszenie istniejącego motywu

Jeśli motyw ma wariant GTK4, na przykład [Motyw Gruvbox GTK](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Sklonuj motyw: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. W `Motyw Gruvbox-GTK-` przejdź do `motywów/Gnome42`
3. Open `Gruvbox-Dark-B.css`

Ten plik zawiera wiązania kolorów dla motywu aplikacji Libadwaita, wystarczy skopiować wartości kolorów do Gradience, na przykład skopiuj wartość koloru z `@define-color window_bg_color #1d2021` do sekcji "Kolory okna", zrób to dla każdego koloru w `Gruvbox-Dark-B. ss`. .

Jeśli motyw nie ma wariantu GTK4, na przykład [Motyw Gruvbox GTK](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Sklonuj motyw: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. W `Gruvbox-GTK-Theme` przejdź do `tematów/Gruvbox-Dark-B/gtk-3.0`
3. Open `gtk-dark.css`

Ten plik zawiera kolory dla motywu aplikacji GTK3, wystarczy skopiować wartości kolorów do Gradience, na przykład skopiuj wartość koloru z `@define-color theme_base_color #1d2021` do sekcji "Kolory okna", zrób to dla każdego koloru w `gtk-ciemności. ss`. .

#### Tworzenie ustawień z palety kolorów

Jeśli chcesz utworzyć motyw z palety kolorów, na przykład [Catppuccin](https://github.com/catppuccin/catppuccin).

1. Przejdź do [poradnika stylu](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md)
2. Używając tych bindów, wybierz wariant koloru odroczonego w [palettes](https://github.com/catppuccin/catppuccin#-palettes), na przykład Frappe∞
3. Używanie wiązań z [poradnika stylu](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md) do wklejania właściwych kolorów do Gradience

#### Tworzenie ustawień bez palety kolorów

Jeśli nie ma palety kolorów lub trudno jest znaleźć w plikach motywu, jedyną opcją jest wybranie kolorów z niej

1. Zastosuj motyw lub otwórz zrzut ekranu
2. Uruchom [selektor kolorów](https://extensions.gnome.org/extension/3396/color-picker) lub [Eedropper](https://github.com/FineFindus/eyedropper)
3. Wybierz wymagany kolor (powiększenie za pomocą `alt + super + 8` i powiększenie za pomocą `alt + super` `+` lub `-`)
4. Wklej wybrany kolor do Gradience

#### Zweryfikuj jakość ustawień

Aby przesłać ustawienie wstępne, musisz sprawdzić następujące rzeczy:

- Sprawdź zarys kolorów, aby podążyć za [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag) używając [kontrastu](https://flathub.org/apps/details/org.gnome.design.Contrast) (powiększenie za pomocą `alt + super + 8` i powiększenie za pomocą `alt + super` `+` lub `-`
- Obróć ekran w górę/dół o 10/15°, aby sprawdzić, czy tekst jest nadal czytelny
- Zobacz, czy ustawisz sobie pytanie, czy jest to ładne?

## Opublikuj

Jeśli chcesz, możesz dodać swoje ustawienia do repozytorium społeczności. Czyniąc to, użytkownicy mogą pobrać ustawienie predefiniowane za pomocą menedżera ustawień.

1. Forkuj repozytorium społeczności na GitHub
2. Dodaj ustawienie wstępne w folderze
3. Dodaj linię w `curated.json` z linkiem do swojego nieprzetworzonego ustawienia
4. Utwórz Pull Request przeciwko gałęzi `v2` i upewnij się, że spełniasz wszystkie wymagania.
5. Zespół projektujący przejrzy Twój PR i połączy go, jeśli będzie postępował zgodnie z przewodnikami, jeśli nie, poprosimy Cię o dostosowanie określonych części
