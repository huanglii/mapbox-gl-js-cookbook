const { path } = require('@vuepress/utils')

module.exports = {
  lang: 'zh-CN',
  title: 'Mapbox GL JS Cookbook',
  base: '/mapbox-gl-js-cookbook/',
  description: 'Mapbox GL JS Cookbook',
  head: [
    ['link', { rel: 'icon', href: '/assets/logo.png' }]
  ],
  plugins: [
    ['@vuepress/plugin-search'],
    [
      '@vuepress/register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
  ],
  themeConfig: {
    logo: '/assets/logo.png',
    navbar: [
      { text: '快速开始', link: '/getting-started/' },
      { text: '样式规范', link: '/style-spec/' },
      { text: '数据', link: '/data/' },
      { text: '进阶', link: '/advance/' },
      { text: 'DECK.GL', link: '/deck-gl/' },
      {
        text: 'Mapbox',
        children: [
          { text: '文档丨英文', link: 'https://docs.mapbox.com/mapbox-gl-js/api/' },
          { text: '文档丨中文', link: 'https://www.mapbox.cn/mapbox-gl-js/api/' },
          { text: '文档丨MapLibre', link: 'https://maplibre.org/maplibre-gl-js-docs/api/' }
        ]
      }
    ],
    sidebarDepth: 2,
    // sidebar: 'auto',
    sidebar: {
      '/style-spec/': [
        {
          text: '样式规范',
          children: [
            '/style-spec/',
            '/style-spec/sprite',
            '/style-spec/glyphs',
            '/style-spec/sources',
            '/style-spec/layers',
            '/style-spec/expression'
          ]
        }
      ],
      '/data/': [
        {
          text: '数据',
          children: [
            '/data/',
            '/data/point',
            '/data/line',
            '/data/polygon',
            '/data/raster',
            '/data/thematic'
          ]
        }
      ],
      '/advance/': [
        {
          text: '进阶',
          children: [
            '/advance/',
            '/advance/track',
            '/advance/control',
            '/advance/ECharts',
            '/advance/threejs',
            '/advance/met'
          ]
        }
      ],
      '/deck-gl/': [
        {
          text: 'DECK.GL',
          children: [
            '/deck-gl/',
            '/deck-gl/HexagonLayer',
            '/deck-gl/PathLayer'
          ]
        }
      ]
    },
    repo: 'huanglii/mapbox-gl-js-cookbook',
    docsDir: 'docs',
    editLink: true,
    editLinkText: '在 GitHub 上编辑此页！',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    notFound: ['404 未找到', '找不着了'],
    backToHome: '返回首页',
    openInNewWindow: '在新页面打开',
    toggleDarkMode: '切换夜间模式',
    toggleSidebar: '切换侧边栏'
  }
}
