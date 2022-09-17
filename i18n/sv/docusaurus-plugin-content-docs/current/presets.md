# Förval

Denna instruktion kommer att vägleda i processen för att skapa förinställning för gradiens.

## Verktyg

För att skapa förinställningar för Gradience behöver du följande verktyg:

- [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast)
- [Färgpalett](https://flathub.org/apps/details/org.gnome.design.Palette)
- [Färgväljare](https://extensions.gnome.org/extension/3396/color-picker) eller [Eyedropper](https://github.com/FineFindus/eyedropper)

Detta är grundläggande uppsättning verktyg för bekväm tema skapelse.

## Skapa

Först, är din vilja att göra förinställning genom att anpassa befintliga tema eller skapa en från färgpalett?

#### Porting av befintligt tema

Om temat har GTK4 variant, till exempel [Gruvbox GTK Tema](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Klona temat: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. I `Gruvbox-GTK-tema` gå in `teman/Gnome42`
3. Open `Gruvbox-Dark-B.css`

Denna fil ger färgbindningar för Libadwaita applikationstema, du behöver bara kopiera och klistra in färgvärden till Gradience, till exempel kopiera färgvärde från `@define-color window_bg_color #1d2021` till avsnittet "Fönsterfärger" gör detta för varje färg som är avialable i `Gruvbox-Dark-B. ss`.

Om temat inte har GTK4-variant, till exempel [Gruvbox GTK Tema](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Klona temat: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. I `Gruvbox-GTK-tema` gå in `themes/Gruvbox-Dark-B/gtk-3.0`
3. Open `gtk-dark.css`

Den här filen ger färgbindningar för GTK3-applikationsteman, du behöver bara kopiera och klistra in färgvärden till Gradience, till exempel kopiera färgvärde från `@define-color theme_base_color #1d2021` till avsnittet "Fönsterfärger" gör detta för varje färg som är avialable i `gtk-dark. ss`.

#### Skapa förinställning från färgpalett

Om du vill skapa ett tema från färgpalett, till exempel [Catppuccin](https://github.com/catppuccin/catppuccin).

1. Gå till [stilguide](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md)
2. Använda dessa bindningar, välj perferred färgvariant i [Palettes](https://github.com/catppuccin/catppuccin#-palettes), till exempel Frappe<unk>
3. Använda bindningar från [stil guide](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md) för att klistra in rätt färger till Gradience

#### Skapa förinställning utan färgpalett

Om det inte finns någon färgpalett eller om det är svårt att hitta i temafiler är det enda alternativet att välja färger från det

1. Tillämpa tema eller öppna en skärmdump
2. Starta [Color Picker](https://extensions.gnome.org/extension/3396/color-picker) eller [Eyedropper](https://github.com/FineFindus/eyedropper)
3. Välj önskad färg (zooma in med `alt + super + 8` och zooma in/ut med `alt + super` `+` eller `-`)
4. Klistra in vald färg till Gradience

#### Verifiera förinställd kvalitet

För att skicka in din förinställning måste du kontrollera följande saker:

- Kontrollera färger contarst att följa [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag) med [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast) (zooma in med `alt + super + 8` och zooma in/ut med `alt + super` `+` eller `-`)
- Rotera skärmen upp/ner vid 10/15° för att kontrollera om texten fortfarande är läsbar
- Se på att du förinställt en fråga själv, är det sött?

## Publicera

Om du vill kan du lägga till din förinställning till communityrapo. Genom att göra det, användare kan ladda ner din förinställning med hjälp av förinställd chef.

1. Forka Community repository på GitHub
2. Lägg till din förinställning i den kurerade mappen
3. Lägg till en rad i `curated.json` med en länk till din raw förinställning
4. Skapa en pull-förfrågan mot `v2` -filial och var säker på att du uppfyller alla krav.
5. Designteamet kommer att granska din PR och slå ihop den om den följer guider, om inte, kommer vi att be dig att justera specifika delar
