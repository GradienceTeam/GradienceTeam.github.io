# Esiasetukset

Tämä ohje opastaa prosessissa, jossa luodaan esiasetus Gradiencea varten.

## Työkalut

Jotta voit luoda esiasetuksia Gradiencelle, tarvitset seuraavat työkalut:

- [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast)
- [Väripaletti](https://flathub.org/apps/details/org.gnome.design.Palette)
- [Värivalitsin](https://extensions.gnome.org/extension/3396/color-picker) tai [Eyedropper](https://github.com/FineFindus/eyedropper)

Tämä on perus joukko työkaluja mukava teema luomiseen.

## Luo

Ensinnäkin, haluatko tehdä esiasetuksen siirtämällä olemassa olevan teeman tai luomalla sen väripaletista?

#### Nykyisen teeman siirtäminen

Jos teemassa on GTK4-versio, esimerkiksi [Gruvbox GTK Theme](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Kloonaa teema: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. Sisään `Gruvbox-GTK-teema` mene `teemat/Gnome42`
3. Open `Gruvbox-Dark-B.css`

Tämä tiedosto tarjoaa värikoodeja Libadwaita sovelluksen teemoja, sinun tarvitsee vain kopioida väriarvot Gradienceen, esimerkiksi kopioi värin arvo `@define-color window_bg_color #1d2021` "Ikkunan värit"-osiosta, tee tämä jokaiselle värille avialable `Gruvbox-Tumma B. ss`.

Jos teemassa ei ole GTK4-varianttia, esimerkiksi [Gruvbox GTK Theme](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Kloonaa teema: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. In `Gruvbox-GTK-Teema` go in `themes/Gruvbox-Dark-B/gtk-3.0`
3. Open `gtk-dark.css`

Tämä tiedosto tarjoaa värikoodeja GTK3-sovellusteemoihin, sinun tarvitsee vain kopioida väriarvot Gradienceen, esimerkiksi kopioi väriarvo `@define-color theme_base_color #1d2021` kohtaan "Ikkunan värit" tee tämä jokaiselle värille, joka on avialable `gtk-pimeässä. ss`.

#### Luodaan esiasetusta väripaletista

Jos haluat luoda teeman väripaletista, esimerkiksi [Catppuccin](https://github.com/catppuccin/catppuccin).

1. Siirry [tyylinen opas](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md)
2. Käyttämällä näitä sitovia, valitse ferred väri variant [Palettes](https://github.com/catppuccin/catppuccin#-palettes), esimerkiksi Frappe
3. Käyttämällä [tyylinen opas](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md) sitovia värejä liitä oikeat värit Gradienssiin

#### Luodaan esiasetusta ilman väripalettia

Jos ei ole väripalettia tai on vaikea löytää teema tiedostoja ainoa vaihtoehto on valita värit siitä

1. Käytä teemaa tai avaa kuvakaappaus
2. Käynnistä [Color Picker](https://extensions.gnome.org/extension/3396/color-picker) tai [Eyedropper](https://github.com/FineFindus/eyedropper)
3. Valitse tarvittava väri (zoomaus käyttäen `alt + super + 8` ja zoomaus sisään/ulos käyttäen `alt + super` `+` tai `-`)
4. Liitä poimittu väri Gradienssiin

#### Vahvista esiasetusten laatu

Jotta voit lähettää esiasetuksen, sinun täytyy tarkistaa seuraavat asiat:

- Tarkista värit ja seuraa [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag) käyttäen [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast) (zoomaus käytössä `alt + super + 8` ja zoomaus sisään/ulos käyttäen `alt + super` `+` tai `-`)
- Kierrä näyttöäsi ylös/alaspäin 10/15° tarkistaaksesi onko teksti edelleen luettavissa
- Nähdätkö sinä ennalta kysyä itse, onko se kaunista?

## Julkaise

Jos haluat, voit lisätä esiasetuksesi yhteisön repoon. Tekemällä tämän, käyttäjät voivat ladata esiasetukset käyttämällä esiasetusta.

1. Fork the Community repository on GitHub
2. Lisää esiasetus kuratoituun kansioon
3. Lisää rivi `curated.json` linkillä raaka esiasetus
4. Luo pull-pyyntö `v2` -haaraa vastaan ja varmista, että täytät kaikki vaatimukset.
5. Design Team tarkistaa PR:n ja yhdistää sen, jos se seuraa oppaita, jos ei, pyydämme sinua nipistämään tiettyjä osia
