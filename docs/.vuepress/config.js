const { readEachFileWords } = require("./webSiteInfo/readFile"); // 自定义站点信息插件

module.exports = {
  title: "Coderlhd的博客",
  description:
    "专注 Web 技术栈分享，从原生JS到Vue再到React,然后Node.js的express到koa。",
  lastUpdated: "Last Updated", // string | boolean
  theme: "vdoing", // 使用依赖包主题
  head: [
    ["meta", { charset: "UTF-8" }],
    ["link", { rel: "icon", href: `/favicon.ico` }],
    //增加manifest.json
    ["link", { rel: "manifest", href: "/manifest.json" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css",
      },
    ], // 用于文章浏览量，阿里矢量库
    // ['script', { src: 'https://cdn.staticfile.org/twikoo/1.6.7/twikoo.all.min.js' }]
  ],
  lang: "en",
  themeConfig: {
    smoothScroll: true,
    nav: [
      { text: "主页", link: "/" },
      { text: "Node", link: "/pages/395573/" },
      {
        text: "前端",
        link: "/pages/9f8338/",
        items: [
          { text: "css", link: "/pages/349798/" },
          { text: "html", link: "/pages/a194dc/" },
          { text: "javascript", link: "/pages/a845b1/" },
          { text: "tool", link: "/pages/301f76/" },
          { text: "es6", link: "/pages/ff4b06/" },
          { text: "vue", link: "/pages/69d32e/" },
          { text: "react", link: "/pages/b44d9e/" },
        ],
      },
      { text: "数据库", link: "/pages/3d326e/" },
      {
        text: "算法",
        link: "/pages/83cdcf/",
        items: [
          { text: "剑指Offer", link: "/pages/83cdcf/" },
          { text: "LeetCode", link: "/pages/b2b5b5/" },
          { text: "排序算法", link: "/pages/8d006a/" },
        ],
      },
      { text: "浏览器", link: "/pages/efa880/" },
      { text: "面试问题", link: "/pages/b8f048/" },
      // { text: '关于我', link: '/pages/' },
      {
        text: "索引",
        items: [
          { text: "归档", link: "/archives/" },
          { text: "标签", link: "/tags/" },
        ],
      },
      { text: "ChatGPT", link: "/gpt/" },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    // 以下配置是Vdoing主题改动的和新增的配置
    sidebar: { mode: "structuring", collapsable: true }, // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    repo: "2323152909/blog/",
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: "上次更新", // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)

    docsDir: "docs", // 编辑的文件夹
    editLinks: true, // 编辑链接
    editLinkText: "编辑",
    updateBar: {
      // 最近更新栏
      showToArticle: true, // 显示到文章页底部，默认true
      // moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    },
    category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
    tag: true, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
    archive: true, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。

    author: {
      // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, href: String}
      name: "coderlhd", // 必需
      href: "https://github.com/2323152909", // 可选的
    },
    social: {
      // 社交图标，显示于博主信息栏和页脚栏
      // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
      icons: [
        {
          iconClass: "icon-youjian",
          title: "邮件",
          link: "mailto:15123603553@163.com",
        },
        {
          iconClass: "icon-github",
          title: "GitHub",
          link: "https://github.com/2323152909",
        },
      ],
    },
    footer: {
      // 页脚信息
      // 博客创建年份
      createYear: 2023,
      // 博客版权信息，支持a标签
      copyrightInfo:
        'coderlhd | <a href="https://github.com/2323152909/blob/master/LICENSE" target="_blank">MIT License</a>' +
        '<br> <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank">渝ICP备2022003847号-2号</a>',
    },
    extendFrontmatter: {
      author: {
        name: "coderlhd",
        link: "https://github.com/232315299",
      },
    },
    // 站点配置(首页&文章页)
    blogInfo: {
      blogCreate: "2023-04-04", // 博客创建时间
      indexView: true, // 开启首页的访问量和排名统计，默认 true（开启）
      // pageView: true, // 开启文章页的浏览量统计，默认 true（开启）
      readingTime: true, // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
      eachFileWords: readEachFileWords([""], 300, 160), // 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
      mdFileCountType: "archives", // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
      totalWords: "archives", // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
      moutedEvent: ".tags-wrapper", // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
      // 下面两个选项：第一次获取访问量失败后的迭代时间
      indexIteration: 2500, // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      pageIteration: 2500, // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      // 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
    },
  },
  // 插件
  plugins: [
    ["fulltext-search"], // 全文搜索

    ["@vuepress/nprogress"], // 加载进度条
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
    [
      "one-click-copy",
      {
        // 代码块复制按钮
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ], // String or Array
        copyMessage: "复制成功", // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],
    [
      "vuepress-plugin-zooming", // 放大图片
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)",
        options: {
          bgColor: "rgba(0,0,0,0.6)",
        },
      },
    ],
    [
      "@vuepress/last-updated", // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          const dayjs = require("dayjs"); // https://day.js.org/
          return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
        },
      },
    ],
    [
      "sitemap",
      {
        hostname: "https://coderlhd.top",
      },
    ],
    [
      "md-enhance",
      {
        // 配置选项
        // 启用下角标功能
        sub: true,
        // 启用上角标
        sup: true,
        // 开启脚注
        footnote: true,
        // enableAll : true
      },
    ],
    {
      name: "custom-plugins", // 自定义站点信息插件
      globalUIComponents: ["PageInfo"], // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    },
    // {
    //   name: 'custom-twikoo-plugins',
    //   globalUIComponents: ['Twikoo'] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    // }
  ],
  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [".vuepress/config.js"],
};
