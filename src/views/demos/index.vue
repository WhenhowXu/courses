<template>
  <div>
    <test-demo />
    <test-demo1 />
  </div>
</template>
<script>
import TestDemo from "./TestDemo.vue";
import TestDemo1 from "./TestDemo1.vue";
export default {
  components: { TestDemo, TestDemo1 },
  name: "DemoListPage",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>
