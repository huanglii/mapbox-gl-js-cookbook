module.exports = {
  title: 'cookbook',
  base: 'mapbox-gl-js-cookbook',
  description: 'mapbox-gl-js-cookbook',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: 'GISer空间', link: 'https://giser.xyz' },
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
    lastUpdated: 'Last Updated', // string | boolean
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'huanglii/mapbox-gl-js-cookbook',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    // docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }
}