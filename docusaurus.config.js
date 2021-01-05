module.exports = {
  title: 'WinBidPro 15 Docs',
  tagline: 'Explore How to Use WinBidPro 15',
  url: 'https://gdsestimating..com',
  baseUrl: '/v15/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gdsestimating', // Usually your GitHub org/user name.
  projectName: 'winbidpro-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'WinBidPro Docs',
      logo: {
        alt: 'WinBidPro',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://facebook.com/gdsestimating',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/gdsestimating',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/gdsestimating/winbidpro-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GDS Estimating`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
