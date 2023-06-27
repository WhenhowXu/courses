<template>
  <DemoOneChild />
</template>

<script>
import DemoOneChild from "./DemoOneChild.vue";

export default {
  name: "DemoOne",
  provide: { foo: "bar" },
  components: {
    DemoOneChild,
  },
};
</script>
