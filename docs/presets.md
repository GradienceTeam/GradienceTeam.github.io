# Presets

This instruction will guide in process of creation of preset for Gradience.

## Tools

For creating presets for Gradience you will need following tools:

- [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast)
- [Color Palette](https://flathub.org/apps/details/org.gnome.design.Palette)
- [Color Picker](https://extensions.gnome.org/extension/3396/color-picker) or [Eyedropper](https://github.com/FineFindus/eyedropper)

This is basic set of tools for comfortable theme creation.

## Create

First, is your want to make preset by porting existing theme or creating one from color palette?

#### Porting existing theme

If theme have GTK4 variant, for example [Gruvbox GTK Theme](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Clone the theme: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. In `Gruvbox-GTK-Theme` go in `themes/Gnome42`
3. Open `Gruvbox-Dark-B.css`

This file provides color-bindings for Libadwaita application theming, you only need to copy-paste color values to Gradience, for example copy color value from `@define-color window_bg_color #1d2021` to the "Window Colors" section, do this for every color avialable in `Gruvbox-Dark-B.css`.

If theme don't have GTK4 variant, for example [Gruvbox GTK Theme](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Clone the theme: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. In `Gruvbox-GTK-Theme` go in `themes/Gruvbox-Dark-B/gtk-3.0`
3. Open `gtk-dark.css`

This file provides color-bindings for GTK3 application theming, you only need to copy-paste color values to Gradience, for example copy color value from `@define-color theme_base_color #1d2021` to the "Window Colors" section, do this for every color avialable in `gtk-dark.css`.

#### Creating preset from color palette

If you want to create a theme from color palette, for example [Catppuccin](https://github.com/catppuccin/catppuccin).

1. Go to [style guide](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md)
2. Using those bindings, select perferred color variant in [Palettes](https://github.com/catppuccin/catppuccin#-palettes), for example Frappé
3. Using bindings from [style guide](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md) to paste proper colors to Gradience

#### Creating preset without color palette

If there is no color palette or it's hard to find in theme files the only option is to pick colors from it

1. Apply theme or open a screenshot
2. Launch [Color Picker](https://extensions.gnome.org/extension/3396/color-picker) or [Eyedropper](https://github.com/FineFindus/eyedropper)
3. Pick needed color (zoom in using `alt + super + 8` and zoom in/out using `alt + super` `+` or `-`)
4. Paste picked color to Gradience

#### Verify preset quality

In order to submit your preset you need to check following things:

- Check colors contarst to follow [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag) using [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast) (zoom in using `alt + super + 8` and zoom in/out using `alt + super` `+` or `-`)
- Rotate your display up/down at 10/15° to check if text still readable
- See at you preset an ask yourself, is it pretty?

## Publish 

If you want, you can add your preset to the community repo. By doing that, users can download your preset using the preset manager.

1. Fork the Community repository on GitHub
2. Add your preset in the curated folder
3. Add a line in `curated.json` with a link to your raw preset
4. Create a pull request against `v2` branch and be sure that you meet all requirements.
5. Design Team will review your PR and merge it if it follows guides, if not, we will ask you to tweak specific parts
