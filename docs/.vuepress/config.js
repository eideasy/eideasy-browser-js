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
      { text: 'Contributing', link: '/contributing/'},
    ],
    sidebar: {
      '/guide/': [
        {
          isGroup: true,
          text: 'Guide',
          children: [
            '/guide/README.md',
            '/guide/demos.md',
            '/guide/api-reference.md',
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
