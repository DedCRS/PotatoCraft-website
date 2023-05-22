// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '土豆网络',
  tagline: 'PotatoNetwork',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://upt.curiousers.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yukonisen', // Usually your GitHub org/user name.
  projectName: 'PotatoNetwork', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          },
        blog: {
          showReadingTime: false,
          },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      announcementBar: {
        id: '2023summer-trailer', // Increment on change
        content: `☀️ 我们将开放 2023 年暑假服活动。开放日期取决于 Minecraft 1.20 发布日期。`,
        backgroundColor: '#25c2a0',
        textColor: '#2c2f33',
        isCloseable: false,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '土豆网络',
        logo: {
          alt: 'Logo',
          src: 'https://static.wikia.nocookie.net/minecraft/images/5/51/Potato_TextureUpdate.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {to: '/blog', label: '公告板', position: 'left'},
          {
            href: 'https://github.com/yukonisen/PotatoNetwork',
            label: 'GitHub',
            position: 'right',
          },
          {href: 'https://stats.uptimerobot.com/305nWhXn1B',
            label: '服务器状态',
            position: 'right'},
          {to: '/donate', label: '捐助', position: 'left'},
          {to: '/community', label: '社区', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '加入服务器',
                to: '/docs/current-season',
              },
              {
                label: '故障排除',
                to: '/docs/joining/troubleshooting',
              },
            ],
          },
          {
            title: 'CSUB 社群',
            items: [
              {
                label: 'KOOK 语音',
                href: 'https://www.kookapp.cn/app/invite/Izy7mk',
              },
              {
                label: 'TeamSpeak 3',
                href: 'https://ts.curiousers.org',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/yukonisen/PotatoNetwork',
              },
              {
                label: 'Curiousers!',
                href: 'https://curiousers.org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Curiousers!`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
