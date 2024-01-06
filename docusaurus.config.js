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

  onBrokenLinks: 'log',
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
          editUrl:
            'https://github.com/yukonisen/PotatoNetwork/tree/master/',
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
        id: 'known-issue', // Increment on change
        content: `Got a new issue? Don't worry, it's a <a href="https://github.com/DM-Earth/Cabricality/issues/169#issuecomment-1842210066">known issue</a>.`,
        backgroundColor: '#4ec1dd',
        textColor: '#222222',
        isCloseable: true,
      },
      navbar: {
        title: '土豆网络',
        logo: {
          alt: 'Logo',
          src: 'https://static.wikia.nocookie.net/minecraft/images/5/51/Potato_TextureUpdate.png',
        },
        items: [
          {to: '/docs/intro', label: '🎮立刻游玩', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '📄文档',
          },
          {to: '/blog', label: '🔔公告板', position: 'left'},
          {href: 'https://stats.uptimerobot.com/305nWhXn1B',
            label: '📡服务器状态',
            position: 'right'},
          {to: '/donate', label: '🎁捐助', position: 'left'},
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
                to: '/docs/intro',
              },
              {
                label: '规则',
                to: '/rule',
              },
            ],
          },
          {
            title: 'CSUB 社群',
            items: [
              {
                label: '黑盒语音',
                href: 'https://chat.xiaoheihe.cn/ipr36u',
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
              {
                html: `
                  <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noreferrer noopener" aria-label="CC BY-NC 4.0">
                    <img src="http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg" alt="CC BY-NC 4.0" />
                  </a>
                `,
              },
            ],
          },
        ],
        
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://curiousers.org/" target="_blank">Curiousers!</a> and <a href="https://github.com/yukonisen/PotatoNetwork/graphs/contributors" target="_blank">Contributors</a>.
        <br />
        <a>
          <img src="https://vercelbadge.vercel.app/api/yukonisen/potatonetwork?style=flat-square" />
          <img src="https://img.shields.io/github/languages/top/yukonisen/potatonetwork?style=flat-square" />
          <img src="https://img.shields.io/github/last-commit/yukonisen/potatonetwork?style=flat-square" />
        `,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
