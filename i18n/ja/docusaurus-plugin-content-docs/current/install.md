---
sidebar_position: 1
---

# インストール

## Flatpak

### Flathub

:::注意

まだ利用できません

:::

```shell
flatpak install com.github.GradienceTeam.Gradience
```

### Github アクションから

[`flatpak.yml`](https://github.com/GradienceTeam/Gradience/actions/workflows/flatpak.yml) のワークフローページを開き、最新のビルドをクリックします。 format@@0 セクションまでスクロールし、ダウンロードしてインストールします。

### `flatpak-builder` を使う

1. ターミナルを開く
2. Run `git clone https://github.com/GradienceTeam/Gradience.git && cd Gradience`
3. `gnome-nightly` Flatpak リポジトリ `flatpak remote-add --if-not-exists gnome-nightly https://nightly.gnome.org/gnome-nightly.flatpakrepo`
4. GNOME SDKの `master` バージョンをインストールする: `flatpak install org.gnome.Sdk/x86_64/master org.gnome.Platform/x86_64/master`
5. `flatpak-builder --install --user --force-clean repo/ com.github.GradienceTeam.Gradience.json`

または、GNOME Builder でプロジェクトを開き、ビルドして実行します。

## ソースから

### グローバルインストール

```sh
git clone https://github.com/GradienceTeam/Gradience.git
cd Gradience
meson builddir --prefix=/usr/local
sudo ninja -C builddir install
```

### ローカルインストール (テストおよび開発用)

```sh
git clone https://github.com/GradienceTeam/Gradience. it
cd Gradience
meson builddir
meson configure builddir -Dprefix="$(pwd)/builddir/testdir"
ninja -C builddir install
ninja -C builddir run
```

:::note

テストと開発中は、便宜上、 `local.sh` スクリプトを使用して、ローカルビルドを素早く再構築できます。

:::

## 次へ

これで、システムを [](/docs/setup) セットアップすることができ、後でGradienceを実行することができます。
