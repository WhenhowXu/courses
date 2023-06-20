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
    loadData: { type: Function, required: true },
  },
  data() {
    return {
      loading: false,
      dataSource: [],
    };
  },
  computed: {
    formFilters() {
      return this.filters?.length
        ? this.filters
        : this.columns
            .filter((v) => v.filterConfig)
            .map((f) => ({
              label: f.title,
              prop: f.dataIndex || f.key,
              ...f.filterConfig,
            }));
    },
    tableColumns() {
      return this.columns
        .filter((v) => !v.onlyInFilter)
        .map((v) => {
          return { ...v };
        });
    },
  },
  methods: {
    updateList(changeFilters = {}) {
      console.log(changeFilters, "------------changeFilters");
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
    // height: 120px;
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
