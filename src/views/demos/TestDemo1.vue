<template>
  <test-demo v-bind="$attrs" v-on="$listeners" />
</template>
<script>
import TestDemo from "./TestDemo";
export default {
  name: "TestDemo1",
  components: { TestDemo },
  data() {
    return {
      name: "TestDemo1",
    };
  },
};
</script>
