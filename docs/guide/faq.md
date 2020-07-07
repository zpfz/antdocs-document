---
title: 常见问题
---

# 常见问题

以下整理了一些常见的问题和官方答复，在提问之前建议找找有没有类似的问题。  
<a-collapse :bordered="false" class="faq-collapse-margin">
  <template v-slot:expandIcon="props">
    <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
  </template>
  <a-collapse-panel header="为什么按照官方配置了主题，仍然运行不了？提示 Cannot find moudle '@SearchBox'？" key="1" class="faq-collapse">
    <p>该问题的引起可能是由于你的项目没有局部安装 VuePress，直接使用了全局 VuePress 会引起该问题。考虑到用户 VuePress 使用版本不一致以及兼容性，主题默认不再安装 VuePress 依赖，所以使用前请给你的项目安装上 VuePress。（见 <a href="https://github.com/zpfz/vuepress-theme-antdocs/issues/1" target="_blank">#1<OutboundLink /></a>）<a href="https://s2.ax1x.com/2020/03/07/3vAGtO.png" target="_blank">附图<OutboundLink /></a></p> 
  </a-collapse-panel>
  <a-collapse-panel header="为什么按照官方配置了主题，仍然运行不了？提示 Cannot find moudle 'core-js/...'？" key="2" class="faq-collapse">  
    <p>先利用 npm uninstall 或 yarn remove 依赖卸载命令将主题卸载，然后再尝试安装最新版本的主题。如果仍然出错，请将 node_module 删除后重新安装最新版本的主题。<a href="https://s2.ax1x.com/2020/03/07/3vA8AK.jpg" target="_blank">附图<OutboundLink /></a></p> 
  </a-collapse-panel>
  <a-collapse-panel header="可以同时使用 Less 和 Stylus 预处理器嘛？" key="3" class="faq-collapse">
    <p>可以，但不推荐。一来 Less 变量无法直接在 Stylus 上使用，二来还需要安装 Stylus 预处理器，这会让你的 node_modules 变得臃肿。</p>
  </a-collapse-panel>
  <a-collapse-panel header="可以提供 Sass/Stylus 等格式的样式文件吗？" key="4" class="faq-collapse">
    <p>不会提供，但是你可以使用工具（请自行 Google）将 Less 转换成 Sass/Stylus 等。</p>
  </a-collapse-panel>
  <a-collapse-panel header="使用多语言时出现各种错误？是 BUG 嘛？" key="5" class="faq-collapse">
    <p>不是 BUG，我们在修改默认主题时已经移除多语言功能，所以暂时不支持，在未来是否有可能添加上去需要进一步商榷，同时也欢迎广大好友 <a href="https://github.com/zpfz/vuepress-theme-antdocs/pulls" target="_blank">Pull Request<OutboundLink /></a>。（作者处于毕业季，需要处理各种事情，所以比较繁忙...）</p>
  </a-collapse-panel>
  <a-collapse-panel header="为什么开启了 lastUpdated 功能，文档底部还是没有显示信息？" key="6" class="faq-collapse">
    <p>lastUpdated 是基于每个文件最后一次 git 提交的 UNIX 时间戳(ms)，意味着你的项目应该是基于 git 的项目，它才能正常显示时间。   </p>
  </a-collapse-panel>
</a-collapse>

<style>
  .faq-collapse-margin{
    margin-top: .625rem;
  }
  .faq-collapse{
    background: #f7f7f7;
    border-radius: 4px;
    margin-bottom: 24px;
    border: 0 !important;
    overflow: hidden;
  }
</style>  