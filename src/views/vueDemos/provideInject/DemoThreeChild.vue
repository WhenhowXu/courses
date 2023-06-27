<template>
  <div><label>子组件：</label>{{ foo.state }}</div>
</template>

<script>
export default {
  name: "DemoThreeChild",
  inject: ["foo"],
};
</script>
