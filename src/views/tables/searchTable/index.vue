// 带搜索表格
<template>
  <div class="search-table-page">
    <hao-search-table
      rowKey="id"
      :columns="columns"
      :loadData="loadData"
      :turnConditionsToParams="turnConditionsToParams"
    />
  </div>
</template>
<script>
import { getUserList } from "./mock";

const columns = [
  {
    dataIndex: "userName",
    width: 120,
    title: "姓名",
    filterConfig: {
      type: "input",
      label: "输入框",
      initialValue: "张三",
    },
  },
  {
    dataIndex: "age",
    title: "年龄",
    width: 100,
    filterConfig: {
      type: "number",
      label: "数字",
    },
  },
  {
    dataIndex: "year",
    title: "年份",
    width: 100,
    filterConfig: {
      type: "yearPicker",
      label: "年选择",
      initialValue: "2023",
    },
  },
  {
    dataIndex: "month",
    title: "月份",
    width: 100,
    filterConfig: {
      type: "monthPicker",
      label: "月份选择",
    },
  },
  {
    dataIndex: "city",
    title: "城市",
    width: 100,
    filterConfig: {
      type: "select",
      label: "城市选择框",
      initialValue: "01",
      options: [
        { label: "北京", value: "01" },
        { label: "武汉", value: "02" },
      ],
    },
  },
  {
    title: "备注",
    dataIndex: "remark",
    width: 140,
    ellipsis: true,
  },
  {
    title: "操作",
    dataIndex: "actions",
    width: 120,
    scopedSlots: { customRender: "actions" },
  },
];
export default {
  name: "searchTable",
  data() {
    return {
      columns,
    };
  },
  methods: {
    turnConditionsToParams(conditions) {
      return {
        pageSize: conditions.pageSize,
      };
    },
    async loadData(params) {
      let result = {
        total: 0,
        dataSource: [],
      };
      const res = await getUserList(params);
      result.total = res?.data?.total || 0;
      result.list = res?.data?.records || [];
      return result;
    },
  },
};
</script>
<style lang="less" scoped>
.search-table-page {
  height: 100%;
}
</style>
