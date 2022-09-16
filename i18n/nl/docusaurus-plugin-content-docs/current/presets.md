# Voorkeursinstellingen

Deze instructie zal leiden tot het maken van een vooraf ingestelde preset voor Gradience.

## Hulpmiddelen

Voor het maken van voorinstellingen voor radience heb je de volgende tools nodig:

- [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast)
- [Kleur Palet](https://flathub.org/apps/details/org.gnome.design.Palette)
- [Kleurkiezer](https://extensions.gnome.org/extension/3396/color-picker) of [Eyedropper](https://github.com/FineFindus/eyedropper)

Dit is de basisset van tools voor comfortabele thema-creatie.

## Aanmaken

Ten eerste, wil je vooraf instellen door bestaand thema te porteren of er een te maken uit kleurenpalet?

#### Porting bestaande thema

Als het thema GTK4 variant heeft, bijvoorbeeld [Gruvbox GTK Thema](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Kloon het thema: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. In `Gruvbox-GTK-Theme` ga je over `thema's/Gnome42`
3. Open `Gruvbox-Dark-B.css`

Dit bestand biedt kleurenbindingen voor de Libadwaita-applicatie thematiek, u hoeft alleen kleurwaarden te kopiëren en plakken in Gradience, bij voorbeeld kopieer de kleurwaarde van `@define-color window_bg_color #1d2021` naar de "Venster Kleuren" sectie, doe dit voor elke luchtkleur in `Gruvbox-Dark-B. ss`.

Als het thema geen GTK4 variant heeft, bijvoorbeeld [Gruvbox GTK Thema](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Kloon het thema: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. In `Gruvbox-GTK-Theme` ga je in `thema's/Gruvbox-Dark-B/gtk-3.0`
3. Open `gtk-dark.css`

Dit bestand biedt kleurenbindingen voor de GTK3-applicatie thematiek, u hoeft alleen kleurwaardes te kopiëren en plakken in Gradience, bij voorbeeld kopieer de kleurwaarde van `@define-color theme_base_color #1d2021` naar de "Raam Kleuren" sectie, doe dit voor elke luchtkleur in de `gtk-donker. ss`.

#### Voorinstelling maken van kleurenpalet

Als je een thema uit kleurenpalet wilt maken, bijvoorbeeld [Catppuccin](https://github.com/catppuccin/catppuccin).

1. Ga naar [stijlgids](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md)
2. Met deze bindingen selecteer je de geperferred kleurvariant in [Palettes](https://github.com/catppuccin/catppuccin#-palettes), bijvoorbeeld Frappe!
3. Het gebruik van bindingen van [style guide](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md) om goede kleuren te plakken in Gradience

#### Voorinstelling maken zonder kleurenpalet

Als er geen kleurenpalet is of het moeilijk te vinden is in themabestanden is de enige optie om er kleuren uit te kiezen

1. Thema toepassen of schermafbeelding openen
2. Start [kleurkiezer](https://extensions.gnome.org/extension/3396/color-picker) of [Eyedropper](https://github.com/FineFindus/eyedropper)
3. Kies de benodigde kleur (zoom in met `alt + super + 8` en zoom in/out met `alt + super` `+` of `-`)
4. Plak gekozen kleur naar Gradience

#### Controleer vooraf ingestelde kwaliteit

Om uw voorinstelling te kunnen insturen moet u de volgende dingen controleren:

- Controleer de kleurencontant om [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag) te volgen met [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast) (zoom in met `alt + super + 8` en zoom in/uit met `alt + super` `+` of `-`)
- Draai je scherm omhoog/omlaag om te controleren of de tekst nog leesbaar is
- Zie je vooraf vooraf een vraag voor jezelf, is het mooi?

## Publiceren

Als je wilt, kun je je voorkeursinstelling toevoegen aan de community repo. Hiermee kunnen gebruikers uw voorinstelling downloaden met behulp van de vooraf ingestelde manager.

1. Fork de community repository op GitHub
2. Voeg je preset toe aan de gecureerde map
3. Voeg een regel toe in `curated.json` met een link naar je rauwe preset
4. Maak een pull-aanvraag tegen `v2` branch en zorg ervoor dat je aan alle eisen voldoet.
5. Het ontwerpteam zal uw PR beoordelen en samenvoegen als het handleidingen volgt, zo niet, dan zullen wij u vragen om specifieke onderdelen aan te passen
