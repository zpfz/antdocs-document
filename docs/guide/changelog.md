---
title: 更新日志
---

# 更新日志

<p></p> 

<template>
  <a-timeline>
    <a-timeline-item>
      v1.4.2
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="purple">修复</a-tag> 删除无关的样式文件<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v1.4.1
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="purple">修复</a-tag> 修复 SSR 渲染导致提示 localStorage is not defined 的BUG<br/>
        &emsp;- <a-tag color="purple">修复</a-tag> 修复 右侧边栏按钮折叠时显示异常的BUG<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v1.4.0
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="orange">新增</a-tag> 新增右侧边栏<br/>
        &emsp;- <a-tag color="orange">新增</a-tag> 新增暗黑模式切换按钮 <a-tag color="cyan">实验性功能</a-tag><br/>
        &emsp;- <a-tag color="green">优化</a-tag> 优化调整调整导航栏选中的效果 (<a href="https://github.com/zpfz/vuepress-theme-antdocs/issues/40" target="_blank">#40</a>)<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 删除 Footer 无用属性 footerColumn<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 首页按钮字段更改为 actions，详情见（待补充）<a-tag color="red">破坏性更新</a-tag><br/>
        &emsp;- <a-tag color="green">优化</a-tag> 优化其他视觉细节效果<br/>
        &emsp;- <a-tag color="purple">修复</a-tag> 修复返回顶部动画延迟的BUG<br/>
        &emsp;- <a-tag color="purple">修复</a-tag> 修复广告栏未开启仍渲染 DOM 的BUG<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v1.3.5
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 优化首页配置缺少 actionBtn/preactionBtn 配置时提示 'link' of undefined 的错误 (<a href="https://github.com/zpfz/vuepress-theme-antdocs/issues/33" target="_blank">#33</a>)<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v1.3.4
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 优化调整 Last Updated 在移动端无侧边栏时的位置<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v1.3.3
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 优化调整 Last Updated 在 PC 端无侧边栏时的位置<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 修改无侧边栏内容区默认宽度为 960px<br/>
        &emsp;- <a-tag color="purple">修复</a-tag> 修复代码行号颜色显示和错位问题 (<a href="https://github.com/zpfz/vuepress-theme-antdocs/issues/31" target="_blank">#31</a>)
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v1.3.2
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 丰富首页主要和次要按钮的配置，使配置更加自由 (<a href="https://github.com/zpfz/vuepress-theme-antdocs/issues/26" target="_blank">#26</a>) <a-tag color="red">破坏性更新</a-tag><br/>
        &emsp;- <a-tag color="green">优化</a-tag> 优化单页面 ( 无侧边栏 ) 的适应宽度 (<a href="https://github.com/zpfz/vuepress-theme-antdocs/issues/21" target="_blank">#21</a>)<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 优化广告组件类名，降低被插件屏蔽的几率
 (<a href="https://github.com/zpfz/vuepress-theme-antdocs/issues/19" target="_blank">#19</a>)<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 优化代码块主题颜色<br/>
        &emsp;- <a-tag color="purple">修复</a-tag> 修复因升级 core-js 库而导致各种的报错
 (<a href="https://github.com/zpfz/vuepress-theme-antdocs/issues/5" target="_blank">#5</a>)<br/>
        &emsp;- <a-tag color="purple">修复</a-tag> 修复文档无 h1 标题导致塌陷的BUG
 (<a href="https://github.com/zpfz/vuepress-theme-antdocs/issues/25" target="_blank">#25</a>)<br/>
         &emsp;- <a-tag color="purple">修复</a-tag> 修复没有侧边栏内容仍显示侧边栏的BUG <a-tag color="red">破坏性更新</a-tag><br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v1.2.2
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 页脚支持渲染 html 代码 ( 可用于实现备案号等 )<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 更改依赖版本号至最新版本<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v1.2.0
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="orange">新增</a-tag> 新增多语言设置<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v1.1.1
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 优化侧边栏标题过长时鼠标悬停的显示效果<br/>
        &emsp;- <a-tag color="purple">修复</a-tag> 修复移动端侧边栏按钮展开状态显示异常的BUG<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v1.1.0
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="orange">新增</a-tag> 新增 Repo 状态图标<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 更改依赖版本号至最新版本<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v1.0.1
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="purple">修复</a-tag> 修复代码块显示 css/cpp/c 语言标识异常的BUG<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 优化其他细节<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v1.0.0
      <a-tag color="green">正式版</a-tag>
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="orange">新增</a-tag> 添加侧边栏广告位，支持三种显示状态 ( 图片、图文、招待显示 )<br/>
        &emsp;- <a-tag color="orange">新增</a-tag> 新增首页次级按钮，即首页按钮最大支持数为 2 个<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 优化返回顶部按钮可自定义开启<br/>
        &emsp;- <a-tag color="purple">修复</a-tag> 修复导航栏因 title 过长而显示异常的BUG<br/>
        &emsp;- <a-tag color="purple">修复</a-tag> 修复其他可能存在问题的BUG<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v0.1.2
      <a-tag color="blue">公测版</a-tag>
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="purple">修复</a-tag> 修复导航栏菜单在某些情况未能正确激活当前菜单项的问题<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v0.1.1
      <a-tag color="blue">公测版</a-tag>
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 优化移动端侧边栏显示效果<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 优化移动端搜索和菜单图标显示效果<br/>
      </p>
    </a-timeline-item>
    <a-timeline-item>
      v0.1.0
      <a-tag color="blue">公测版</a-tag>
      <p>
        更新内容：<br/>
        &emsp;- <a-tag color="orange">新增</a-tag> 搭载 Ant Design 组件，在 .md 中直接使用 <br/>
        &emsp;- <a-tag color="orange">新增</a-tag> 添加底部栏，最大支持 4 个栏目数<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 统一预处理器，使用兼容 Ant Design 样式的 Less 语法<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 优化内置的提示、警告、危险块的显示效果<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 优化代码块、行内代码、Blockquote等显示效果<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 优化首页、导航菜单、Github徽标、侧边栏等显示效果<br/>
        &emsp;- <a-tag color="green">优化</a-tag> 优化移动端显示以及动画效果<br/>
        &emsp;- <a-tag color="purple">修复</a-tag> 修复其他可能存在问题的BUG<br/>
      </p>
    </a-timeline-item>
  </a-timeline>
</template>