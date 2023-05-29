(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{632:function(s,a,e){"use strict";e.r(a);var n=e(6),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("了解了源码的文件目录，这一节我们看看如何调试源码。")]),s._v(" "),a("p",[s._v("即使版本号相同（当前最新版为"),a("code",[s._v("17.0.0 RC")]),s._v("），但是"),a("code",[s._v("facebook/react")]),s._v("项目"),a("code",[s._v("master")]),s._v("分支的代码和我们使用"),a("code",[s._v("create-react-app")]),s._v("创建的项目"),a("code",[s._v("node_modules")]),s._v("下的"),a("code",[s._v("react")]),s._v("项目代码还是有些区别。")]),s._v(" "),a("p",[s._v("因为"),a("code",[s._v("React")]),s._v("的新代码都是直接提交到"),a("code",[s._v("master")]),s._v("分支，而"),a("code",[s._v("create-react-app")]),s._v("内的"),a("code",[s._v("react")]),s._v("使用的是稳定版的包。")]),s._v(" "),a("p",[s._v("为了始终使用最新版"),a("code",[s._v("React")]),s._v("教学，我们调试源码遵循以下步骤：")]),s._v(" "),a("ol",[a("li",[s._v("从"),a("code",[s._v("facebook/react")]),s._v("项目"),a("code",[s._v("master")]),s._v("分支拉取最新源码")]),s._v(" "),a("li",[s._v("基于最新源码构建"),a("code",[s._v("react")]),s._v("、"),a("code",[s._v("scheduler")]),s._v("、"),a("code",[s._v("react-dom")]),s._v("三个包")]),s._v(" "),a("li",[s._v("通过"),a("code",[s._v("create-react-app")]),s._v("创建测试项目，并使用步骤2创建的包作为项目依赖的包")])]),s._v(" "),a("h2",{attrs:{id:"拉取源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拉取源码"}},[s._v("#")]),s._v(" 拉取源码")]),s._v(" "),a("p",[s._v("拉取"),a("code",[s._v("facebook/react")]),s._v("代码")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取代码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/facebook/react.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果拉取速度很慢，可以考虑如下2个方案：")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 使用cnpm代理")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com.cnpmjs.org/facebook/react\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 使用码云的镜像（一天会与react同步一次）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://gitee.com/mirrors/react.git\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("安装依赖")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切入到react源码所在文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" react\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装依赖")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("打包"),a("code",[s._v("react")]),s._v("、"),a("code",[s._v("scheduler")]),s._v("、"),a("code",[s._v("react-dom")]),s._v("三个包为dev环境可以使用的"),a("code",[s._v("cjs")]),s._v("包。")]),s._v(" "),a("blockquote",[a("p",[s._v("我们的步骤只包含具体做法，对每一步更详细的介绍可以参考"),a("code",[s._v("React")]),s._v("文档"),a("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/how-to-contribute.html#development-workflow",target:"_blank",rel:"noopener noreferrer"}},[s._v("源码贡献章节"),a("OutboundLink")],1)])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行打包命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" build react/index,react/jsx,react-dom/index,scheduler "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("NODE\n\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("details",{staticClass:"custom-block details"},[a("summary",[s._v("网络不好的同学看这里")]),s._v(" "),a("p",[s._v("如果网络不好，执行"),a("code",[s._v("yarn")]),s._v("命令无法完成依赖安装，或者执行"),a("code",[s._v("yarn build")]),s._v("无法完成打包，可以使用我打好的包。")]),s._v(" "),a("p",[s._v("版本为"),a("code",[s._v("17.0.0-alpha.0")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://gitee.com/kasong/react",target:"_blank",rel:"noopener noreferrer"}},[s._v("地址"),a("OutboundLink")],1)])]),s._v(" "),a("p",[s._v("现在源码目录"),a("code",[s._v("build/node_modules")]),s._v("下会生成最新代码的包。我们为"),a("code",[s._v("react")]),s._v("、"),a("code",[s._v("react-dom")]),s._v("创建"),a("code",[s._v("yarn link")]),s._v("。")]),s._v(" "),a("blockquote",[a("p",[s._v("通过"),a("code",[s._v("yarn link")]),s._v("可以改变项目中依赖包的目录指向")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" build/node_modules/react\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 申明react指向")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" build/node_modules/react-dom\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 申明react-dom指向")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[s._v("#")]),s._v(" 创建项目")]),s._v(" "),a("p",[s._v("接下来我们通过"),a("code",[s._v("create-react-app")]),s._v("在其他地方创建新项目。这里我们随意起名，比如“a-react-demo”。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("npx create-react-app a-react-demo\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在新项目中，将"),a("code",[s._v("react")]),s._v("与"),a("code",[s._v("react-dom")]),s._v("2个包指向"),a("code",[s._v("facebook/react")]),s._v("下我们刚才生成的包。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将项目内的react react-dom指向之前申明的包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" react react-dom\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")]),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("现在试试在"),a("code",[s._v("react/build/node_modules/react-dom/cjs/react-dom.development.js")]),s._v("中随意打印些东西。")]),s._v(" "),a("p",[s._v("在"),a("code",[s._v("a-react-demo")]),s._v("项目下执行"),a("code",[s._v("yarn start")]),s._v("。现在浏览器控制台已经可以打印出我们输入的东西了。")]),s._v(" "),a("p",[s._v("通过以上方法，我们的运行时代码就和"),a("code",[s._v("React")]),s._v("最新代码一致了。")])])}),[],!1,null,null,null);a.default=t.exports}}]);