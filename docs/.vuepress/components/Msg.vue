<template></template>
<script>
export default {
  name: "Msg",
  mounted() {
    let TODO = localStorage.getItem('TODO');
    if (TODO == false || TODO == null) {
      localStorage.setItem('TODO', 'true');
      this.$notification.open({
        message: "AntDocs-Next TODO List (WIP)",
        description: "既然大家那么期待，我就上个开发进度链接啦！不过只是当前开发进度哦~Beta时会有详细的功能开发列表哦！",
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
                click: () =>
                  window.open(
                    "https://web.banlikanban.com/kanban/6086add31e9f89215510571b/"
                  )
              }
            },
            "了解进度"
          );
        },
        key: "egg"
      });
    }
  }
};
</script>
