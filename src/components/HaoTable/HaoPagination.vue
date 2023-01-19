<template>
  <div class="hao-pagination">
    <a-pagination v-bind="$attrs" />
  </div>
</template>
<script>
export default {
  name: "HaoPagination",
};
</script>
<style lang="less" scoped>
.hao-pagination {
  height: 60px;
  padding: 0 8px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: lightblue;
}
</style>
