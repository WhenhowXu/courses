<template>
  <div class="page-wrapper">
    <HaoTable
      orderable
      :columns="columns"
      :conditions="conditions"
      :dataSource="dataSource"
      :total="total"
      :loading="loading"
      :operations="operations"
      @search="updateConditions" 
    ></HaoTable>
  </div>
</template>
<script>
import { fetchList } from "@/api/simpleSearchTable";

let columns = [
  { title: "用户名称", dataIndex: "name", searchType: "input", ellipsis: true },
  { title: "年龄", dataIndex: "age", searchType: "inputNumber" },
  { title: "创建时间", dataIndex: "createTime", searchLabel:'创建日期', searchType: "datePicker", width: 160 },
  { title: "出生年份", dataIndex: "bothYear", searchType: "yearPicker" },
  { title: "出生月份", dataIndex: "bothMonth", searchType: "monthPicker" },
  { title: "所在城市", dataIndex: "city", searchType: "select" },
];

export default {
  name: "SimpleSearchTable",
  data() {
    return {
      columns,
      conditions: {
        page: 1,
        size: 50,
      },
      dataSource: [],
      operations: [
        { name: "删除", key: "delete" },
        { name: "编辑", key: "edit" },
        { name: "详情", key: "detail" },
      ],
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

