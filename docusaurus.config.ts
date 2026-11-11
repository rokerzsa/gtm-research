import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'GTM Research Library',
  tagline: 'A working library for go-to-market research',
  url: 'https://example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: 'img/favicon.svg',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'research',
          routeBasePath: 'docs',
          // Only reader-facing book pages become Docusaurus docs. Project plans,
          // source registers, review logs, and other OKF controls stay in research/.
          include: [
            'projects/**/book/index.md',
            'projects/**/book/part-*/**/*.md',
          ],
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'GTM Research',
      logo: {
        alt: 'GTM Research mark',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'researchLibrary',
          position: 'left',
          label: 'Research',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: 'GTM Research Library · Built with Docusaurus',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
