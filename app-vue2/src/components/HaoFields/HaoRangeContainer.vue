<template>
  <div class="hao-range-container">
    <div class="hao-range-item"><slot name="left"></slot></div>
    <div class="hao-range-separator">
      <slot name="separator"><span class="separator">~</span></slot>
    </div>
    <div class="hao-range-item"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: "HaoRangeContainer",
  props: {},
};
</script>
<style lang="less" scoped>
.hao-range-container {
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  .hao-range-item {
    flex: 1;
  }
  .hao-range-separator {
    flex: 36px 0 0;
    text-align: center;
  }
}
</style>
