<template>
  <div>
    <label>父组件：</label><a-input v-model="state" />
    <DemoThreeChild />
  </div>
</template>

<script>
import DemoThreeChild from "./DemoThreeChild.vue";

export default {
  name: "DemoTwo",
  data() {
    return {
      state: 1,
    };
  },
  provide() {
    return { foo: this };
  },
  components: {
    DemoThreeChild,
  },
};
</script>
