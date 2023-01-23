// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MHCAT',
  tagline: 'Unleash the Knowledge Economy 🚀',
  url: 'https://mhcat.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/MHCAT.ico',
  organizationName: 'MHCAT',
  projectName: 'docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ docPath }) => `https://github.com/MHNightCat/MHCAT-docs/edit/main/docs/${docPath}`,
          remarkPlugins: [require('remark-math'), require('mdx-mermaid')],
          rehypePlugins: [require('rehype-katex')],
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/scss/custom.scss')
        }
      })
    ]
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MHCAT',
        logo: {
          alt: 'MHCAT',
          src: 'img/MHCAT-light.svg', 
          srcDark: 'img/MHCAT-dark.svg' 
        },
        items: [
          { 
            to: '/MHCAT',
            position: 'left',
            label: '首頁',
            activeBasePath: "/mhcat"
          },
          {
            to: '/',
            position: 'left', 
            label: '快速索引',
            activeBasePath: "/"
          },
          {
            type: 'dropdown',
            label: '各個類別',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'Contracts',
                docId: 'README',
                docsPluginId: 'contracts'
              },
              {
                type: 'doc',
                label: 'Modules',
                docId: 'logic',
                docsPluginId: 'modules',
              },
              {
                type: 'doc',
                label: 'Commands',
                docId: 'okp4d',
                docsPluginId: 'commands',
              },
            ],
          },
          {
            to: '/MHCAT/faq',
            position: 'left',
            label: '常見問題',
            activeBasePath: "/MHCAT/faq"
          },
          {
            to: '/MHCAT/bug',
            position: 'left',
            label: 'BUG處理',
            activeBasePath: "/BUG"
          },
          {
            href: 'https://dsc.gg/mhcat',
            position: 'right',
            label: '立即邀請',
          },
          {
            href: 'https://discord.gg/7g7VE2Sqna',
            position: 'right',
            className: 'header-discord-link',
            'aria-label': 'Discord'
          },
          {
            href: 'https://www.buymeacoffee.com/mhcat',
            position: 'right',
            className: 'header-byemeacofee-link',
            'aria-label': 'GitHub repository'
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{to: '/contracts/', label: 'Latest version'}],
            docsPluginId: 'contracts',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{to: '/modules/logic', label: 'Latest version'}],
            docsPluginId: 'modules',
            dropdownActiveClassDisabled: true,
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{to: '/commands/okp4d', label: 'Latest version'}],
            docsPluginId: 'commands',
            dropdownActiveClassDisabled: true,
          },
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文檔',
            items: [
              {
                label: '首頁',
                to: '/MHCAT'
              },
              {
                label: '快速索引',
                to: '/'
              },
              {
                label: '常見問題',
                to: '/MHCAT/faq'
              },
              {
                label: 'BUG處理',
                to: '/MHCAT/bug'
              }
            ]
          },
          {
            title: '連結',
            items: [
              {
                label: 'MHCAT 網站',
                href: 'https://mhcat.xyz'
              },
              {
                label: 'Discord 支援伺服器',
                href: 'https://discord.gg/7g7VE2Sqna'
              },
              {
                label: 'Buy me a coffe',
                href: 'https://www.buymeacoffee.com/mhcat'
              },
              {
                label: 'GitHub',
                href: 'https://github.com/MHNightCat/MHCAT-doc'
              }
            ]
          },
          {
            title: '為我投票',
            items: [
              {
                label: 'discordservers.tw',
                href: 'https://discordservers.tw/bots/964185876559196181'
              },
              {
                label: 'top.gg',
                href: 'https://top.gg/bot/964185876559196181'
              }
            ]
          },
          {
            title: '條款',
            items: [
              {
                label: '隱私權政策',
                to: '/terms/privacy_policy'
              },
              {
                label: '服務條款',
                to: '/terms/Terms_of_Service'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MHCAT`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      colorMode: {
        defaultMode: 'dark'
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),

  plugins: [
    'docusaurus-plugin-sass',
    ['drawio', {}],
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        docsRouteBasePath: "/"
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'contracts',
        path: 'contracts',
        routeBasePath: 'contracts/'
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'modules',
        path: 'modules',
        routeBasePath: 'modules/'
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'commands',
        path: 'commands',
        routeBasePath: 'commands/'
      },
    ],
  ],
  scripts: [
    "/js/matomo.js",
    "/js/redirect.js",
  ]
}

module.exports = config
