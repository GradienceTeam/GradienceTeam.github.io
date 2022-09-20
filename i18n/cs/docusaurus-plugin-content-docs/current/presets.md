# Předvolby

Tato instrukce se bude řídit vytvořením předvolby pro Gradience.

## Nástroje a nářadí

Pro vytvoření předvoleb pro Gradience budete potřebovat následující nástroje:

- [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast)
- [Paleta barev](https://flathub.org/apps/details/org.gnome.design.Palette)
- [Výběr barvy](https://extensions.gnome.org/extension/3396/color-picker) nebo [ošetřující](https://github.com/FineFindus/eyedropper)

Toto je základní sada nástrojů pro pohodlnou tvorbu motivů.

## Vytvořit

Nejprve chcete přednastavit portováním existující šablony nebo vytvořením jedné z barevných palet?

#### Přenos existujícího motivu

Pokud téma má variantu GTK4, například [Gruvbox GTK téma](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Klonovat téma: `git klon https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. V `Gruvbox-GTK šabloně` přejděte do `témat/Gnome42`
3. Open `Gruvbox-Dark-B.css`

Tento soubor poskytuje vazbu barev pro nastavení aplikace Libadwaita, stačí zkopírovat hodnoty barev do Gradience, například kopírovat hodnotu barvy z `@define-color window_bg_color #1d2021` do sekce "Barvy okna", udělá to pro každou barvu avaliální v `Gruvbox-Dark-B. ss`.

Pokud téma nemá GTK4 variantu, například [Gruvbox GTK téma](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Klonovat téma: `git klon https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. V `Gruvbox-GTK-Téma` jděte do `témat/Gruvbox-Dark-B/gtk-3.0`
3. Open `gtk-dark.css`

Tento soubor poskytuje vazbu barev pro téma aplikace GTK3, stačí zkopírovat hodnoty barev do Gradience, například kopírujte hodnotu barvy z `@define-color theme_base_color #1d2021` do sekce "Barvy okna", udělá to pro každou barvu avatrovatelnou v `gtk-temně. ss`.

#### Vytváření předvolby z palety barev

Pokud chcete vytvořit šablonu z barevné palety, například [Catppuccin](https://github.com/catppuccin/catppuccin).

1. Přejít na [stylový průvodce](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md)
2. Pomocí těchto vazeb vyberte odvozenou variantu barvy v [Paletách](https://github.com/catppuccin/catppuccin#-palettes), například Frappe
3. Použití vazeb od [stylu](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md) k vložení řádných barev do Gradience

#### Vytváření předvolby bez palety barev

Pokud neexistuje paleta barev nebo je těžké najít v souborech motivů, jedinou možností je vybrat z ní barvy

1. Použít motiv nebo otevřít snímek obrazovky
2. Spustit [výběr barvy](https://extensions.gnome.org/extension/3396/color-picker) nebo [oštěp](https://github.com/FineFindus/eyedropper)
3. Vyberte požadovanou barvu (přiblížení pomocí `alt + super + 8` a přiblížení pomocí `alt + super` `+` nebo `-`)
4. Vložit vybranou barvu do přechodu

#### Ověřit kvalitu přednastavení

Abyste mohli odeslat své předvolby, musíte zkontrolovat následující věci:

- Podívejte se na nejbližší barvy pro sledování [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag) pomocí [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast) (přiblížení pomocí `alt + super + 8` a přiblížení pomocí `alt + super` `+` nebo `-`)
- Otočit displej nahoru/dolů na 10/15° a zkontrolovat, zda text je stále čitelný
- Podívejte se na přednastavený dotaz sami, je to hezké?

## Publikovat

Pokud chcete, můžete přidat svou předvolbu do repozitáře komunity. Tím si uživatelé mohou stáhnout svou předvolbu pomocí přednastaveného manažera.

1. Rozštěpit úložiště komunity na GitHubu
2. Přidejte svou předvolbu do řízené složky
3. Přidejte řádek v `curated.json` s odkazem na vaši syrovou předvolbu
4. Vytvořte požadavek na natažení proti větvi `v2` a ujistěte se, že splňujete všechny požadavky.
5. Navrhovací tým zkontroluje váš PR a sloučí jej, pokud se bude řídit návody, pokud ne, požádáme vás, abyste upravili konkrétní díly
