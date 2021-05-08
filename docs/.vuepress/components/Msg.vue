<template></template>
<script>
export default {
  name: "Msg",
  mounted() {
    let readkey = localStorage.getItem('v1.3.2');
    if (readkey == false || readkey == null) {
      localStorage.setItem('v1.3.2', 'true');
      this.$notification.open({
        message: "AntDocs v1.3.2 重磅更新",
        description: "本次更新优化以及修复之前遗留的诸多BUG，该版本使用体验相对之前提升了一个档次哈，强烈建议大家更新到该版本哦！",
        icon: <a-icon type="fire" style="color: #ec4708" />,
        duration: 0,
        placement: "bottomRight",
        btn: h => {
          return h(
            "a-button",
            {
              props: {
                type: "primary",
                size: "small"
              },
              on: {
                click: () => window.location.href="/guide/changelog.html"
              }
            },
            "查看更新"
          );
        },
        key: "v1.3.2"
      });
    }
  }
};
</script>
