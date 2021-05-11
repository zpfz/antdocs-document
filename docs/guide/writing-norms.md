---
title: 使用规范
---

# 使用规范

为了防止因用户错误配置而带来各种问题，在这里向你建议几点使用规范：

### 1. 导航栏 Link 属性不重复

由于开发时将导航栏的字段 Link 值作为 Key 来判断当前导航菜单，所以在编辑导航菜单时请不要出现重复的 Link 值。

### 2.在每个 .md 文件内头部添加必要的 front matter 信息

我们推荐你在写作前添加必要的 title 信息：
```md
---
title: Example docs
---

...Write your docs next...
```
这样做不仅有助于侧边栏目录名称的生成，还提高了文档命名的自由度。

### ~~3.每个文档写作前请添加 标题~~ <a-tag color="red">已修复</a-tag>

~~为了防止文章因为没有标题而使正文塌陷上去，我们建议你在写作前加上必要的大标题，比如：~~
```md
---
...front matter
---

# Your haedline
```
~~出现这种问题是由于默认主题与 active-header-links 插件设计上的缺陷，直接修改边距会与 active-header-links 插件滚动定位冲突，所以暂时保留默认设置。~~

### 4.不要浪费 VuePress 可直接识别的 README.md 文件。
我们推荐你在所要导航的每个子目录下创建一个 `README.md` 文件，然后把它当成常规的 `.md` 文件进行写作。这样做的目的是防止用户在访问你的网站时，浏览的页面不会变成 404，这对用户有着极好的浏览体验。  

<p align="center"> 

<img src="https://s2.ax1x.com/2020/02/09/1fZzOe.png" alt="1fZzOe.png" border="0" />

</p>

