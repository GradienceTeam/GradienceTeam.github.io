# Preajustes

Esta instrucción guiará en el proceso de creación de predefinido para la degradación.

## Herramientas

Para crear presets para Gradience necesitará las siguientes herramientas:

- [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast)
- [Paleta de color](https://flathub.org/apps/details/org.gnome.design.Palette)
- [Selector de color](https://extensions.gnome.org/extension/3396/color-picker) o [Eyedropper](https://github.com/FineFindus/eyedropper)

Este es un conjunto básico de herramientas para una cómoda creación de temas.

## Crear

Primero, ¿desea hacer preset portando el tema existente o creando uno a partir de la paleta de colores?

#### Portando tema existente

Si el tema tiene variante GTK4, por ejemplo [Gruvbox GTK Theme](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Clona el tema: `git clon https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. En `Gruvbox-GTK-Theme` ir en `temas/Gnome42`
3. Open `Gruvbox-Dark-B.css`

Este archivo proporciona enlaces de color para la temática de la aplicación Libadwaita, sólo necesita copiar y pegar valores de color a la degradación, por ejemplo copiar el valor de color de `@define-color window_bg_color #1d2021` a la sección "Color de Ventana", hacer esto por cada color avialable en `Gruvbox-Dark-B. Br.`.

Si el tema no tiene variante GTK4, por ejemplo [Gruvbox GTK Theme](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Clona el tema: `git clon https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. En `Gruvbox-GTK-Theme` ir a `themes/Gruvbox-Dark-B/gtk-3.0`
3. Open `gtk-dark.css`

Este archivo proporciona enlaces de color para el tema de la aplicación GTK3, sólo necesita copiar y pegar valores de color a la Gradience, por ejemplo copiar el valor de color de `@define-color theme_base_color #1d2021` a la sección "Color de Ventana", haz esto por cada color avialable en `gtk-dark. Br.`.

#### Creando preajuste de la paleta de colores

Si desea crear un tema desde la paleta de colores, por ejemplo [Catppuccin](https://github.com/catppuccin/catppuccin).

1. Ir a la guía de estilo [](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md)
2. Usando esos enlaces, seleccione variante de color perferida en [Paletas](https://github.com/catppuccin/catppuccin#-palettes), por ejemplo Frappé
3. Usando enlaces de [guía de estilo](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md) para pegar colores adecuados a la Gradiencia

#### Creando preset sin paleta de color

Si no hay paleta de colores o es difícil de encontrar en los archivos del tema la única opción es elegir colores de ella

1. Aplicar tema o abrir una captura de pantalla
2. Lanzar [selector de color](https://extensions.gnome.org/extension/3396/color-picker) o [Eyedropper](https://github.com/FineFindus/eyedropper)
3. Elegir el color necesario (acercar usando `alt + super + 8` y acercar/alejar usando `alt + super` `+` o `-`)
4. Pegar color escogido a Gradience

#### Verificar calidad preestablecida

Para enviar su configuración predefinida, debe comprobar las siguientes cosas:

- Compruebe el contarso de colores para seguir [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag) usando [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast) (acercar usando `alt + super + 8` y acercar/alejar usando `alt + super` `+` o `-`)
- Girar la pantalla hacia arriba/abajo a 10/15° para comprobar si el texto todavía se puede leer
- Ver a usted preconfigurar una pregunta usted mismo, ¿es la viñeta?

## Publicar

Si lo desea, puede añadir su ajuste predefinido al repositorio de la comunidad. Al hacer esto, los usuarios pueden descargar su preset usando el gestor de presets.

1. Fork el repositorio de la comunidad en GitHub
2. Agregue su preset en la carpeta supervisada
3. Agregue una línea en `curated.json` con un enlace a su preset crudo
4. Crea un pull request contra la rama `v2` y asegúrate de que cumples todos los requisitos.
5. El equipo de diseño revisará sus relaciones públicas y las fusionará si sigue las guías, de lo contrario, le pediremos que modifique las partes específicas
