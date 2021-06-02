const { path } = require('@vuepress/utils')
module.exports = {
  title: 'eideasy-browser',
  description: 'Official eID Easy javascript helper library for web browsers',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/eid-easy-icon.png' }],
  ],
  themeConfig: {
    repo: 'eideasy/eideasy-js-sdk/',
    logo: '/assets/img/eid-easy-logo.png',
    navbar: [
      { text: 'Home', link: '/'},
      { text: 'Guide', link: '/guide/'},
      { text: 'Demos', link: '/demos/'},
      { text: 'Contributing', link: '/contributing/'},
    ],
    sidebar: {
      '/guide/': [
        {
          isGroup: true,
          text: 'Guide',
          children: [
            '/guide/README.md',
            '/guide/api-reference.md',
          ],
        },
      ],
      '/demos/': [
        {
          isGroup: true,
          text: 'Demos',
          children: [
            '/demos/README.md',
            '/demos/create-asice-container.md',
            '/demos/add-xades-signature-to-asice-container.md',
          ],
        },
      ],
    },
  },
  plugins: [
    [
      '@vuepress/plugin-search',
    ],
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],
}
