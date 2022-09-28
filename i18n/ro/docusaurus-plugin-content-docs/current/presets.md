# Presetări

Această instrucțiune va ghida în procesul de creare a presetării pentru radiații.

## Unelte

Pentru a crea presetări pentru Gradience vei avea nevoie de următoarele unelte:

- [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast)
- [Paletă de culori](https://flathub.org/apps/details/org.gnome.design.Palette)
- [Selector de culori](https://extensions.gnome.org/extension/3396/color-picker) sau [Eyedropper](https://github.com/FineFindus/eyedropper)

Acesta este un set de instrumente de bază pentru crearea confortabilă a temei.

## Crează

În primul rând, este nevoie de presetare prin portarea temei existente sau crearea uneia din paleta de culori?

#### Portarea temei existente

Daca tema are varianta GTK4, de exemplu [Tema Gruvbox GTK](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Clonează tema: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Themexit`
2. În `Gruvbox-GTK-Theme` go in `themes/Gnome42`
3. Open `Gruvbox-Dark-B.css`

Acest fișier oferă legături între culori pentru tema aplicației Libadwaita, trebuie doar să copiezi valorile culorilor la Gradience, de exemplu copiază valoarea culorii din `@define-color window_bg_color #1d2021` în secțiunea "Culori fereastră", fă asta pentru fiecare culoare aviabilă în `Gruvbox-Dark-B. ss`.

Daca tema nu are varianta GTK4, de exemplu [Tema Gruvbox GTK](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Clonează tema: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Themexit`
2. In `Gruvbox-GTK-Theme` go in `themes/Gruvbox-Dark-B/gtk-3.0`
3. Open `gtk-dark.css`

Acest fișier oferă legături între culori pentru temerea aplicației GTK3, trebuie doar să copiezi valorile culorilor la Gradience, de exemplu copiază valoarea culorii din `@define-color theme_base_color #1d2021` în secțiunea "Culori fereastră", fă asta pentru fiecare culoare aviabilă în `întuneric gtk. ss`.

#### Crearea presetării din paleta de culori

Dacă doriţi să creaţi o temă din paleta de culori, de exemplu [Catppuccin](https://github.com/catppuccin/catppuccin).

1. Accesați ghidul de stil [](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md)
2. Folosind aceste legături, selectaţi varianta de culoare perferată în [Palette](https://github.com/catppuccin/catppuccin#-palettes), de exemplu Frappe<unk>
3. Folosind legături de la [ghidul de stil](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md) pentru a lipi culorile corecte la Gradience

#### Crearea presetării fără paletă de culori

Dacă nu există paletă de culori sau este greu de găsit în fişierele Temei, singura opţiune este să alegi culori din ele

1. Aplică tema sau deschide o captură de ecran
2. Lansați [Selectorul de culori](https://extensions.gnome.org/extension/3396/color-picker) sau [Eyedropper](https://github.com/FineFindus/eyedropper)
3. Alege culoarea necesară (zoom in using `alt + super + 8` and zoom in/out using `alt + super` `+` or `-`)
4. Inserați culoarea culorii culorii în Gradience

#### Verifică calitatea presetării

Pentru a trimite presetarea trebuie să verificați următoarele lucruri:

- Verifică culorile contează pentru a urmări [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag) folosind [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast) (zoom folosind `alt + super + 8` și zoom in/out folosind `alt + super` `+` sau `-`)
- Rotiți afișajul sus/jos la 10/15° pentru a verifica dacă textul încă poate fi citit
- Vedeți la voi presetați o întrebare, este frumos?

## Publică

Dacă doriți, puteți adăuga presetarea la repo-ul comunității. Făcând asta, utilizatorii pot descărca presetarea folosind managerul presetat.

1. Fă repertoriul comunității pe GitHub
2. Adăugați presetarea în dosarul curat
3. Adaugă o linie în `curated.json` cu un link către presetarea ta brută
4. Creați o cerere de tragere împotriva ramurii `v2` și asigurați-vă că îndepliniți toate cerințele.
5. Echipa de design îți va revizui PR și îl va îmbina dacă urmează ghiduri, dacă nu, îți vom cere să modifici părți specifice
