# Predefinições

Esta instrução guiará o processo de criação de uma predefinição para o Gradiência.

## Ferramentas

Para criar predefinições para a Gradiência, você precisará de seguintes ferramentas:

- [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast)
- [Paleta de cores](https://flathub.org/apps/details/org.gnome.design.Palette)
- [Seletor de Cores](https://extensions.gnome.org/extension/3396/color-picker) ou [Eyedropper](https://github.com/FineFindus/eyedropper)

Este é um conjunto básico de ferramentas para criação de tema confortável.

## Crio

Primeiro, você quer fazer uma predefinição portando um tema existente ou criando uma da paleta de cores?

#### Porta de um tema existente

Se o tema tiver variante GTK4, por exemplo [o tema GTK Gruvbox](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Clona o tema: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. Em `Gruvbox-GTK-Theme` entre `temas/Gnome42`
3. Open `Gruvbox-Dark-B.css`

Este arquivo fornece color-bindings para temas de aplicativo Libadwaita, você só precisa copiar e colar valores de cor para Gradience, por exemplo, copie o valor de cor de `@define-color window_bg_color #1d2021` para a seção "Cores da janela", faça isso para todas as cores aviváveis em `Gruvbox-Dark-B. ss`.

Se o tema não tiver a variante GTK4, por exemplo [Gruvbox Tema GTK](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. Clona o tema: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. Em `Gruvbox-GTK-Theme` entre `temas/Gruvbox-Dark-B/gtk-3.0`
3. Open `gtk-dark.css`

Este arquivo fornece color-bindings para temas de aplicativo GTK3, você só precisa copiar e colar valores de cor para Gradience, por exemplo, copie valor de cor de `@define-color theme_base_color #1d2021` para a seção "Cores da janela", faça isso para cada cor aviária em `azul. ss`.

#### Criando predefinição da paleta de cores

Se você quiser criar um tema a partir da paleta de cores, por exemplo [Catppuccin](https://github.com/catppuccin/catppuccin).

1. Vá para o guia de estilo [](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md)
2. Usando essas amarras, selecione uma variante de cor perferida em [Paleta](https://github.com/catppuccin/catppuccin#-palettes), por exemplo, Frappe├
3. Usando ligações do guia de estilo [](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md) para colar as cores adequadas para Gradiência

#### Criando predefinição sem paleta de cores

Se não houver uma paleta de cores ou se for difícil de encontrar em arquivos de tema, a única opção é escolher as cores dele

1. Aplicar tema ou abrir uma captura de tela
2. Iniciar [Seletor de Cores](https://extensions.gnome.org/extension/3396/color-picker) ou [Eyedropper](https://github.com/FineFindus/eyedropper)
3. Escolha a cor necessária (amplie usando `alt + super + 8` e aumente e diminua o zoom usando `alt + super` `+` ou `-`
4. Colar a cor escolhida para a Gradiência

#### Verificar a qualidade da predefinição

Para enviar sua predefinição, você precisa verificar as seguintes coisas:

- Verifique o contarst de cores para seguir [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag) usando [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast) (ampliar usando `alt + super + 8` e diminuir o zoom usando `alt + super` `+` ou `-`)
- Gire sua tela para cima/baixo em 10/15° para verificar se o texto ainda está legível
- Vê você predefinir uma pergunta, é bonita?

## Publicar

Se quiser, você pode adicionar sua predefinição para o repositório da comunidade. Ao fazer isso, os usuários podem baixar sua predefinição usando o gerenciador de predefinições.

1. Bifurcar o repositório da comunidade no GitHub
2. Adicione sua predefinição na pasta selecionada
3. Adicione uma linha no `curated.json` com um link para sua predefinição bruta
4. Crie um pull request contra o branch `v2` e certifique-se de que você cumpre todos os requisitos.
5. A equipe de design irá rever sua PR e mesclá-la se ela seguir guias, caso contrário, pediremos que você configure partes específicas
