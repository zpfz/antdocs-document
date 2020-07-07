---
title: 在 VuePress-Creator 中使用
---

# 在 VuePress-Creator 中使用

VuePress-Creator 1.x 版本主要是用于快速创建 VuePress 项目（并不是为主题而生），为满足主题生态需要，我们开发了 VuePress-Creator 2.x 版本。关于 VuePress-Creator 1.x 版本，有不少小伙伴反馈 1.x 版本的创建流程太繁琐，所以对脚手架进行了重构，并优化大部分的交互体验。下面就来看看怎么利用 VuePress-Creator 来创建带有 AntDocs 主题的模板吧！

## 全局安装
我们需要在命令行中安装 VuePress-Creator 工具，这里推荐使用 `yarn` 进行全局安装：
```sh
yarn global add vuepress-creator
```
或者如果你只使用 `npm` :
```sh
npm install -g vuepress-creator
```

<a-alert type="warning" showIcon>
  <span slot="message">
    部分用户在 yarn 环境下可能无法正常识别 vuepress-creator 命令，经测试，可通过命令行 yarn global bin 获取 yarn 全局安装包路径，然后添加至系统环境变量中即可解决。
  </span>
</a-alert>

## 创建 VuePress 模板
在命令行窗口输入以下命令开始创建项目：
```sh
vuepress-creator init myproject
```
其中，可以把 `myproject` 替换为你想要的名称。回车后，会跳出一个选项：
```
# 为 VuePress 选择一个主题？ 默认：Default
Pick a theme for VuePress?
> Default
  AntDocs (Ant Design style)
```
选择完毕后，脚手架将自动进行一系列的操作，直到配置完毕。再此期间，请你耐心等待。

### 扩展命令
为了方便直接创建想要的模板，我们还添加了两条命令：
```sh
# 直接创建默认模板
vuepress-creator def myproject

# 直接创建带有 AntDocs 主题的模板
vuepress-creator ads myproject
```
关于 VuePress-Creator 2.x 版本的其他命令，请见 [VuePress-Creator](https://zpfz.github.io/vuepress-creator/zh/guide/guide.html)


## 开发运行
打开已经配置完毕的项目，在命令行窗口输入以下命令：
```sh
yarn dev # 或者：npm run dev
```

## 生产运行
要生成静态的 HTML 文件，运行：
```sh
yarn build # 或者：npm run build
```