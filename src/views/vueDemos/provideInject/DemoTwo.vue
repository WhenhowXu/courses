<template>
  <div>
    <label>父组件：</label><a-input v-model="state" />
    <DemoTwoChild />
  </div>
</template>

<script>
import DemoTwoChild from "./DemoTwoChild.vue";

export default {
  name: "DemoTwo",
  data() {
    return {
      state: 1,
    };
  },
  provide() {
    return { foo: this.state };
  },
  components: {
    DemoTwoChild,
  },
};
</script>
