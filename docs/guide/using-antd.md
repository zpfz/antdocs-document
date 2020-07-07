---
title: 在 Markdown 中使用 Antd
---

# 在 Markdown 中使用 Antd
由于主题已经搭载了 Ant Design Vue 组件，你可以直接在 .md 文档写入想要使用的组件。比如向文档添加一个按钮：
```md
<a-button type="primary">我就是你们要找的按钮</a-button>
```
渲染效果如下：  

<a-button type="primary">我就是你们要找的按钮</a-button>  

<p></p>

再或者添加各种基本组件：
```md
<a-checkbox checked>Checkbox</a-checkbox>
<a-input placeholder="Basic usage" />
<a-radio checked>Radio</a-radio>
<a-rate :defaultValue="4.5" allowHalf />
```
渲染效果如下： 

<a-checkbox checked>Checkbox</a-checkbox>  
<p></p>
<a-input placeholder="Basic usage" />   
<p></p>
<a-radio checked>Radio</a-radio> 
<p></p>
<a-rate :defaultValue="4.5" allowHalf />
