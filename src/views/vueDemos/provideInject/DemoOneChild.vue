<template>
  <div>{{ foo }}</div>
</template>

<script>
export default {
  name: "DemoOneChild",
  data() {
    return { foo: "test" };
  },
  inject: ["foo"],
};
</script>
