module.exports = {
  title: 'Coderlhd的博客',
  description: '专注 Node.js 技术栈分享，从前端到Node.js再到数据库',
  head: [
    ['meta', { charset: 'UTF-8' }],
    ['link', { rel: 'icon', href: `/favicon.ico` }],
    //增加manifest.json
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  lang: 'en',
  themeConfig: {
    sidebar: 'auto',
    nav: [
      { text: '主页', link: '/' },
      { text: 'node', link: '/node/' },
      {
        text: '前端',
        items: [
          { text: 'js', link: '/webframe/' },
          { text: 'vue', link: '/vue/' },
          { text: 'react', link: '/react/' }
        ]
      },
      { text: '数据库', link: '/database/' },
      { text: '面试问题', link: '/interview/' }
    ]
  },
  // 插件
  plugins: [
    {
      name: 'page-plugin',
      globalUIComponents: ['fixed']
    },
    ['@vuepress/back-to-top'], // 返回顶部
    ['@vuepress/nprogress'], // 加载进度条
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: true
    }
  ]
};
