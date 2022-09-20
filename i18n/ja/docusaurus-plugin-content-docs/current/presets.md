# プリセット

この指示はグラディエンスのためのプリセットの作成プロセスをガイドします。

## ツール

グラデーション用のプリセットを作成するには、以下のツールが必要です。

- [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast)
- [カラーパレット](https://flathub.org/apps/details/org.gnome.design.Palette)
- [カラーピッカー](https://extensions.gnome.org/extension/3396/color-picker) または [スポイト](https://github.com/FineFindus/eyedropper)

これは快適なテーマ作成のための基本的なツールセットです。

## 作成

まず、既存のテーマを移植したり、カラーパレットで作成したりして、プリセットを作成したいですか?

#### 既存のテーマを移植中

テーマにGTK4のバリエーションがある場合、例えば [Gruvbox GTK Theme](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme).

1. テーマをクローン: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. In `Gruvbox-GTK-Theme` go in `themes/Gnome42`
3. Open `Gruvbox-Dark-B.css`

This file provides color-bindings for Libadwaita application theming, you only need to copy-paste color values to Gradience, for example copy color value from `@define-color window_bg_color #1d2021` to the "Window Colors" section, do this for every color avialable in `Gruvbox-Dark-B.css`.

テーマにGTK4のバリエーションがない場合、例えば [Gruvbox GTK Theme](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme)。

1. テーマをクローン: `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. In `Gruvbox-GTK-Theme` go in `themes/Gruvbox-Dark-B/gtk-3.0`
3. Open `gtk-dark.css`

This file provides color-bindings for GTK3 application theming, you only need to copy-paste color values to Gradience, for example copy color value from `@define-color theme_base_color #1d2021` to the "Window Colors" section, do this for every color avialable in `gtk-dark.css`.

#### カラーパレットからプリセットを作成

カラーパレットから [Catppuccin](https://github.com/catppuccin/catppuccin) などのテーマを作成したい場合。

1. [スタイルガイド](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md) に移動
2. これらのバインディングを使用して、 [パレット](https://github.com/catppuccin/catppuccin#-palettes)、例えばフラッペのようにパーファレッドカラーバリアントを選択してください。
3. 適切な色をグラデーションに貼り付けるために、 [スタイルガイド](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md) からバインディングを使用する

#### カラーパレットなしでプリセットを作成する

カラーパレットがない場合、またはテーマファイルで見つけるのが難しい場合は、そこから色を選択するだけです。

1. テーマを適用またはスクリーンショットを開く
2. [カラーピッカー](https://extensions.gnome.org/extension/3396/color-picker) または [スポイト](https://github.com/FineFindus/eyedropper) を起動
3. 必要な色を選択します ( `alt + スーパー + 8` を使用してズームイン/アウトします。 `alt + スーパー` `+` または `-`)
4. 選択した色をグラデーションに貼り付け

#### プリセット品質を確認

プリセットを送信するには、以下の内容を確認する必要があります。

- Check colors contarst to follow [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag) using [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast) (zoom in using `alt + super + 8` and zoom in/out using `alt + super` `+` or `-`)
- 文字が読めるかどうかを確認するには、ディスプレイを10/15°回転させます。
- あなた自身に聞いてプリセットを参照してください、それはきれいですか?

## 公開

必要に応じて、コミュニティリポジトリにプリセットを追加できます。 これにより、ユーザーはプリセットマネージャを使用してプリセットをダウンロードできます。

1. GitHubでコミュニティリポジトリをフォーク
2. キュレートされたフォルダーにプリセットを追加
3. rawプリセットへのリンクを含む、 `curated.json` の行を追加します
4. `v2` ブランチに対してプルリクエストを作成し、すべての要件を満たしていることを確認してください。
5. デザインチームはあなたのPRを確認し、ガイドに沿っていない場合はマージします。特定のパーツの調整を依頼します
