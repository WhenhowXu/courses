<template>
  <div class="hao-search-table-wrapper">
    <div class="hao-search-header">
      <HaoFilters :filters="formFilters" />
    </div>
    <div class="hao-search-main">
      <a-table :columns="tableColumns"></a-table>
    </div>
    <div class="hao-search-footer"></div>
  </div>
</template>
<script>
import HaoFilters from "./HaoFilters.vue";
export default {
  name: "HaoSearchTable",
  components: { HaoFilters },
  props: {
    filters: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] },
  },
  computed: {
    formFilters() {
      return [
        { type: "input", prop: "userName", label: "用户名" },
        { type: "number", prop: "number1", label: "数字输入框1" },
        { type: "select", prop: "select1", label: "选择框1" },
        { type: "cascader", prop: "cascader1", label: "级联选择框1" },
        { type: "year", prop: "year1", label: "年份选择1" },
      ];
    },
    tableColumns() {
      return [];
    },
  },
};
</script>
<style lang="less" scoped>
.hao-search-table-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  .hao-search-header {
    height: 120px;
    // background-color: lightcoral;
  }
  .hao-search-main {
    margin: 12px 0;
    flex: 1;
    // background-color: lawngreen;
  }
  .hao-search-footer {
    height: 50px;
    // background-color: lightcoral;
  }
}
</style>
