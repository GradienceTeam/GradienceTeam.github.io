# Forhåndsinnstillinger

Denne instruksen vil gi veiledning i arbeidet med å skape forhåndsinnstilling for Gradience.

## Verktøy

For å opprette forhåndsinnstilte for gradianse vil du trenge følgende verktøy:

- [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast)
- [Farge Palett](https://flathub.org/apps/details/org.gnome.design.Palette)
- [Fargevelger](https://extensions.gnome.org/extension/3396/color-picker) eller [Eyedropper](https://github.com/FineFindus/eyedropper)

Dette er et grunnleggende sett med verktøy for komfortabel utforming av tema.

## Opprett

Først vil du gjøre forhåndsinnstilling ved å eksportere eksisterende tema eller opprette en fra fargepalette?

#### Porter eksisterende tema

Hvis temaet har GTK4 variant, for eksempel [Gruvbox GTK tema](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Klon temaet: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. I `Gruvbox-GTK-Theme` gå i `temaer/Gnome42`
3. Open `Gruvbox-Dark-B.css`

Denne filen gir fargebindinger til Libadwaita app tema. Du trenger bare å kopiere og lime fargeverdier til stråling, for eksempel kopi farge fra `@define-color window_bg_color #1d2021` til seksjonen «window Colors» gjør dette for alle mulige farger i `Gruvbox-Dark-B. ss`.

Hvis temaet ikke har GTK4 variant, for eksempel [Gruvbox GTK tema](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Klon temaet: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. I `Gruvbox-GTK-Theme` gå i `temaer/Gruvbox-Dark-B/gtk-3.0`
3. Open `gtk-dark.css`

Denne filen gir fargekombinasjoner for GTK3 programtemaet, du trenger bare å kopiere og lime fargeverdier til strålingen, for eksempel kopi fargeverdi fra `@define-color theme_base_color #1d2021` til avsnittet «Vindusfarger» gjÃ¸r dette for alle farger så fåtallig i `gtk-mørk. ss`.

#### Oppretter forhåndsinnstilling i fargepalett

Hvis du vil opprette et tema fra fargepalette, f.eks [Catppuccin](https://github.com/catppuccin/catppuccin).

1. Gå til [stilveiledning](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md)
2. Bruk disse bindingene til å velge perfekt fargevariant i [Paletter](https://github.com/catppuccin/catppuccin#-palettes), for eksempel Frappé
3. Bruker bindinger fra [stilveiledning](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md) for å lime inn riktige farger til graven

#### Oppretter forhåndsinnstilling uten fargepalett

Hvis det ikke er noen fargepalett eller er vanskelig å finne i temafiler, er det eneste alternativet å velge farger fra den

1. Bruk tema eller åpne et skjermbilde
2. Start [fargevelger](https://extensions.gnome.org/extension/3396/color-picker) eller [Eyedropper](https://github.com/FineFindus/eyedropper)
3. Plukk inn nødvendig farge (zoom inn med `alt + super + 8` og zoom inn/ut med `alt + super` `+` eller `-`)
4. Lim inn farge til grafen

#### Verifiser forhåndsinnstilt kvalitet

For å sende inn din forhåndsinnstilling må du sjekke følgende ting:

- Sjekk farger innhold for å følge [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag) med [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast) (zoom inn med `alt + super + 8` og zoom inn/ut ved å bruke `alt + super` `+` eller `-`)
- Roter displayet opp/ned ved 10/15° for å se om teksten fortsatt kan leses
- Se til deg selv ved din forhåndsinnstilling, er du den selv?

## Publiser

Hvis du vil, kan du legge til forhåndsinnstillingen i samfunnet ditt repo. Ved å gjøre det, kan brukere laste ned forhåndsinnstillingen din ved hjelp av forhåndsinnstilt leder.

1. Gaffi samfunnets utviklingsarkiv på GitHub
2. Legg til forhåndsinnstillinger i den kuraterte mappen
3. Legg til en linje i `curated.json` med en lenke til din rå forhåndsinnstilling
4. Opprett en pull-forespørsel mot `v2` grenrør og vær sikker på at du oppfyller alle kravene.
5. Design Team vil gjennomgå PR-en din og slå det sammen hvis det følger veiledninger, hvis ikke vil vi be deg om å tilpasse bestemte deler
