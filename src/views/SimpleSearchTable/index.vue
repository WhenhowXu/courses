<template>
  <div class="page-wrapper">
    <HaoTable
      orderable
      :columns="columns"
      :conditions="conditions"
      :dataSource="dataSource"
      :total="total"
      :loading="loading"
      @search="updateConditions"
    ></HaoTable>
  </div>
</template>
<script>
import { HaoTable } from "@/components";
import { fetchList } from "@/api/simpleSearchTable";

const typeSet = [
  "input",
  "select",
  "cascader",
  "datePicker",
  "rangePicker",
  "monthPicker",
  "yearPicker",
];
let dColumns = new Array(100).fill({}).map((v, index) => ({
  title: `列${index}`,
  dataIndex: `l${index}`,
  searchType: typeSet[index],
}));
let columns = [
  { title: "用户名称", dataIndex: "name", searchType: "input" },
  { title: "年龄", dataIndex: "age", searchType: "inputNumberRange" },
  { title: "创建日期", dataIndex: "createTime", searchType: "dataPicker" },
  ...dColumns,
];

export default {
  name: "SimpleSearchTable",
  components: { HaoTable },
  data() {
    return {
      columns,
      conditions: {
        page: 1,
        size: 50,
      },
      dataSource: [],
      total: 0,
      loading: false,
    };
  },
  methods: {
    updateConditions(changeConditions = {}) {
      Object.assign(this.conditions, changeConditions);
      this.loading = true;
      fetchList(this.conditions)
        .then((res) => {
          if (res.status === "success") {
            this.dataSource = res.result.data || [];
            this.total = res.result.total;
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
  mounted() {
    this.updateConditions();
  },
};
</script>
<style lang="less" scoped>
.page-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: lightcyan;
}
</style>
