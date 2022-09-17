# Forudindstillinger

Denne vejledning vil vejlede i processen med at skabe forudindstilling for Gradience.

## Værktøjer

For at oprette forudindstillinger for Gradience skal du bruge følgende værktøjer:

- [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast)
- [Farve Palet](https://flathub.org/apps/details/org.gnome.design.Palette)
- [Farvevælger](https://extensions.gnome.org/extension/3396/color-picker) eller [Eyedropper](https://github.com/FineFindus/eyedropper)

Dette er grundlæggende sæt af værktøjer til komfortable tema skabelse.

## Opret

Først er dit ønske om at gøre forudindstilling ved at portere eksisterende tema eller oprette en fra farvepaletten?

#### Portering af eksisterende tema

Hvis temaet har GTK4 variant, for eksempel [Gruvbox GTK Theme](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Klon temaet: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. I `Gruvbox-GTK-Theme` gå i `temaer/Gnome42`
3. Open `Gruvbox-Dark-B.css`

Denne fil giver farve-bindinger til Libadwaita ansøgning tema, du behøver kun at kopiere paste farveværdier til Gradience, for eksempel kopier farveværdi fra `@define-color window_bg_color #1d2021` til afsnittet "Vinduesfarver", gøre dette for hver farve avialable i `Gruvbox-Dark-B. ss`.

Hvis tema ikke har GTK4 variant, for eksempel [Gruvbox GTK Theme](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Klon temaet: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. I `Gruvbox-GTK-Theme` gå i `temaer/Gruvbox-Dark-B/gtk-3.0`
3. Open `gtk-dark.css`

Denne fil giver farvebindinger til GTK3 programtemaer, du behøver kun at kopiere indsæt farveværdier til Gradience, for eksempel kopier farveværdi fra `@define-color theme_base_color #1d2021` til afsnittet "Vinduesfarver", gøre dette for hver farve avialable i `gtk-dark. ss`.

#### Opretter forudindstilling fra farvepalet

Hvis du ønsker at oprette et tema fra farvepalet, for eksempel [Catppuccin](https://github.com/catppuccin/catppuccin).

1. Gå til [stil guide](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md)
2. Ved hjælp af disse bindinger, skal du vælge perfereret farve variant i [Paletter](https://github.com/catppuccin/catppuccin#-palettes), for eksempel Frappé
3. Brug bindinger fra [stil guide](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md) til at indsætte rigtige farver til Gradience

#### Oprettelse forudindstilling uden farvepalet

Hvis der ikke er nogen farvepalet eller det er svært at finde i temafiler den eneste mulighed er at vælge farver fra det

1. Anvend tema eller åbn et skærmbillede
2. Start [Farvevælger](https://extensions.gnome.org/extension/3396/color-picker) eller [Eyedropper](https://github.com/FineFindus/eyedropper)
3. Vælg nødvendig farve (zoom ind ved hjælp af `alt + super + 8` og zoom ind/ud ved hjælp af `alt + super` `+` eller `-`)
4. Indsæt valgt farve til Gradience

#### Verificér forudindstillede kvalitet

For at kunne indsende din forudindstilling skal du tjekke følgende ting:

- Tjek farverne kontur for at følge [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag) ved hjælp af [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast) (zoom ind ved hjælp af `alt + super + 8` og zoom ind/ud ved hjælp af `alt + super` `+` eller `-`)
- Rotér skærmen op/ned ved 10/15° for at kontrollere, om teksten stadig kan læses
- Se på dig forudindstillede et spørgsmål dig selv, er det smuk?

## Udgiv

Hvis du ønsker, kan du tilføje din forudindstilling til fællesskabet repo. Ved at gøre det, kan brugerne downloade din forudindstilling ved hjælp af forudindstillede manager.

1. Fork fællesskabsregistret på GitHub
2. Tilføj din forudindstilling i den kuraterede mappe
3. Tilføj en linje i `kurated.json` med et link til din rå forudindstilling
4. Opret en pull request mod `v2` filial og sørg for at du opfylder alle krav.
5. Designteamet vil gennemgå din PR og fusionere den, hvis den følger guider, hvis ikke, vil vi bede dig om at justere specifikke dele
