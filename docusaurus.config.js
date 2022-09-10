// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Gradience",
  tagline: "Change the look of Adwaita, with ease",
  url: "https://GradienceTeam.github.io",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon_light.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "GradienceTeam", // Usually your GitHub org/user name.
  projectName: "GradienceTeam.github.io", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr", "ru", "de", "zh", "cs", "da", "fi", "el", "no", "pl", "pt", "ro", "sv", "uk", "nl", "it", "es", "ar", ],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            if (locale !== "en") {
              return `https://atrophaneura.crowdin.com/gradience/${locale}`;
            }
            return `https://github.com/GradienceTeam/GradienceTeam.github.io/tree/main/${versionDocsDirPath}/${docPath}`;
          },
        },
        blog: {
          showReadingTime: true,
          editUrl: ({ locale, versionDocsDirPath, docPath }) => {
            if (locale !== "en") {
              return `https://atrophaneura.crowdin.com/gradience/${locale}`;
            }
            return `https://github.com/GradienceTeam/GradienceTeam.github.io/tree/main/${versionDocsDirPath}/${docPath}`;
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "ideal-image",
      /** @type {import('@docusaurus/plugin-ideal-image').PluginOptions} */
      ({
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Gradience",
        logo: {
          alt: "Gradience logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "install",
            position: "left",
            label: "Install",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/presets", label: "Presets", position: "left" },
          {
            href: "https://github.com/GradienceTeam/Gradience",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "left",
            dropdownItemsAfter: [
              {
                label: "Help us translate",
                href: "https://atrophaneura.crowdin.com/gradience",
              },
            ],
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Install",
                to: "/docs/install",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Matrix",
                href: "https://matrix.to/#/#Gradience:matrix.org",
              },
              {
                label: "Discord",
                href: "https://discord.com/invite/rwNDGPJf",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/GradienceTeam/Gradience",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Gradience Team`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: false,
          autoCollapseCategories: false,
        },
      },
    }),
};

module.exports = config;
