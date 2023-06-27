<template>
  <div><label>子组件：</label>{{ foo }}</div>
</template>

<script>
export default {
  name: "DemoTwoChild",
  inject: ["foo"],
};
</script>
