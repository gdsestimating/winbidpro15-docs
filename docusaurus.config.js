module.exports = {
  title: 'WinBidPro Docs',
  tagline: 'Optimize your Bid Process, Focus on Building.',
  url: 'https://docs.gdsestimating.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gdsestimating',
  projectName: 'winbidpro15-docs',
  themeConfig: {
    navbar: {
      title: 'WinBidPro',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Style Guide',
        //       to: 'docs/style-guide',
        //     },
        //   ],
        // },
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
              href: 'https://github.com/gdsestimating/winbidpro15-docs',
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
          editUrl:
            'https://github.com/gdsestimating/winbidpro15-docs/edit/trunk',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
