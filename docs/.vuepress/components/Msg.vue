<template></template>
<script>
export default {
  name: "Msg",
  mounted() {
    let readkey = localStorage.getItem('20220329');
    if (readkey == false || readkey == null) {
      localStorage.setItem('20220329', 'true');
      this.$notification.open({
        message: "AntDocs官网地址更新通知",
        description: "由于近期 CloudFlare 服务出现波动，计划将 antdocs.vercel.app 作为文档主题主域名，而 antdocs.pages.dev 作为备用域名，给大家带来不便敬请谅解！",
        icon: <a-icon type="exclamation-circle" style="color: #1890ff" />,
        duration: 0,
        placement: "bottomRight",
        // btn: h => {
        //   return h(
        //     "a-button",
        //     {
        //       props: {
        //         type: "primary",
        //         size: "small"
        //       },
        //       on: {
        //         click: () => window.location.href="/guide/changelog.html"
        //       }
        //     },
        //     "查看更新"
        //   );
        // },
        key: "20220329"
      });
    }
  }
};
</script>
