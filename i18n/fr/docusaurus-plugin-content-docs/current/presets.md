# Préréglages

Cette instruction guidera en cours de création de préréglage pour Gradience.

## Outils

Pour créer des préréglages pour Gradience, vous aurez besoin des outils suivants :

- [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast)
- [Palette de couleurs](https://flathub.org/apps/details/org.gnome.design.Palette)
- [Sélecteur de couleur](https://extensions.gnome.org/extension/3396/color-picker) ou [Pipette Eyedropper](https://github.com/FineFindus/eyedropper)

Il s'agit d'un ensemble d'outils de base pour la création confortable de thèmes.

## Créer

Tout d'abord, voulez-vous créer un préréglage en portant un thème existant ou en créant un à partir d'une palette de couleurs ?

#### Portage du thème existant

Si le thème a une variante GTK4, par exemple [Thème GTK Gruvbox](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Clonez le thème : `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. Dans `Gruvbox-GTK-Theme` allez dans `themes/Gnome42`
3. Open `Gruvbox-Dark-B.css`

Ce fichier fournit des liaisons de couleurs pour le thème de l'application Libadwaita, vous n'avez qu'à copier-coller les valeurs de couleur sur Gradience, par exemple copier la valeur de couleur de `@define-color window_bg_color #1d2021` dans la section "Couleurs de fenêtre", faire cela pour chaque couleur avialable en `Gruvbox-Dark-B. ss`.

Si le thème n'a pas de variante GTK4, par exemple [Thème GTK Gruvbox](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Clonez le thème : `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. Dans `Gruvbox-GTK-Theme` allez dans `themes/Gruvbox-Dark-B/gtk-3.0`
3. Open `gtk-dark.css`

Ce fichier fournit des liaisons de couleurs pour le thème de l'application GTK3, vous n'avez qu'à copier-coller les valeurs de couleur sur Gradience, par exemple copier la valeur de la couleur de `@define-color theme_base_color #1d2021` dans la section "Couleurs de fenêtres", faire ceci pour chaque couleur avialable dans `gtk-dark. ss`.

#### Création d'un préréglage à partir de la palette de couleurs

Si vous voulez créer un thème à partir de la palette de couleurs, par exemple [Catppuccin](https://github.com/catppuccin/catppuccin).

1. Allez dans le guide de style [](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md)
2. En utilisant ces liaisons, sélectionnez une variante de couleur perférée dans les [Palettes](https://github.com/catppuccin/catppuccin#-palettes), par exemple Frappe
3. Utilisation des liaisons du [guide de style](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md) pour coller les couleurs appropriées dans Gradience

#### Création d'un préréglage sans palette de couleurs

S'il n'y a pas de palette de couleurs ou qu'il est difficile de trouver dans les fichiers du thème, la seule option est de choisir des couleurs

1. Appliquer le thème ou ouvrir une capture d'écran
2. Lancez [Color Picker](https://extensions.gnome.org/extension/3396/color-picker) ou [Eyedropper](https://github.com/FineFindus/eyedropper)
3. Choisir la couleur requise (zoomer en utilisant `alt + super + 8` et zoomer à l'aide de `alt + super` `+` ou `-`)
4. Coller la couleur sur la Gradience

#### Vérifier la qualité du préréglage

Afin de soumettre votre préréglage, vous devez vérifier les éléments suivants :

- Vérifiez les couleurs contarst pour suivre [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag) en utilisant [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast) (zoomer en utilisant `alt + super + 8` et zoomer en utilisant `alt + super` `+` ou `-`)
- Faites pivoter votre affichage vers le haut/bas à 10/15° pour vérifier si le texte est toujours lisible
- Vous voyez une question prédéfinie vous-même, est-ce joli?

## Publier

Si vous le souhaitez, vous pouvez ajouter votre préréglage au dépôt communautaire. En faisant cela, les utilisateurs peuvent télécharger votre préréglage en utilisant le gestionnaire prédéfini.

1. Fork the Community repository on GitHub
2. Ajouter votre préréglage dans le dossier conservé
3. Ajouter une ligne dans `curated.json` avec un lien vers votre préréglage brut
4. Créez une pull request contre la branche `v2` et assurez-vous que vous répondez à toutes les exigences.
5. L'équipe de conception examinera votre PR et la fusionnera si elle suit des guides, sinon, nous vous demanderons de modifier des pièces spécifiques
