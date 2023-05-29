(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{643:function(e,t,s){"use strict";s.r(t);var a=s(6),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("通过本章第一节学习，我们知道"),t("code",[e._v("状态更新")]),e._v("流程开始后首先会"),t("code",[e._v("创建Update对象")]),e._v("。")]),e._v(" "),t("p",[e._v("本节我们学习"),t("code",[e._v("Update")]),e._v("的结构与工作流程。")]),e._v(" "),t("blockquote",[t("p",[e._v("你可以将"),t("code",[e._v("Update")]),e._v("类比"),t("code",[e._v("心智模型")]),e._v("中的一次"),t("code",[e._v("commit")]),e._v("。")])]),e._v(" "),t("h2",{attrs:{id:"update的分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update的分类"}},[e._v("#")]),e._v(" Update的分类")]),e._v(" "),t("p",[e._v("我们先来了解"),t("code",[e._v("Update")]),e._v("的结构。")]),e._v(" "),t("p",[e._v("首先，我们将可以触发更新的方法所隶属的组件分类：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("ReactDOM.render —— HostRoot")])]),e._v(" "),t("li",[t("p",[e._v("this.setState —— ClassComponent")])]),e._v(" "),t("li",[t("p",[e._v("this.forceUpdate —— ClassComponent")])]),e._v(" "),t("li",[t("p",[e._v("useState —— FunctionComponent")])]),e._v(" "),t("li",[t("p",[e._v("useReducer —— FunctionComponent")])])]),e._v(" "),t("p",[e._v("可以看到，一共三种组件（"),t("code",[e._v("HostRoot")]),e._v(" | "),t("code",[e._v("ClassComponent")]),e._v(" | "),t("code",[e._v("FunctionComponent")]),e._v("）可以触发更新。")]),e._v(" "),t("p",[e._v("由于不同类型组件工作方式不同，所以存在两种不同结构的"),t("code",[e._v("Update")]),e._v("，其中"),t("code",[e._v("ClassComponent")]),e._v("与"),t("code",[e._v("HostRoot")]),e._v("共用一套"),t("code",[e._v("Update")]),e._v("结构，"),t("code",[e._v("FunctionComponent")]),e._v("单独使用一种"),t("code",[e._v("Update")]),e._v("结构。")]),e._v(" "),t("p",[e._v("虽然他们的结构不同，但是他们工作机制与工作流程大体相同。在本节我们介绍前一种"),t("code",[e._v("Update")]),e._v("，"),t("code",[e._v("FunctionComponent")]),e._v("对应的"),t("code",[e._v("Update")]),e._v("在"),t("code",[e._v("Hooks")]),e._v("章节介绍。")]),e._v(" "),t("h2",{attrs:{id:"update的结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update的结构"}},[e._v("#")]),e._v(" Update的结构")]),e._v(" "),t("p",[t("code",[e._v("ClassComponent")]),e._v("与"),t("code",[e._v("HostRoot")]),e._v("（即"),t("code",[e._v("rootFiber.tag")]),e._v("对应类型）共用同一种"),t("code",[e._v("Update结构")]),e._v("。")]),e._v(" "),t("p",[e._v("对应的结构如下：")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("update")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" Update"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  eventTime"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  lane"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  suspenseConfig"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("tag")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" UpdateState"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("payload")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("callback")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("next")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")])]),t("blockquote",[t("p",[t("code",[e._v("Update")]),e._v("由"),t("code",[e._v("createUpdate")]),e._v("方法返回，你可以从"),t("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactUpdateQueue.old.js#L189",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),t("OutboundLink")],1),e._v("看到"),t("code",[e._v("createUpdate")]),e._v("的源码")])]),e._v(" "),t("p",[e._v("字段意义如下：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("eventTime：任务时间，通过"),t("code",[e._v("performance.now()")]),e._v("获取的毫秒数。由于该字段在未来会重构，当前我们不需要理解他。")])]),e._v(" "),t("li",[t("p",[e._v("lane：优先级相关字段。当前还不需要掌握他，只需要知道不同"),t("code",[e._v("Update")]),e._v("优先级可能是不同的。")])])]),e._v(" "),t("blockquote",[t("p",[e._v("你可以将"),t("code",[e._v("lane")]),e._v("类比"),t("code",[e._v("心智模型")]),e._v("中"),t("code",[e._v("需求的紧急程度")]),e._v("。")])]),e._v(" "),t("ul",[t("li",[t("p",[e._v("suspenseConfig："),t("code",[e._v("Suspense")]),e._v("相关，暂不关注。")])]),e._v(" "),t("li",[t("p",[e._v("tag：更新的类型，包括"),t("code",[e._v("UpdateState")]),e._v(" | "),t("code",[e._v("ReplaceState")]),e._v(" | "),t("code",[e._v("ForceUpdate")]),e._v(" | "),t("code",[e._v("CaptureUpdate")]),e._v("。")])]),e._v(" "),t("li",[t("p",[e._v("payload：更新挂载的数据，不同类型组件挂载的数据不同。对于"),t("code",[e._v("ClassComponent")]),e._v("，"),t("code",[e._v("payload")]),e._v("为"),t("code",[e._v("this.setState")]),e._v("的第一个传参。对于"),t("code",[e._v("HostRoot")]),e._v("，"),t("code",[e._v("payload")]),e._v("为"),t("code",[e._v("ReactDOM.render")]),e._v("的第一个传参。")])]),e._v(" "),t("li",[t("p",[e._v("callback：更新的回调函数。即在"),t("RouterLink",{attrs:{to:"/12.React技术揭秘/03.实现篇/renderer/layout.html#commitlayouteffectonfiber"}},[e._v("commit 阶段的 layout 子阶段一节")]),e._v("中提到的"),t("code",[e._v("回调函数")]),e._v("。")],1)]),e._v(" "),t("li",[t("p",[e._v("next：与其他"),t("code",[e._v("Update")]),e._v("连接形成链表。")])])]),e._v(" "),t("h2",{attrs:{id:"update与fiber的联系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update与fiber的联系"}},[e._v("#")]),e._v(" Update与Fiber的联系")]),e._v(" "),t("p",[e._v("我们发现，"),t("code",[e._v("Update")]),e._v("存在一个连接其他"),t("code",[e._v("Update")]),e._v("形成链表的字段"),t("code",[e._v("next")]),e._v("。联系"),t("code",[e._v("React")]),e._v("中另一种以链表形式组成的结构"),t("code",[e._v("Fiber")]),e._v("，他们之间有什么关联么？")]),e._v(" "),t("p",[e._v("答案是肯定的。")]),e._v(" "),t("p",[e._v("从"),t("RouterLink",{attrs:{to:"/12.React技术揭秘/03.实现篇/process/doubleBuffer.html"}},[e._v("双缓存机制一节")]),e._v("我们知道，"),t("code",[e._v("Fiber节点")]),e._v("组成"),t("code",[e._v("Fiber树")]),e._v("，页面中最多同时存在两棵"),t("code",[e._v("Fiber树")]),e._v("：")],1),e._v(" "),t("ul",[t("li",[t("p",[e._v("代表当前页面状态的"),t("code",[e._v("current Fiber树")])])]),e._v(" "),t("li",[t("p",[e._v("代表正在"),t("code",[e._v("render阶段")]),e._v("的"),t("code",[e._v("workInProgress Fiber树")])])])]),e._v(" "),t("p",[e._v("类似"),t("code",[e._v("Fiber节点")]),e._v("组成"),t("code",[e._v("Fiber树")]),e._v("，"),t("code",[e._v("Fiber节点")]),e._v("上的多个"),t("code",[e._v("Update")]),e._v("会组成链表并被包含在"),t("code",[e._v("fiber.updateQueue")]),e._v("中。")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("什么情况下一个Fiber节点会存在多个Update？")]),e._v(" "),t("p",[e._v("你可能疑惑为什么一个"),t("code",[e._v("Fiber节点")]),e._v("会存在多个"),t("code",[e._v("Update")]),e._v("。这其实是很常见的情况。")]),e._v(" "),t("p",[e._v("在这里介绍一种最简单的情况：")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("onClick")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("setState")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("a")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("setState")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("b")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("p",[e._v("在一个"),t("code",[e._v("ClassComponent")]),e._v("中触发"),t("code",[e._v("this.onClick")]),e._v("方法，方法内部调用了两次"),t("code",[e._v("this.setState")]),e._v("。这会在该"),t("code",[e._v("fiber")]),e._v("中产生两个"),t("code",[e._v("Update")]),e._v("。")])]),e._v(" "),t("p",[t("code",[e._v("Fiber节点")]),e._v("最多同时存在两个"),t("code",[e._v("updateQueue")]),e._v("：")]),e._v(" "),t("ul",[t("li",[t("p",[t("code",[e._v("current fiber")]),e._v("保存的"),t("code",[e._v("updateQueue")]),e._v("即"),t("code",[e._v("current updateQueue")])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("workInProgress fiber")]),e._v("保存的"),t("code",[e._v("updateQueue")]),e._v("即"),t("code",[e._v("workInProgress updateQueue")])])])]),e._v(" "),t("p",[e._v("在"),t("code",[e._v("commit阶段")]),e._v("完成页面渲染后，"),t("code",[e._v("workInProgress Fiber树")]),e._v("变为"),t("code",[e._v("current Fiber树")]),e._v("，"),t("code",[e._v("workInProgress Fiber树")]),e._v("内"),t("code",[e._v("Fiber节点")]),e._v("的"),t("code",[e._v("updateQueue")]),e._v("就变成"),t("code",[e._v("current updateQueue")]),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"updatequeue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updatequeue"}},[e._v("#")]),e._v(" updateQueue")]),e._v(" "),t("p",[t("code",[e._v("updateQueue")]),e._v("有三种类型，其中针对"),t("code",[e._v("HostComponent")]),e._v("的类型我们在"),t("RouterLink",{attrs:{to:"/12.React技术揭秘/03.实现篇/process/completeWork.html#update时"}},[e._v("completeWork一节")]),e._v("介绍过。")],1),e._v(" "),t("p",[e._v("剩下两种类型和"),t("code",[e._v("Update")]),e._v("的两种类型对应。")]),e._v(" "),t("p",[t("code",[e._v("ClassComponent")]),e._v("与"),t("code",[e._v("HostRoot")]),e._v("使用的"),t("code",[e._v("UpdateQueue")]),e._v("结构如下：")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("queue")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" UpdateQueue"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("State"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("baseState")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" fiber"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("memoizedState"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("firstBaseUpdate")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("lastBaseUpdate")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("shared")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("pending")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[e._v("effects")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])]),t("blockquote",[t("p",[t("code",[e._v("UpdateQueue")]),e._v("由"),t("code",[e._v("initializeUpdateQueue")]),e._v("方法返回，你可以从"),t("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactUpdateQueue.new.js#L157",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),t("OutboundLink")],1),e._v("看到"),t("code",[e._v("initializeUpdateQueue")]),e._v("的源码")])]),e._v(" "),t("p",[e._v("字段说明如下：")]),e._v(" "),t("ul",[t("li",[e._v("baseState：本次更新前该"),t("code",[e._v("Fiber节点")]),e._v("的"),t("code",[e._v("state")]),e._v("，"),t("code",[e._v("Update")]),e._v("基于该"),t("code",[e._v("state")]),e._v("计算更新后的"),t("code",[e._v("state")]),e._v("。")])]),e._v(" "),t("blockquote",[t("p",[e._v("你可以将"),t("code",[e._v("baseState")]),e._v("类比"),t("code",[e._v("心智模型")]),e._v("中的"),t("code",[e._v("master分支")]),e._v("。")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("firstBaseUpdate")]),e._v("与"),t("code",[e._v("lastBaseUpdate")]),e._v("：本次更新前该"),t("code",[e._v("Fiber节点")]),e._v("已保存的"),t("code",[e._v("Update")]),e._v("。以链表形式存在，链表头为"),t("code",[e._v("firstBaseUpdate")]),e._v("，链表尾为"),t("code",[e._v("lastBaseUpdate")]),e._v("。之所以在更新产生前该"),t("code",[e._v("Fiber节点")]),e._v("内就存在"),t("code",[e._v("Update")]),e._v("，是由于某些"),t("code",[e._v("Update")]),e._v("优先级较低所以在上次"),t("code",[e._v("render阶段")]),e._v("由"),t("code",[e._v("Update")]),e._v("计算"),t("code",[e._v("state")]),e._v("时被跳过。")])]),e._v(" "),t("blockquote",[t("p",[e._v("你可以将"),t("code",[e._v("baseUpdate")]),e._v("类比"),t("code",[e._v("心智模型")]),e._v("中执行"),t("code",[e._v("git rebase")]),e._v("基于的"),t("code",[e._v("commit")]),e._v("（节点D）。")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("shared.pending")]),e._v("：触发更新时，产生的"),t("code",[e._v("Update")]),e._v("会保存在"),t("code",[e._v("shared.pending")]),e._v("中形成单向环状链表。当由"),t("code",[e._v("Update")]),e._v("计算"),t("code",[e._v("state")]),e._v("时这个环会被剪开并连接在"),t("code",[e._v("lastBaseUpdate")]),e._v("后面。")])]),e._v(" "),t("blockquote",[t("p",[e._v("你可以将"),t("code",[e._v("shared.pending")]),e._v("类比"),t("code",[e._v("心智模型")]),e._v("中本次需要提交的"),t("code",[e._v("commit")]),e._v("（节点ABC）。")])]),e._v(" "),t("ul",[t("li",[e._v("effects：数组。保存"),t("code",[e._v("update.callback !== null")]),e._v("的"),t("code",[e._v("Update")]),e._v("。")])]),e._v(" "),t("h2",{attrs:{id:"例子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[e._v("#")]),e._v(" 例子")]),e._v(" "),t("p",[t("code",[e._v("updateQueue")]),e._v("相关代码逻辑涉及到大量链表操作，比较难懂。在此我们举例对"),t("code",[e._v("updateQueue")]),e._v("的工作流程讲解下。")]),e._v(" "),t("p",[e._v("假设有一个"),t("code",[e._v("fiber")]),e._v("刚经历"),t("code",[e._v("commit阶段")]),e._v("完成渲染。")]),e._v(" "),t("p",[e._v("该"),t("code",[e._v("fiber")]),e._v("上有两个由于优先级过低所以在上次的"),t("code",[e._v("render阶段")]),e._v("并没有处理的"),t("code",[e._v("Update")]),e._v("。他们会成为下次更新的"),t("code",[e._v("baseUpdate")]),e._v("。")]),e._v(" "),t("p",[e._v("我们称其为"),t("code",[e._v("u1")]),e._v("和"),t("code",[e._v("u2")]),e._v("，其中"),t("code",[e._v("u1.next === u2")]),e._v("。")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("fiber"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("updateQueue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("firstBaseUpdate "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" u1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nfiber"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("updateQueue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("lastBaseUpdate "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" u2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nu1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("next "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" u2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("我们用"),t("code",[e._v("--\x3e")]),e._v("表示链表的指向：")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("fiber"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("updateQueue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("baseUpdate"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" u1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" u2\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("现在我们在"),t("code",[e._v("fiber")]),e._v("上触发两次状态更新，这会先后产生两个新的"),t("code",[e._v("Update")]),e._v("，我们称为"),t("code",[e._v("u3")]),e._v("和"),t("code",[e._v("u4")]),e._v("。")]),e._v(" "),t("p",[e._v("每个 "),t("code",[e._v("update")]),e._v(" 都会通过 "),t("code",[e._v("enqueueUpdate")]),e._v(" 方法插入到 "),t("code",[e._v("updateQueue")]),e._v(" 队列上")]),e._v(" "),t("p",[e._v("当插入"),t("code",[e._v("u3")]),e._v("后：")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("fiber"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("updateQueue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("shared"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("pending "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" u3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nu3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("next "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" u3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[t("code",[e._v("shared.pending")]),e._v("的环状链表，用图表示为：")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("fiber"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("updateQueue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("shared"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("pending"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("   u3 ─────┐ \n                                     "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("^")]),e._v("      "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("                                    \n                                     └──────┘\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("接着插入"),t("code",[e._v("u4")]),e._v("之后：")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("fiber"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("updateQueue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("shared"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("pending "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" u4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nu4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("next "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" u3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nu3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("next "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("===")]),e._v(" u4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[t("code",[e._v("shared.pending")]),e._v("是环状链表，用图表示为：")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("fiber"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("updateQueue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("shared"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("pending"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v("   u4 ──"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" u3\n                                     "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("^")]),e._v("      "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v("                                    \n                                     └──────┘\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[t("code",[e._v("shared.pending")]),e._v(" 会保证始终指向最后一个插入的"),t("code",[e._v("update")]),e._v("，你可以在"),t("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactUpdateQueue.new.js#L208",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),t("OutboundLink")],1),e._v("看到"),t("code",[e._v("enqueueUpdate")]),e._v("的源码")]),e._v(" "),t("p",[e._v("更新调度完成后进入"),t("code",[e._v("render阶段")]),e._v("。")]),e._v(" "),t("p",[e._v("此时"),t("code",[e._v("shared.pending")]),e._v("的环被剪开并连接在"),t("code",[e._v("updateQueue.lastBaseUpdate")]),e._v("后面：")]),e._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("fiber"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("updateQueue"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("baseUpdate"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" u1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" u2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" u3 "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" u4\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("接下来遍历"),t("code",[e._v("updateQueue.baseUpdate")]),e._v("链表，以"),t("code",[e._v("fiber.updateQueue.baseState")]),e._v("为"),t("code",[e._v("初始state")]),e._v("，依次与遍历到的每个"),t("code",[e._v("Update")]),e._v("计算并产生新的"),t("code",[e._v("state")]),e._v("（该操作类比"),t("code",[e._v("Array.prototype.reduce")]),e._v("）。")]),e._v(" "),t("p",[e._v("在遍历时如果有优先级低的"),t("code",[e._v("Update")]),e._v("会被跳过。")]),e._v(" "),t("p",[e._v("当遍历完成后获得的"),t("code",[e._v("state")]),e._v("，就是该"),t("code",[e._v("Fiber节点")]),e._v("在本次更新的"),t("code",[e._v("state")]),e._v("（源码中叫做"),t("code",[e._v("memoizedState")]),e._v("）。")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("render阶段")]),e._v("的"),t("code",[e._v("Update操作")]),e._v("由"),t("code",[e._v("processUpdateQueue")]),e._v("完成，你可以从"),t("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactUpdateQueue.new.js#L405",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),t("OutboundLink")],1),e._v("看到"),t("code",[e._v("processUpdateQueue")]),e._v("的源码")])]),e._v(" "),t("p",[t("code",[e._v("state")]),e._v("的变化在"),t("code",[e._v("render阶段")]),e._v("产生与上次更新不同的"),t("code",[e._v("JSX")]),e._v("对象，通过"),t("code",[e._v("Diff算法")]),e._v("产生"),t("code",[e._v("effectTag")]),e._v("，在"),t("code",[e._v("commit阶段")]),e._v("渲染在页面上。")]),e._v(" "),t("p",[e._v("渲染完成后"),t("code",[e._v("workInProgress Fiber树")]),e._v("变为"),t("code",[e._v("current Fiber树")]),e._v("，整个更新流程结束。")])])}),[],!1,null,null,null);t.default=n.exports}}]);