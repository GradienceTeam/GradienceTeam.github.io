# 预设值

这项指示将指导渐变预设的过程。

## 工具

要创建渐变预设，您需要以下工具：

- [Contrast](https://flathub.org/apps/details/org.gnome.design.Contrast)
- [色板](https://flathub.org/apps/details/org.gnome.design.Palette)
- [颜色选择器](https://extensions.gnome.org/extension/3396/color-picker) 或 [Eyedroper](https://github.com/FineFindus/eyedropper)

这是舒适主题创建的基本工具。

## 创建

首先，您是想通过移植现有主题或从色板创建一个预设？

#### 移植现有主题

如果主题有 GTK4 变量，例如 [Gruvbox GTK 主题](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme)。

1. 复制主题： `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. 在 `Gruvbox-GTK-主题` 中 `主题/Gnome42`
3. Open `Gruvbox-Dark-B.css`

此文件为 Libadwaita 应用程序主题提供颜色绑定，您只需要复制粘贴颜色值到 Gradience, 例如，复制颜色值从 `@define-color window_bg_color #1d2021` 到 "Window 颜色" 部分 在 `Gruvbox-Dark-B中对每一种可用于航空的颜色做这个操作。 ss`.

如果主题没有 GTK4 变量，例如 [Gruvbox GTK 主题](https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme)。

1. 复制主题： `git clone https://github.com/Fausto-Korpsvart/Gruvbox-GTK-Theme.git`
2. 在 `Gruvbox-GTK-主题` 中用 `主题/Gruvbox-Dark-B/gtk-3.0`
3. Open `gtk-dark.css`

此文件为 GTK3 应用程序主题提供颜色绑定，您只需要复制粘贴颜色值到 Grandence, 例如，复制颜色值从 `@define-color theme_base_color #1d2021` 到 "Window 颜色" 部分 在 `gtk-dark 中对每个可使用的颜色做这个操作。 ss`.

#### 从色板创建预设

如果您想要从色板创建一个主题，例如 [Catppuccin](https://github.com/catppuccin/catppuccin)。

1. 转到 [风格指南](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md)
2. 使用这些绑定, 在 [调色板](https://github.com/catppuccin/catppuccin#-palettes)中选择完美的颜色变量, 例如Frappeconnectation
3. 使用 [风格指南](https://github.com/catppuccin/catppuccin/blob/main/docs/style-guide.md) 的绑定将适当的颜色粘贴到渐变

#### 创建不带色板的预设

如果没有色板或在主题文件中很难找到颜色，唯一的选项是从它中选择颜色

1. 应用主题或打开屏幕截图
2. 启动 [颜色选择器](https://extensions.gnome.org/extension/3396/color-picker) 或 [Eyedroper](https://github.com/FineFindus/eyedropper)
3. 选择所需的颜色 (使用 `alt + super + 8` 缩放，使用 `alt + super` `+` 或 `-` 缩放)
4. 将选中的颜色粘贴到渐变

#### 验证预设质量

为了提交预设，您需要检查以下事项：

- 使用 [对比性](https://flathub.org/apps/details/org.gnome.design.Contrast) 来检查是否使用 [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag) 来关注颜色(使用 `alt + super + 8` 并使用 `alt + super` `+` 或 `-` 来缩放)
- 在 10/15° 时旋转您的显示屏幕并检查文本是否仍可读
- 看看你自己预设的问问吧？

## 发布

如果您想要，您可以将您的预设添加到社区仓库中。 这样用户就可以使用预设管理器下载预设。

1. 在 GitHub 上派生社区仓库
2. 将您的预设添加到管理的文件夹
3. 在 `curated.json` 中添加一条线，并链接到您的原始预设
4. 创建一个 `v2` 分支的拉取请求，并确保您符合所有要求。
5. 设计团队将审查您的 PR 并合并如果它遵循指南，如果没有，我们将要求您调整特定的部分
