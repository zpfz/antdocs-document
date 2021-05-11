module.exports = {
  title: "AntDocs",
  theme: "antdocs",
  description: "一款 Ant Design 设计风格的 VuePress 主题",
  // base: "/",
  // dest: 'public',
  head: [
    ["link", { rel: "icon", href: "/assets/logo.png" }],
    ["script", { type: "text/javascript", src: "/assets/js/push.js" }],

    ["meta", { name: "referrer", content: "never" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "antdocs,antdeisgn,vuepress,vuepress-theme,theme,ant,docs,antd,antdocs of vuepress,主题,vuepress主题,antd设计,blog,vuepress-blog"
      }
    ]
  ],
  plugins: {
    sitemap: {
      hostname: "https://antdocs.vercel.app/"
    }
  },
  markdown: {
    lineNumbers: false,
    anchor: {
      permalinkBefore: false
    }
  },
  themeConfig: {
    backToTop: true,
    smoothScroll: true,
    logo: "/assets/logo.png",
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    sidebarDepth: 0,
    lastUpdated: "上次更新",
    repo: "https://github.com/zpfz/vuepress-theme-antdocs",
    editLinks: false,
    ads: {
      style: 2,
      image: "https://www.rainyun.com/img/rainyun.png",
      text: "免费又稳定，签到换延期，来试试雨云主机...",
      link: "http://redirect.rainyun.cn/?ref=11126",
      items: [
        {
          text:
            "点击链接快来和我一起加入语雀文档，体验全新知识创作，让你的协作更高效！",
          image: "https://s1.ax1x.com/2020/04/06/GsL0Z6.md.png",
          link:
            "https://www.yuque.com/register?invite_token=f44225123bcab02038f11cc0a7ab720cb9016a02bec6a30f5e10994a9946152a"
        },
        {
          text: "免费又稳定，签到换延期，来试试雨云主机吧！",
          image: "https://s1.ax1x.com/2020/04/06/GsvilQ.md.png",
          link: "http://redirect.rainyun.cn/?ref=11126"
        }
      ]
    }
  },
  // configureWebpack: (config, isServer) => {
  //   // config.entry = glob.sync("./dist/*.js");
  //   if (!isServer) {
  //     config.output = {
  //       libraryTarget: "commonjs2",
  //       path: path.resolve(__dirname, "dist"),
  //       filename: "bundle.js"
  //     };
  //   }
  // }
};
