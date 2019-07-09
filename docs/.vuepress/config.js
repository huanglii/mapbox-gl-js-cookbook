module.exports = {
  title: 'Mapbox GL JS Cookbook',
  base: '/mapbox-gl-js-cookbook/',
  description: 'Mapbox GL JS Cookbook',
  plugins: ['@vuepress/back-to-top'],
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
      { text: '指南', link: '/guide/' },
      { text: '数据', link: '/data/' },
      { text: '服务', link: '/service/' },
      { text: '扩展', link: '/extend/' },
      { text: 'Mapbox', items: [
        { text: '文档丨英文', link: 'https://docs.mapbox.com/' },
        { text: '文档丨中文', link: 'https://www.mapbox.cn/documentation/' }
      ]},
      { text: 'GISer 空间', link: 'https://giser.xyz' },
    ],
    sidebarDepth: 2,
    sidebar: {
      '/data/': [
        {
          title: '数据',
          collapsable: false,
          children: [
            '',
            'base',
            'advance'
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
      ],
      '/extend/': [
        {
          title: '扩展',
          collapsable: false,
          children: [
            '',
            'heatmap'
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
