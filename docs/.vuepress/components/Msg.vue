<template></template>
<script>
export default {
  name:"Msg",
  mounted() {
    this.$notification.open({
        message: '嗨！好久不见！',
        description:
          'VuePress 2.0 即将降世，总感觉有什么事情正在发生...',
        icon: <a-icon type="smile" style="color: #108ee9" />,
        duration: 0,
        placement: 'bottomRight',
        btn: h => {
          return h(
            'a-button',
            {
              props: {
                type: 'primary',
                size: 'small',
              },
              on: {
                click: () => window.location.href="/easter-eggs/gtfkNJKr.html",
              },
            },
            '敲彩蛋',
          );
        },
        key: 'egg'
      });
  },
};
</script>