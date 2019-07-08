module.exports = {
  title: 'cookbook',
  base: '/mapbox-gl-js-cookbook/',
  description: 'mapbox-gl-js-cookbook',
  locales: {
    '/': {
      lang: 'zh-CN', 
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'GISer 空间', link: 'https://giser.xyz' },
    ],
    sidebar: {
      '/data/': [
        '',
        'point'
      ],
      '/service/': [
        ''
      ]
    },
    lastUpdated: '上次更新',
    repo: 'huanglii/mapbox-gl-js-cookbook',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页！'
  }
}