<template></template>
<script>
export default {
  name: "Msg",
  mounted() {
    let readkey = localStorage.getItem('20210512');
    if (readkey == false || readkey == null) {
      localStorage.setItem('20210512', 'true');
      this.$notification.open({
        message: "AntDocs官网地址更新通知",
        description: "原文档地址 antdocs.seeyoz.cn 即将弃用，目前已启用 antdocs.vercel.app 域名作为 AntDocs 官网地址，请大家及时保存最新官网链接哦！",
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
        key: "20210512"
      });
    }
  }
};
</script>
