module.exports = {
  title: 'Mapbox GL JS Cookbook',
  base: '/mapbox-gl-js-cookbook/',
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
    logo: '/images/logo.png',
    displayAllHeaders: true,
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '样式规范', link: '/style-spec/' },
      { text: '数据', link: '/data/' },
      { text: '服务', link: '/service/' },
      { text: '进阶', link: '/advance/' },
      { text: 'DECK.GL', link: '/deck-gl/' },
      {
        text: 'Mapbox',
        items: [
          { text: '文档丨英文', link: 'https://docs.mapbox.com/mapbox-gl-js/api/' },
          { text: '文档丨中文', link: 'https://www.mapbox.cn/mapbox-gl-js/api/' },
          { text: '文档丨MapLibre', link: 'https://maplibre.org/maplibre-gl-js-docs/api/' },
        ]
      },
      // { text: 'GISer 空间', link: 'https://huanglii.github.io' }
    ],
    sidebarDepth: 2,
    sidebar: {
      '/data/': [
        {
          title: '数据',
          collapsable: false,
          children: [
            '',
            'point',
            'line',
            'polygon',
            'raster'
          ]
        }
      ],
      '/style-spec/': [
        {
          title: '样式规范',
          collapsable: false,
          children: [
            '',
            'sprite',
            'glyphs',
            'sources',
            'layers'
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
            'track',
            'control',
            'ECharts',
            // 'deck-gl',
            'threejs'
          ]
        }
      ],
      '/deck-gl/': [
        {
          title: 'DECK.GL',
          collapsable: false,
          children: [
            '',
            'HexagonLayer',
            'PathLayer'
          ]
        }
      ]
    },
    // sidebar: 'auto',
    lastUpdated: '上次更新',
    repo: 'huanglii/mapbox-gl-js-cookbook',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页！'
  },
  markdown: {
    lineNumbers: true
  }
}
