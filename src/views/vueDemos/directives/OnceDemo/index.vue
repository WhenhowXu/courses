<template>
  <div>
    <h3>只渲染一次，可用作性能优化</h3>
    <a-input v-model="title" />
    <OnceDemoChild :title="title" />
    <OnceDemoChild v-once :title="title" />
  </div>
</template>

<script>
import OnceDemoChild from "./OnceDemoChild.vue";
export default {
  name: "OnceDemo",
  components: { OnceDemoChild },
  data() {
    return {
      title: "初始标题",
    };
  },
};
</script>
