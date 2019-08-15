module.exports = {
  title: 'Mapbox GL JS Cookbook',
  base: '/',
  description: 'Mapbox GL JS Cookbook',
  plugins: ['@vuepress/back-to-top'],
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '数据', link: '/data/' },
      { text: '服务', link: '/service/' },
      { text: '进阶', link: '/advance/' },
      { text: 'Mapbox', items: [
        { text: '文档丨英文', link: 'https://docs.mapbox.com/' },
        { text: '文档丨中文', link: 'https://www.mapbox.cn/documentation/' }
      ]},
      { text: 'Blog', link: 'https://allanhao.com' }
    ],
    sidebarDepth: 2,
    sidebar: {
      '/data/': [
        {
          title: '数据',
          collapsable: false,
          children: [
            '',
            'style-spec',
            'point',
            'line',
            'polygon',
            'raster'
          ]
        }
      ],
      '/service/': [
        {
          title: '服务',
          collapsable: false,
          children: [
            ''
          ]
        }
      ],
      '/advance/': [
        {
          title: '进阶',
          collapsable: false,
          children: [
            '',
            'thematic',
            'control',
            'typhoon',
            'deck-gl'
          ]
        }
      ]
    },
    // sidebar: 'auto',
    lastUpdated: '上次更新',
    repo: 'allanhao/mapbox-gl-js-cookbook',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: '在 GitHub 上编辑此页！'
  },
  markdown: {
    lineNumbers: true
  }
}
