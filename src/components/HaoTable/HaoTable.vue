<template>
  <div class="hao-table-wrapper" ref="haoSearchTable">
    <hao-search-form
      :configs="searchConfigs"
      :model="conditions"
      @search="handleSearch"
      @reset="handleSearch"
    ></hao-search-form>
    <a-table
      class="hao-table-main"
      :columns="tableColumns"
      :pagination="false"
      :dataSource="dataSource"
      size="small"
      :loading="loading"
      :scroll="{ y: 'calc(100vh - 200px)' }"
    >
      <template slot="order" slot-scope="text, record, index">
        {{ computedOrder(index, conditions.page, conditions.size) }}
      </template>
      <template slot="operations" slot-scope="text, record, index">
        <a type="link" @click="operate(record, index)">删除</a>
      </template>
    </a-table>
    <hao-pagination :total="total" />
  </div>
</template>
<script>
import HaoSearchForm from "./HaoFilters";
import HaoPagination from "./HaoPagination";
function noop() {}
const getOrderColumn = (width = 70) => {
  return {
    title: "序号",
    dataIndex: "$_ORDER",
    fixed: "left",
    scopedSlots: { customRender: "order" },
    width,
  };
};
const HaoTable = {
  name: "HaoTable",
  components: { HaoSearchForm, HaoPagination },
  props: {
    columns: { type: Array, default: () => [] },
    orderable: { type: Boolean, default: false },
    statistical: { type: Boolean, default: false },
    operations: { type: Array, default: () => [] },
    conditions: { type: Object, default: () => ({}) },
    total: { type: Number, default: 0 },
    dataSource: { type: Array, default: () => [] },
    loading: Boolean,
    formatConditions: { type: Function, default: noop },
    loadSource: { type: Function, default: noop },
  },
  data() {
    return {
      loading: false,
      total: 0,
      dataSource: [],
    };
  },
  computed: {
    searchConfigs() {
      return this.columns
        .filter((c) => c.filterConfig)
        .map((v) => {
          return {
            label: v.label || v.title,
            key: v.dataIndex,
            type: v.searchType,
            ...v.filterConfig,
          };
        });
    },
    tableColumns() {
      let _columns = this.columns
        .filter((v) => !v.onlySearch)
        .map((v) => {
          return {
            title: v.title,
            dataIndex: v.dataIndex,
            width: v.width || 100,
            ellipsis: v.ellipsis,
          };
        });

      if (this.orderable) {
        _columns.unshift(getOrderColumn());
      }
      if (this.operations && this.operations.length > 0) {
        _columns.push({
          title: "操作",
          dataIndex: "$_operation",
          fixed: "right",
          scopedSlots: { customRender: "operations" },
        });
      }
      return _columns;
    },
  },
  methods: {
    computedOrder(index, page, size) {
      return (page - 1) * size + index + 1;
    },
    handleSearch(values) {
      this.$emit("search", { ...values, page: 1 });
    },
    operate(record, index) {
      this.$emit("operate", record, index);
    },
    async updateList() {},
  },
};
HaoTable.HaoSearchForm = HaoSearchForm;

export default HaoTable;
</script>
<style lang="less" scoped>
.hao-table-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .hao-table-main {
    margin-top: 12px;
    padding: 12px;
    flex: 1;
    /deep/ .ant-spin-nested-loading {
      height: 100%;
      .ant-spin-container {
        height: 100%;
      }
    }
    /deep/ .ant-table-placeholder {
      position: absolute;
      top: 52px;
      width: 100%;
    }
    /deep/ .ant-table,
    /deep/ .ant-table-content,
    /deep/ .ant-table-body {
      height: 100%;
    }
  }
}
</style>
