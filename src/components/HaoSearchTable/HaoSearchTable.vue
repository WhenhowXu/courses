<template>
  <div class="hao-search-table-wrapper">
    <div class="hao-search-header">
      <HaoFilters
        :filters="formFilters"
        @init="handleInit"
        @search="handleSearch"
      />
    </div>
    <div class="hao-search-main">
      <a-table
        :loading="loading"
        :columns="tableColumns"
        :dataSource="dataSource"
        size="small"
        v-bind="$attrs"
        v-on="$listeners"
        :pagination="false"
        :scroll="{ y: 500 }"
      ></a-table>
    </div>
    <div class="hao-search-footer">
      <HaoPagination
        v-model="current"
        :pageSize.sync="pageSize"
        :total="total"
        @change="onPageChange"
        @showSizeChange="onSizeChange"
        v-bind="pagination"
      />
    </div>
  </div>
</template>
<script>
import HaoFilters from "./HaoFilters.vue";
import { isFunction } from "@/utils/is";
import HaoPagination from "./HaoPagination.vue";

export default {
  name: "HaoSearchTable",
  components: { HaoFilters, HaoPagination },
  props: {
    filters: { type: Array, default: () => [] },
    columns: { type: Array, default: () => [] },
    loadData: { type: Function, required: true },
    turnConditionsToParams: Function,
    pagination: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      loading: false,
      total: 0,
      dataSource: [],
      current: 1,
      pageSize: 10,
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
      if (isFunction(this.loadData)) {
        let params = isFunction(this.turnConditionsToParams)
          ? this.turnConditionsToParams(changeFilters)
          : { ...changeFilters };
        this.loading = true;
        this.loadData(params)
          .then((res) => {
            this.total = res.total || 0;
            this.dataSource = res.list || [];
          })
          .finally(() => {
            this.loading = false;
          });
      }
    },
    handleSearch() {
      this.updateList();
    },
    handleInit(values) {
      this.updateList(values);
    },
    onPageChange(current) {
      this.current = current;
      this.updateList();
    },
    onSizeChange(_, pageSize) {
      this.pageSize = pageSize;
      this.current = 1;
      this.updateList();
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
    background-color: #fff;
  }
  .hao-search-main {
    margin-top: 12px;
    flex: 1;
    overflow: hidden;
    background-color: #fff;

    & .ant-table-wrapper,
    & .ant-spin-nested-loading {
      height: 100%;
      max-height: 600px;
    }
  }
  .hao-search-footer {
    height: 50px;
  }
}
</style>
