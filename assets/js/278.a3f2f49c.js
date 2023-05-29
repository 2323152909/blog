(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{626:function(e,r,t){"use strict";t.r(r);var s=t(6),a=Object(s.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("通过上一节的学习，我们了解了"),r("code",[e._v("Fiber")]),e._v("是什么，知道"),r("code",[e._v("Fiber节点")]),e._v("可以保存对应的"),r("code",[e._v("DOM节点")]),e._v("。")]),e._v(" "),r("p",[e._v("相应的，"),r("code",[e._v("Fiber节点")]),e._v("构成的"),r("code",[e._v("Fiber树")]),e._v("就对应"),r("code",[e._v("DOM树")]),e._v("。")]),e._v(" "),r("p",[e._v("那么如何更新"),r("code",[e._v("DOM")]),e._v("呢？这需要用到被称为“双缓存”的技术。")]),e._v(" "),r("h2",{attrs:{id:"什么是-双缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-双缓存"}},[e._v("#")]),e._v(" 什么是“双缓存”")]),e._v(" "),r("p",[e._v("当我们用"),r("code",[e._v("canvas")]),e._v("绘制动画，每一帧绘制前都会调用"),r("code",[e._v("ctx.clearRect")]),e._v("清除上一帧的画面。")]),e._v(" "),r("p",[e._v("如果当前帧画面计算量比较大，导致清除上一帧画面到绘制当前帧画面之间有较长间隙，就会出现白屏。")]),e._v(" "),r("p",[e._v("为了解决这个问题，我们可以在内存中绘制当前帧动画，绘制完毕后直接用当前帧替换上一帧画面，由于省去了两帧替换间的计算时间，不会出现从白屏到出现画面的闪烁情况。")]),e._v(" "),r("p",[e._v("这种"),r("strong",[e._v("在内存中构建并直接替换")]),e._v("的技术叫做"),r("a",{attrs:{href:"https://baike.baidu.com/item/%E5%8F%8C%E7%BC%93%E5%86%B2",target:"_blank",rel:"noopener noreferrer"}},[e._v("双缓存"),r("OutboundLink")],1),e._v("。")]),e._v(" "),r("p",[r("code",[e._v("React")]),e._v("使用“双缓存”来完成"),r("code",[e._v("Fiber树")]),e._v("的构建与替换——对应着"),r("code",[e._v("DOM树")]),e._v("的创建与更新。")]),e._v(" "),r("h2",{attrs:{id:"双缓存fiber树"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#双缓存fiber树"}},[e._v("#")]),e._v(" 双缓存Fiber树")]),e._v(" "),r("p",[e._v("在"),r("code",[e._v("React")]),e._v("中最多会同时存在两棵"),r("code",[e._v("Fiber树")]),e._v("。当前屏幕上显示内容对应的"),r("code",[e._v("Fiber树")]),e._v("称为"),r("code",[e._v("current Fiber树")]),e._v("，正在内存中构建的"),r("code",[e._v("Fiber树")]),e._v("称为"),r("code",[e._v("workInProgress Fiber树")]),e._v("。")]),e._v(" "),r("p",[r("code",[e._v("current Fiber树")]),e._v("中的"),r("code",[e._v("Fiber节点")]),e._v("被称为"),r("code",[e._v("current fiber")]),e._v("，"),r("code",[e._v("workInProgress Fiber树")]),e._v("中的"),r("code",[e._v("Fiber节点")]),e._v("被称为"),r("code",[e._v("workInProgress fiber")]),e._v("，他们通过"),r("code",[e._v("alternate")]),e._v("属性连接。")]),e._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[e._v("currentFiber"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("alternate "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" workInProgressFiber"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nworkInProgressFiber"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("alternate "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" currentFiber"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")]),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("p",[r("code",[e._v("React")]),e._v("应用的根节点通过使"),r("code",[e._v("current")]),e._v("指针在不同"),r("code",[e._v("Fiber树")]),e._v("的"),r("code",[e._v("rootFiber")]),e._v("间切换来完成"),r("code",[e._v("current Fiber")]),e._v("树指向的切换。")]),e._v(" "),r("p",[e._v("即当"),r("code",[e._v("workInProgress Fiber树")]),e._v("构建完成交给"),r("code",[e._v("Renderer")]),e._v("渲染在页面上后，应用根节点的"),r("code",[e._v("current")]),e._v("指针指向"),r("code",[e._v("workInProgress Fiber树")]),e._v("，此时"),r("code",[e._v("workInProgress Fiber树")]),e._v("就变为"),r("code",[e._v("current Fiber树")]),e._v("。")]),e._v(" "),r("p",[e._v("每次状态更新都会产生新的"),r("code",[e._v("workInProgress Fiber树")]),e._v("，通过"),r("code",[e._v("current")]),e._v("与"),r("code",[e._v("workInProgress")]),e._v("的替换，完成"),r("code",[e._v("DOM")]),e._v("更新。")]),e._v(" "),r("p",[e._v("接下来我们以具体例子讲解"),r("code",[e._v("mount时")]),e._v("、"),r("code",[e._v("update时")]),e._v("的构建/替换流程。")]),e._v(" "),r("h2",{attrs:{id:"mount时"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mount时"}},[e._v("#")]),e._v(" mount时")]),e._v(" "),r("p",[e._v("考虑如下例子：")]),e._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("function")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("App")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("num"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" add"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("useState")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("return")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("p onClick"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("num "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("num"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("p"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\nReactDOM"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("render")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("App"),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" document"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("getElementById")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'root'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br")]),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br")])]),r("ol",[r("li",[e._v("首次执行"),r("code",[e._v("ReactDOM.render")]),e._v("会创建"),r("code",[e._v("fiberRootNode")]),e._v("（源码中叫"),r("code",[e._v("fiberRoot")]),e._v("）和"),r("code",[e._v("rootFiber")]),e._v("。其中"),r("code",[e._v("fiberRootNode")]),e._v("是整个应用的根节点，"),r("code",[e._v("rootFiber")]),e._v("是"),r("code",[e._v("<App/>")]),e._v("所在组件树的根节点。")])]),e._v(" "),r("p",[e._v("之所以要区分"),r("code",[e._v("fiberRootNode")]),e._v("与"),r("code",[e._v("rootFiber")]),e._v("，是因为在应用中我们可以多次调用"),r("code",[e._v("ReactDOM.render")]),e._v("渲染不同的组件树，他们会拥有不同的"),r("code",[e._v("rootFiber")]),e._v("。但是整个应用的根节点只有一个，那就是"),r("code",[e._v("fiberRootNode")]),e._v("。")]),e._v(" "),r("p",[r("code",[e._v("fiberRootNode")]),e._v("的"),r("code",[e._v("current")]),e._v("会指向当前页面上已渲染内容对应"),r("code",[e._v("Fiber树")]),e._v("，即"),r("code",[e._v("current Fiber树")]),e._v("。")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/img/rootfiber.png"),alt:"rootFiber"}}),e._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[e._v("fiberRootNode"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("current "),r("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" rootFiber"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")]),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("由于是首屏渲染，页面中还没有挂载任何"),r("code",[e._v("DOM")]),e._v("，所以"),r("code",[e._v("fiberRootNode.current")]),e._v("指向的"),r("code",[e._v("rootFiber")]),e._v("没有任何"),r("code",[e._v("子Fiber节点")]),e._v("（即"),r("code",[e._v("current Fiber树")]),e._v("为空）。")]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[e._v("接下来进入"),r("code",[e._v("render阶段")]),e._v("，根据组件返回的"),r("code",[e._v("JSX")]),e._v("在内存中依次创建"),r("code",[e._v("Fiber节点")]),e._v("并连接在一起构建"),r("code",[e._v("Fiber树")]),e._v("，被称为"),r("code",[e._v("workInProgress Fiber树")]),e._v("。（下图中右侧为内存中构建的树，左侧为页面显示的树）")])]),e._v(" "),r("p",[e._v("在构建"),r("code",[e._v("workInProgress Fiber树")]),e._v("时会尝试复用"),r("code",[e._v("current Fiber树")]),e._v("中已有的"),r("code",[e._v("Fiber节点")]),e._v("内的属性，在"),r("code",[e._v("首屏渲染")]),e._v("时只有"),r("code",[e._v("rootFiber")]),e._v("存在对应的"),r("code",[e._v("current fiber")]),e._v("（即"),r("code",[e._v("rootFiber.alternate")]),e._v("）。")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/img/workInProgressFiber.png"),alt:"workInProgressFiber"}}),e._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[e._v("图中右侧已构建完的"),r("code",[e._v("workInProgress Fiber树")]),e._v("在"),r("code",[e._v("commit阶段")]),e._v("渲染到页面。")])]),e._v(" "),r("p",[e._v("此时"),r("code",[e._v("DOM")]),e._v("更新为右侧树对应的样子。"),r("code",[e._v("fiberRootNode")]),e._v("的"),r("code",[e._v("current")]),e._v("指针指向"),r("code",[e._v("workInProgress Fiber树")]),e._v("使其变为"),r("code",[e._v("current Fiber 树")]),e._v("。")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/img/wipTreeFinish.png"),alt:"workInProgressFiberFinish"}}),e._v(" "),r("h2",{attrs:{id:"update时"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#update时"}},[e._v("#")]),e._v(" update时")]),e._v(" "),r("ol",[r("li",[e._v("接下来我们点击"),r("code",[e._v("p节点")]),e._v("触发状态改变，这会开启一次新的"),r("code",[e._v("render阶段")]),e._v("并构建一棵新的"),r("code",[e._v("workInProgress Fiber 树")]),e._v("。")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/img/wipTreeUpdate.png"),alt:"wipTreeUpdate"}}),e._v(" "),r("p",[e._v("和"),r("code",[e._v("mount")]),e._v("时一样，"),r("code",[e._v("workInProgress fiber")]),e._v("的创建可以复用"),r("code",[e._v("current Fiber树")]),e._v("对应的节点数据。")]),e._v(" "),r("blockquote",[r("p",[e._v("这个决定是否复用的过程就是Diff算法，后面章节会详细讲解")])]),e._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[r("code",[e._v("workInProgress Fiber 树")]),e._v("在"),r("code",[e._v("render阶段")]),e._v("完成构建后进入"),r("code",[e._v("commit阶段")]),e._v("渲染到页面上。渲染完毕后，"),r("code",[e._v("workInProgress Fiber 树")]),e._v("变为"),r("code",[e._v("current Fiber 树")]),e._v("。")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/img/currentTreeUpdate.png"),alt:"currentTreeUpdate"}}),e._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),r("p",[e._v("本文介绍了"),r("code",[e._v("Fiber树")]),e._v("的构建与替换过程，这个过程伴随着"),r("code",[e._v("DOM")]),e._v("的更新。")]),e._v(" "),r("p",[e._v("那么在构建过程中每个"),r("code",[e._v("Fiber节点")]),e._v("具体是如何创建的呢？我们会在"),r("code",[e._v("架构篇")]),e._v("的"),r("RouterLink",{attrs:{to:"/12.React技术揭秘/01.理念篇/process/reconciler.html"}},[e._v("render阶段")]),e._v("讲解。")],1),e._v(" "),r("h2",{attrs:{id:"参考资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[e._v("#")]),e._v(" 参考资料")]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Fiber树的创建与切换Demo")]),e._v(" "),r("p",[e._v("此"),r("code",[e._v("Demo")]),e._v("会在如下时机在控制台打印信息：")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("构建"),r("code",[e._v("WorkInProgrss Fiber")]),e._v("时")])]),e._v(" "),r("li",[r("p",[e._v("在渲染完毕后，"),r("code",[e._v("workInProgress Fiber 树")]),e._v("变为"),r("code",[e._v("current Fiber 树")]),e._v("时")])])]),e._v(" "),r("p",[r("RouterLink",{attrs:{to:"/12.React技术揭秘/01.理念篇/me.html"}},[e._v("关注公众号")]),e._v("，后台回复"),r("strong",[e._v("812")]),e._v("获得在线Demo地址")],1)])])}),[],!1,null,null,null);r.default=a.exports}}]);