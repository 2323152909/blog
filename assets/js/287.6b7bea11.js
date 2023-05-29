(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{635:function(s,t,a){"use strict";a.r(t);var e=a(6),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("在本节正式开始前，让我们复习下这一章到目前为止所学的。")]),s._v(" "),t("p",[t("code",[s._v("Renderer")]),s._v("工作的阶段被称为"),t("code",[s._v("commit")]),s._v("阶段。"),t("code",[s._v("commit")]),s._v("阶段可以分为三个子阶段：")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("before mutation阶段（执行"),t("code",[s._v("DOM")]),s._v("操作前）")])]),s._v(" "),t("li",[t("p",[s._v("mutation阶段（执行"),t("code",[s._v("DOM")]),s._v("操作）")])]),s._v(" "),t("li",[t("p",[s._v("layout阶段（执行"),t("code",[s._v("DOM")]),s._v("操作后）")])])]),s._v(" "),t("p",[s._v("本节我们看看"),t("code",[s._v("before mutation阶段")]),s._v("（执行"),t("code",[s._v("DOM")]),s._v("操作前）都做了什么。")]),s._v(" "),t("h2",{attrs:{id:"概览"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[s._v("#")]),s._v(" 概览")]),s._v(" "),t("p",[t("code",[s._v("before mutation阶段")]),s._v("的代码很短，整个过程就是遍历"),t("code",[s._v("effectList")]),s._v("并调用"),t("code",[s._v("commitBeforeMutationEffects")]),s._v("函数处理。")]),s._v(" "),t("blockquote",[t("p",[s._v("这部分"),t("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberWorkLoop.new.js#L2104-L2127",target:"_blank",rel:"noopener noreferrer"}},[s._v("源码在这里"),t("OutboundLink")],1),s._v("。为了增加可读性，示例代码中删除了不相关的逻辑")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 保存之前的优先级，以同步优先级执行，执行完毕后恢复之前优先级")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" previousLanePriority "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("getCurrentUpdateLanePriority")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("setCurrentUpdateLanePriority")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("SyncLanePriority"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 将当前上下文标记为CommitContext，作为commit阶段的标志")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" prevExecutionContext "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" executionContext"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nexecutionContext "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|=")]),s._v(" CommitContext"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 处理focus状态")]),s._v("\nfocusedInstanceHandle "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("prepareForCommit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("containerInfo"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nshouldFireAfterActiveInstanceBlur "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// beforeMutation阶段的主函数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("commitBeforeMutationEffects")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("finishedWork"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nfocusedInstanceHandle "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("我们重点关注"),t("code",[s._v("beforeMutation")]),s._v("阶段的主函数"),t("code",[s._v("commitBeforeMutationEffects")]),s._v("做了什么。")]),s._v(" "),t("h2",{attrs:{id:"commitbeforemutationeffects"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#commitbeforemutationeffects"}},[s._v("#")]),s._v(" commitBeforeMutationEffects")]),s._v(" "),t("p",[s._v("大体代码逻辑：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("commitBeforeMutationEffects")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("nextEffect "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" current "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nextEffect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("alternate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("shouldFireAfterActiveInstanceBlur "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" focusedInstanceHandle "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...focus blur相关")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" effectTag "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nextEffect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("effectTag"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 调用getSnapshotBeforeUpdate")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("effectTag "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" Snapshot"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" NoEffect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("commitBeforeMutationEffectOnFiber")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("current"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" nextEffect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 调度useEffect")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("effectTag "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" Passive"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" NoEffect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("rootDoesHavePassiveEffects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        rootDoesHavePassiveEffects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scheduleCallback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("NormalSchedulerPriority"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("flushPassiveEffects")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n          "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    nextEffect "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nextEffect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("nextEffect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br")])]),t("p",[s._v("整体可以分为三部分：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("处理"),t("code",[s._v("DOM节点")]),s._v("渲染/删除后的 "),t("code",[s._v("autoFocus")]),s._v("、"),t("code",[s._v("blur")]),s._v(" 逻辑。")])]),s._v(" "),t("li",[t("p",[s._v("调用"),t("code",[s._v("getSnapshotBeforeUpdate")]),s._v("生命周期钩子。")])]),s._v(" "),t("li",[t("p",[s._v("调度"),t("code",[s._v("useEffect")]),s._v("。")])])]),s._v(" "),t("p",[s._v("我们讲解下2、3两点。")]),s._v(" "),t("h2",{attrs:{id:"调用getsnapshotbeforeupdate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调用getsnapshotbeforeupdate"}},[s._v("#")]),s._v(" 调用getSnapshotBeforeUpdate")]),s._v(" "),t("p",[t("code",[s._v("commitBeforeMutationEffectOnFiber")]),s._v("是"),t("code",[s._v("commitBeforeMutationLifeCycles")]),s._v("的别名。")]),s._v(" "),t("p",[s._v("在该方法内会调用"),t("code",[s._v("getSnapshotBeforeUpdate")]),s._v("。")]),s._v(" "),t("blockquote",[t("p",[s._v("你可以在"),t("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactFiberCommitWork.old.js#L222",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),t("OutboundLink")],1),s._v("看到这段逻辑")])]),s._v(" "),t("p",[s._v("从"),t("code",[s._v("React")]),s._v("v16开始，"),t("code",[s._v("componentWillXXX")]),s._v("钩子前增加了"),t("code",[s._v("UNSAFE_")]),s._v("前缀。")]),s._v(" "),t("p",[s._v("究其原因，是因为"),t("code",[s._v("Stack Reconciler")]),s._v("重构为"),t("code",[s._v("Fiber Reconciler")]),s._v("后，"),t("code",[s._v("render阶段")]),s._v("的任务可能中断/重新开始，对应的组件在"),t("code",[s._v("render阶段")]),s._v("的生命周期钩子（即"),t("code",[s._v("componentWillXXX")]),s._v("）可能触发多次。")]),s._v(" "),t("p",[s._v("这种行为和"),t("code",[s._v("React")]),s._v("v15不一致，所以标记为"),t("code",[s._v("UNSAFE_")]),s._v("。")]),s._v(" "),t("blockquote",[t("p",[s._v("更详细的解释参照"),t("a",{attrs:{href:"https://juejin.im/post/6847902224287285255#comment",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("为此，"),t("code",[s._v("React")]),s._v("提供了替代的生命周期钩子"),t("code",[s._v("getSnapshotBeforeUpdate")]),s._v("。")]),s._v(" "),t("p",[s._v("我们可以看见，"),t("code",[s._v("getSnapshotBeforeUpdate")]),s._v("是在"),t("code",[s._v("commit阶段")]),s._v("内的"),t("code",[s._v("before mutation阶段")]),s._v("调用的，由于"),t("code",[s._v("commit阶段")]),s._v("是同步的，所以不会遇到多次调用的问题。")]),s._v(" "),t("h2",{attrs:{id:"调度useeffect"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#调度useeffect"}},[s._v("#")]),s._v(" 调度"),t("code",[s._v("useEffect")])]),s._v(" "),t("p",[s._v("在这几行代码内，"),t("code",[s._v("scheduleCallback")]),s._v("方法由"),t("code",[s._v("Scheduler")]),s._v("模块提供，用于以某个优先级异步调度一个回调函数。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 调度useEffect")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("effectTag "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v(" Passive"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!==")]),s._v(" NoEffect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("rootDoesHavePassiveEffects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    rootDoesHavePassiveEffects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scheduleCallback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("NormalSchedulerPriority"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 触发useEffect")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("flushPassiveEffects")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("null")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("在此处，被异步调度的回调函数就是触发"),t("code",[s._v("useEffect")]),s._v("的方法"),t("code",[s._v("flushPassiveEffects")]),s._v("。")]),s._v(" "),t("p",[s._v("我们接下来讨论"),t("code",[s._v("useEffect")]),s._v("如何被异步调度，以及为什么要异步（而不是同步）调度。")]),s._v(" "),t("h3",{attrs:{id:"如何异步调度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何异步调度"}},[s._v("#")]),s._v(" 如何异步调度")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("flushPassiveEffects")]),s._v("方法内部会从全局变量"),t("code",[s._v("rootWithPendingPassiveEffects")]),s._v("获取"),t("code",[s._v("effectList")]),s._v("。")]),s._v(" "),t("p",[s._v("关于"),t("code",[s._v("flushPassiveEffects")]),s._v("的具体讲解参照"),t("RouterLink",{attrs:{to:"/12.React技术揭秘/02.架构篇/hooks/useeffect.html"}},[s._v("useEffect与useLayoutEffect一节")])],1),s._v(" "),t("p",[s._v("在"),t("RouterLink",{attrs:{to:"/12.React技术揭秘/02.架构篇/process/completeWork.html#effectlist"}},[s._v("completeWork一节")]),s._v("我们讲到，"),t("code",[s._v("effectList")]),s._v("中保存了需要执行副作用的"),t("code",[s._v("Fiber节点")]),s._v("。其中副作用包括")],1),s._v(" "),t("ul",[t("li",[s._v("插入"),t("code",[s._v("DOM节点")]),s._v("（Placement）")]),s._v(" "),t("li",[s._v("更新"),t("code",[s._v("DOM节点")]),s._v("（Update）")]),s._v(" "),t("li",[s._v("删除"),t("code",[s._v("DOM节点")]),s._v("（Deletion）")])]),s._v(" "),t("p",[s._v("除此外，当一个"),t("code",[s._v("FunctionComponent")]),s._v("含有"),t("code",[s._v("useEffect")]),s._v("或"),t("code",[s._v("useLayoutEffect")]),s._v("，他对应的"),t("code",[s._v("Fiber节点")]),s._v("也会被赋值"),t("code",[s._v("effectTag")]),s._v("。")]),s._v(" "),t("blockquote",[t("p",[s._v("你可以从"),t("a",{attrs:{href:"https://github.com/facebook/react/blob/1fb18e22ae66fdb1dc127347e169e73948778e5a/packages/react-reconciler/src/ReactHookEffectTags.js",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),t("OutboundLink")],1),s._v("看到"),t("code",[s._v("hook")]),s._v("相关的"),t("code",[s._v("effectTag")])])]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("flushPassiveEffects")]),s._v("方法内部会遍历"),t("code",[s._v("rootWithPendingPassiveEffects")]),s._v("（即"),t("code",[s._v("effectList")]),s._v("）执行"),t("code",[s._v("effect")]),s._v("回调函数。")]),s._v(" "),t("p",[s._v("如果在此时直接执行，"),t("code",[s._v("rootWithPendingPassiveEffects === null")]),s._v("。")]),s._v(" "),t("p",[s._v("那么"),t("code",[s._v("rootWithPendingPassiveEffects")]),s._v("会在何时赋值呢？")]),s._v(" "),t("p",[s._v("在上一节"),t("code",[s._v("layout之后")]),s._v("的代码片段中会根据"),t("code",[s._v("rootDoesHavePassiveEffects === true?")]),s._v("决定是否赋值"),t("code",[s._v("rootWithPendingPassiveEffects")]),s._v("。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" rootDidHavePassiveEffects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" rootDoesHavePassiveEffects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("rootDoesHavePassiveEffects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  rootDoesHavePassiveEffects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  rootWithPendingPassiveEffects "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  pendingPassiveEffectsLanes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" lanes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  pendingPassiveEffectsRenderPriority "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" renderPriorityLevel"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")]),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("所以整个"),t("code",[s._v("useEffect")]),s._v("异步调用分为三步：")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("before mutation阶段")]),s._v("在"),t("code",[s._v("scheduleCallback")]),s._v("中调度"),t("code",[s._v("flushPassiveEffects")])]),s._v(" "),t("li",[t("code",[s._v("layout阶段")]),s._v("之后将"),t("code",[s._v("effectList")]),s._v("赋值给"),t("code",[s._v("rootWithPendingPassiveEffects")])]),s._v(" "),t("li",[t("code",[s._v("scheduleCallback")]),s._v("触发"),t("code",[s._v("flushPassiveEffects")]),s._v("，"),t("code",[s._v("flushPassiveEffects")]),s._v("内部遍历"),t("code",[s._v("rootWithPendingPassiveEffects")])])]),s._v(" "),t("h3",{attrs:{id:"为什么需要异步调用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么需要异步调用"}},[s._v("#")]),s._v(" 为什么需要异步调用")]),s._v(" "),t("p",[s._v("摘录自"),t("code",[s._v("React")]),s._v("文档"),t("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#timing-of-effects",target:"_blank",rel:"noopener noreferrer"}},[s._v("effect 的执行时机"),t("OutboundLink")],1),s._v("：")]),s._v(" "),t("blockquote",[t("p",[s._v("与 componentDidMount、componentDidUpdate 不同的是，在浏览器完成布局与绘制之后，传给 useEffect 的函数会延迟调用。这使得它适用于许多常见的副作用场景，比如设置订阅和事件处理等情况，因此不应在函数中执行阻塞浏览器更新屏幕的操作。")])]),s._v(" "),t("p",[s._v("可见，"),t("code",[s._v("useEffect")]),s._v("异步执行的原因主要是防止同步执行时阻塞浏览器渲染。")]),s._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),t("p",[s._v("经过本节学习，我们知道了在"),t("code",[s._v("before mutation阶段")]),s._v("，会遍历"),t("code",[s._v("effectList")]),s._v("，依次执行：")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("处理"),t("code",[s._v("DOM节点")]),s._v("渲染/删除后的 "),t("code",[s._v("autoFocus")]),s._v("、"),t("code",[s._v("blur")]),s._v("逻辑")])]),s._v(" "),t("li",[t("p",[s._v("调用"),t("code",[s._v("getSnapshotBeforeUpdate")]),s._v("生命周期钩子")])]),s._v(" "),t("li",[t("p",[s._v("调度"),t("code",[s._v("useEffect")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);