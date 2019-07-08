module.exports = {
  title: 'Mapbox GL JS Cookbook',
  base: '/mapbox-gl-js-cookbook/',
  description: 'Mapbox GL JS Cookbook',
  locales: {
    '/': {
      lang: 'zh-CN', 
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      { text: '主页', link: '/' },
      { text: '矢量数据', link: '/vector-data/' },
      { text: '栅格数据', link: '/raster-data/' },
      { text: '服务', link: '/service/' },
      { text: 'GISer 空间', link: 'https://giser.xyz' },
    ],
    sidebar: {
      '/vector-data/': [
        {
          title: '矢量数据',
          collapsable: false,
          children: [
            '',
            'point'
          ]
        }
      ],
      '/raster-data/': [
        {
          title: '栅格数据',
          collapsable: false,
          children: [
            '',
            'raster',
            'image'
          ]
        }
      ],
      '/service/': [
        {
          title: '服务',
          collapsable: false,
          children: [
            '',
            'tms'
          ]
        }
      ]
    },
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
