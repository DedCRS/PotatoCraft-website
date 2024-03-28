import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '土豆网络',
  tagline: 'PotatoCraft',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://upt.curiousers.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yukonisen', // Usually your GitHub org/user name.
  projectName: 'PotatoCraft', // Usually your repo name.

  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: false,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'known-issue',
      content: `网络问题（波动、丢包等），请参考<a href="/docs/networking"> 这里 </a>！`,
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
          {href: 'https://portal.curiousers.org/events/potato-s18.html', label: '📦整合包下载', position: 'left'},
          {href: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=H-M4n639W0unDmzicMfDDz3jHyw1bfoJ&authKey=%2BSAaxUFUgs%2BnTdVOadlMUn3maymaDizC6nG1qzssyVKkICyrVt0M2njxdPEaI3Cz&noverify=0&group_code=605822090', label: '🗯️拉我进群', position: 'left'},
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
              href: 'https://github.com/yukonisen/PotatoCraft',
            },
            {
              label: 'Curiousers!',
              href: 'https://curiousers.org',
            },
            {
              html: `
                <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans" target="_blank" rel="noreferrer noopener" aria-label="CC BY-NC 4.0">
                  <img src="http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/by-nc-sa.svg" alt="CC BY-NC 4.0" />
                </a>
              `,
            },
          ],
        },
      ],
      
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://curiousers.org/" target="_blank">Curiousers!</a> and their <a href="https://github.com/yukonisen/PotatoCraft/graphs/contributors" target="_blank">contributors</a>.
      <br />
      <a>
        <img src="https://vercelbadge.vercel.app/api/yukonisen/potatonetwork?style=flat-square" />
        <img src="https://img.shields.io/github/languages/top/yukonisen/potatocraft?style=flat-square" />
        <img src="https://img.shields.io/github/last-commit/yukonisen/potatocraft?style=flat-square" />
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
