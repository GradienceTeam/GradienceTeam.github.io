# Vorlagen

Diese Anleitung wird im Prozess der Erstellung der Voreinstellung für Gradienz geführt.

## Werkzeuge

Zum Erstellen von Vorlagen für Verlaufsverläufe benötigst du folgende Werkzeuge:

- [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast)
- [Farbpalette](https://flathub.org/apps/details/org.gnome.design.Palette)
- [Farbauswahl](https://extensions.gnome.org/extension/3396/color-picker) oder [Eyedropper](https://github.com/FineFindus/eyedropper)

Dies ist ein grundlegendes Set von Werkzeugen für die komfortable Erstellung von Themen.

## Anlegen

Erstens, möchtest du voreinstellen, indem du ein vorhandenes Theme portierst oder eines aus einer Farbpalette erstellst?

#### Portierung des vorhandenen Themes

Wenn Theme GTK4 Variante hat, zum Beispiel [Gruvbox GTK Theme](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Klone das Thema: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. Im `Gruvbox-GTK-Theme` gehen Sie in `Themes/Gnome42`
3. Open `Gruvbox-Dark-B.css`

Diese Datei bietet Farbbindungen für das Libadwaita-Anwendungsthema. Sie müssen nur Farbwerte in den Farbverlauf kopieren, einfügen zum Beispiel den Farbwert von `@define-color window_bg_color #1d2021` in den Abschnitt "Fensterfarben" kopieren, tun Sie dies für jede Farbe zugänglich in `Gruvbox-Dark-B. s.`.

Wenn Theme keine GTK4-Variante hat, zum Beispiel [Gruvbox GTK Theme](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Klone das Thema: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. Im `Gruvbox-GTK-Theme` gehen Sie in `Themes/Gruvbox-Dark-B/gtk-3.0`
3. Open `gtk-dark.css`

Diese Datei enthält Farbzuordnungen für GTK3-Anwendungs-Theme. Sie müssen nur Farbwerte in den Farbverlauf kopieren, einfügen zum Beispiel den Farbwert von `@define-color theme_base_color #1d2021` in den Abschnitt "Fensterfarben" kopieren, machen Sie dies für jede Farbe zugänglich in `gtk-dark. s.`.

#### Vorlage aus Farbpalette erstellen

Wenn Sie ein Theme aus einer Farbpalette erstellen möchten, zum Beispiel [Catppuccin](https://github.com/catppuccin/catppuccin).

1. Gehe zu [style guide](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md)
2. Verwenden Sie diese Bindungen, wählen Sie perferred color variant [Paletten](https://github.com/catppuccin/catppuccin#-palettes), zum Beispiel Frappe<unk>
3. Verwende Bindungen von [Style-Guide](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md) um korrekte Farben in den Verlauf einzufügen

#### Vorlage ohne Farbpalette erstellen

Wenn es keine Farbpalette gibt oder es schwierig ist in den Theme-Dateien zu finden, ist die einzige Option, Farben daraus auszuwählen

1. Theme anwenden oder Screenshot öffnen
2. Starte [Farbauswahl](https://extensions.gnome.org/extension/3396/color-picker) oder [Eyedropper](https://github.com/FineFindus/eyedropper)
3. Wählen Sie die benötigte Farbe (Zoomen mit `alt + super + 8` und zoomen Sie mit `alt + super` `+` oder `-`)
4. Ausgewählte Farbe einfügen

#### Voreingestellte Qualität überprüfen

Um deine Voreinstellung einzureichen, musst du folgende Dinge überprüfen:

- Wählen Sie den Farbkontarst aus, um [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag) mit [Kontrast](https://flathub.org/apps/details/org.gnome.design.Contrast) zu folgen (Zoomen Sie mit `Alt + super + 8` und zoomen Sie ein/aus/herein mit `Alt + super` `+` oder `-`)
- Drehe dein Display um 10/15° nach oben, um zu überprüfen, ob Text noch lesbar ist
- Sehen Sie bei Ihnen Preset eine Frage sich selbst, ist es hübsch?

## Veröffentlichen

Wenn Sie möchten, können Sie Ihre Voreinstellung zur Community-Repo hinzufügen. Damit können Benutzer Ihre Voreinstellung über den Preset-Manager herunterladen.

1. Fork das Community-Repository auf GitHub
2. Füge deine Voreinstellung in den kuratierten Ordner hinzu
3. Fügen Sie eine Zeile in `curated.json` mit einem Link zu Ihrer Rohvorgabe hinzu
4. Erstellen Sie einen Pull-Request gegen `v2` Branch und stellen Sie sicher, dass Sie alle Anforderungen erfüllen.
5. Das Design-Team wird Ihre PR überprüfen und zusammenführen, wenn es den Anleitungen folgt, wenn nicht, werden wir Sie bitten, bestimmte Teile zu optimieren
