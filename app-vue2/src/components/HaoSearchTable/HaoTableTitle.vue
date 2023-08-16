<template>
  <div class="hao-table-title">
    <h3>{{ title }}</h3>
    <a-space>
      <slot name="titleActions"></slot>
    </a-space>
  </div>
</template>
<script>
export default {
  name: "HaoTableTitle",
  props: {
    title: { type: String, default: "" },
    actions: { type: Array, default: () => [] },
  },
};
</script>
<style lang="less" scoped>
.hao-table-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
}
</style>
