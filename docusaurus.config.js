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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        id: 'donateAnnouncement-1', // Increment on change
        content: `⭐️ 如果您玩的开心，可以考虑 <a href="donate">给 CSUB 捐助</a> 或给我们的 <a target="_blank" rel="noopener noreferrer" href="https://github.com/yukonisen/PotatoNetwork">GitHub</a> 点个 Star，感谢您的支持！`,
        backgroundColor: '#25c2a0',
        textColor: '#2c2f33',
        isCloseable: true,
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
          {to: 'https://stats.uptimerobot.com/305nWhXn1B', label: '服务器状态', position: 'left'},
          {to: '/donate', label: '捐助', position: 'right'},
          {to: '/contact', label: '管理组', position: 'right'},
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
                label: '常见问题',
                to: '/docs/current-season',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'KOOK 语音',
                href: 'https://www.kookapp.cn/app/invite/Izy7mk',
              },
              {
                label: 'TeamSpeak 3',
                href: '#',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '联系管理组',
                to: '/contact',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/yukonisen/PotatoNetwork',
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
