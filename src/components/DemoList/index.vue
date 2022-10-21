<template>
  <div>
    <div v-for="(demo, index) in demos" :key="demo.key">
      <h3>{{ index + 1 }}、{{ demo.title }}</h3>
      <div class="demo-content-wrapper">
        <slot :name="demo.slotName"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DemoList",
  props: {
    demos: { type: Array, default: ()=>[] }
  },
};
</script>
<style scoped lang="less">
.demo-content-wrapper {
  padding: 24px 48px;
}
</style>
