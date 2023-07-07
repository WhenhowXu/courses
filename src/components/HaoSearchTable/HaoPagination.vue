<template>
  <div class="hao-pagination-wrapper">
    <a-pagination v-bind="$attrs" v-on="$listeners"></a-pagination>
  </div>
</template>
<script>
export default {
  name: "HaoPagination",
};
</script>
<style lang="less" scoped>
.hao-pagination-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
}
</style>
