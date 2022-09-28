# Predefiniti

Questa istruzione guiderà in processo di creazione di preset per Gradience.

## Strumenti

Per creare preset per la Gradienza è necessario utilizzare i seguenti strumenti:

- [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast)
- [Tavolozza Colore](https://flathub.org/apps/details/org.gnome.design.Palette)
- [Color Picker](https://extensions.gnome.org/extension/3396/color-picker) or [Eyedropper](https://github.com/FineFindus/eyedropper)

Questo è un set di strumenti di base per la creazione di un tema confortevole.

## Crea

Innanzitutto, il tuo desiderio di creare preimpostazioni portando il tema esistente o creandone uno dalla tavolozza di colori?

#### Porzione tema esistente

Se il tema ha una variante GTK4, per esempio [Tema Gruvbox GTK](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Clona il tema: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. In `Gruvbox-GTK-Theme` go in `themes/Gnome42`
3. Open `Gruvbox-Dark-B.css`

Questo file fornisce associazioni di colori per il tema dell'applicazione Libadwaita, è necessario solo copiare-incollare i valori di colore in Gradienza, per esempio copia il valore del colore da `@define-color window_bg_color #1d2021` alla sezione "Colori della finestra", fare questo per ogni colore avialable in `Gruvbox-Dark-B. ss`.

Se il tema non ha una variante GTK4, ad esempio [Tema Gruvbox GTK](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Clona il tema: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. In `Gruvbox-GTK-Theme` go in `themes/Gruvbox-Dark-B/gtk-3.0`
3. Open `gtk-dark.css`

Questo file fornisce associazioni di colori per il tema dell'applicazione GTK3, è necessario solo copiare-incollare i valori di colore in Gradienza, per esempio copia il valore del colore da `@define-color theme_base_color #1d2021` alla sezione "Colori della finestra", fare questo per ogni colore avialable in `gtk-dark. ss`.

#### Creazione della preimpostazione dalla tavolozza colori

Se vuoi creare un tema dalla tavolozza colori, per esempio [Catppuccin](https://github.com/catppuccin/catppuccin).

1. Vai alla [guida stile](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md)
2. Usando queste associazioni, seleziona la variante di colore perferred in [Tavolozze](https://github.com/catppuccin/catppuccin#-palettes), per esempio Frappe<unk>
3. Utilizzando gli attacchi da [style guide](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md) per incollare i colori corretti a Gradienza

#### Creazione della preimpostazione senza tavolozza di colori

Se non c'è una tavolozza di colori o è difficile trovare nei file di tema l'unica opzione è quella di scegliere i colori da esso

1. Applica il tema o apri uno screenshot
2. Lancia [Color Picker](https://extensions.gnome.org/extension/3396/color-picker) o [Eyedropper](https://github.com/FineFindus/eyedropper)
3. Scegli il colore necessario (zoom usando `alt + super + 8` e zoom in/out usando `alt + super` `+` o `-`)
4. Incolla il colore selezionato alla radiazione

#### Verifica la qualità preimpostata

Al fine di inviare il preset è necessario controllare le seguenti cose:

- Controlla i colori contarst per seguire [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag) usando [Contrasto](https://flathub.org/apps/details/org.gnome.design.Contrast) (zoom in uso `alt + super + 8` e zoom in/out utilizzando `alt + super` `+` o `-`)
- Ruota il display su / giù a 10/15° per controllare se il testo è ancora leggibile
- Guardate a voi preimpostate una domanda voi stessi, è carino?

## Pubblica

Se vuoi, puoi aggiungere il tuo preset al repo della comunità. In questo modo, gli utenti possono scaricare il preset utilizzando il gestore preimpostato.

1. Fork the Community repository on GitHub
2. Aggiungi le tue preimpostazioni nella cartella curata
3. Aggiungi una riga in `curated.json` con un link al tuo preset grezzo
4. Crea una pull request contro il ramo `v2` e assicurati di soddisfare tutti i requisiti.
5. Il team di progettazione esaminerà la tua PR e la fonderà se segue le guide, in caso contrario, ti chiederemo di modificare le parti specifiche
