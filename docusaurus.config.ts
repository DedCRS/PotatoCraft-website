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
  organizationName: 'DedCRS', // Usually your GitHub org/user name.
  projectName: 'PotatoCraft-website', // Usually your repo name.

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
      id: 's20',
      content: `<a href="/blog/potato-anvil">土豆网络 × 铁砧工艺</a> 模组服现已开启。立刻 <a href="https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=H-M4n639W0unDmzicMfDDz3jHyw1bfoJ&authKey=%2BSAaxUFUgs%2BnTdVOadlMUn3maymaDizC6nG1qzssyVKkICyrVt0M2njxdPEaI3Cz&noverify=0&group_code=605822090">加入对话</a>，获取最新消息！`,
      backgroundColor: '#4ec1dd',
      textColor: '#222222',
      isCloseable: true,
    },
    navbar: {
      title: 'PotatoCraft 土豆网络',
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
          // {href: 'TBD URL', label: '📦整合包下载', position: 'left'},
          {href: 'https://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=H-M4n639W0unDmzicMfDDz3jHyw1bfoJ&authKey=%2BSAaxUFUgs%2BnTdVOadlMUn3maymaDizC6nG1qzssyVKkICyrVt0M2njxdPEaI3Cz&noverify=0&group_code=605822090', label: '🗯️拉我进群', position: 'left'},
        ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '帮助',
          items: [
            {
              label: '加入服务器',
              to: '/docs/intro',
            },
            {
              label: '规则',
              to: '/rule',
            },
            {
              label: '详细技术信息',
              to: '/specs',
            },
          ],
        },
        {
          title: 'Friends',
          items: [
            {
              label: 'NightFish',
              href: 'https://github.com/dmzz-yyhyy',
            },
            {
              label: 'UnnamedSer',
              href: 'https://unnamedser.com/',
            },
            {
              label: 'Curiousers!',
              href: 'https://curiousers.org',
            },
          ],
        },
        {
          title: '关于',
          items: [
            {
              label: 'View Source (GitHub)',
              href: 'https://github.com/DedCRS/PotatoCraft-website',
            },
            {
              label: 'DedCRS',
              href: 'https://github.com/DedCRS',
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
      
      copyright: `Copyright © 2019-${new Date().getFullYear()} <a href="https://github.com/DedCRS" target="_blank">DedCRS</a> and their <a href="https://github.com/DedCRS/PotatoCraft-website/graphs/contributors" target="_blank">contributors</a>.
      <br />
      <a>
        <img src="https://vercelbadge.vercel.app/api/yukonisen/potatonetwork?style=flat-square" />
        <img src="https://img.shields.io/github/languages/top/DedCRS/potatocraft-website?style=flat-square" />
        <img src="https://img.shields.io/github/last-commit/DedCRS/potatocraft-website?style=flat-square" />
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
