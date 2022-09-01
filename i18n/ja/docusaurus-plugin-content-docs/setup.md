# セットアップ

## Libadwaitaアプリケーション

ネイティブLibadwaitaアプリケーションに追加の設定は必要ありません。

Flatpak Libadwaitaアプリケーションの場合、権限を上書きする必要があります。

- `sudo flatpak オーバーライド--filesystem=xdg-config/gtk-4.0` または
- [Flatshell](https://github.com/tchx84/Flatseal) を使用し、 `xdg-config/gtk-4.0` を **その他のファイル** に **全アプリケーション** セクションの **に追加します**

## Vanilla GTK 4アプリケーション

[このガイド](https://github.com/lassekongo83/adw-gtk3/blob/main/gtk4.md) を使用して、vanilla GTK 4アプリケーションをテーマにします。

## GTK 3 アプリケーション

- [adw-gtk3](https://github.com/lassekongo83/adw-gtk3#readme) テーマをインストールして適用します (Flatpak パッケージをインストールすることを忘れないでください!)
- Flatpakアプリケーションの権限を上書きする必要があります。
  - sudo flatpak オーバーライド `--filesystem=xdg-config/gtk-3.0` または
  - [Flatshell](https://github.com/tchx84/Flatseal) を使用し、 `xdg-config/gtk-3.0` を **その他のファイル** に **ファイルシステム** セクション **すべてのアプリケーション** に追加します。
