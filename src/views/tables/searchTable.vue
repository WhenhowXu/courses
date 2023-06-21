// 带搜索表格
<template>
  <div class="search-table-page">
    <hao-search-table rowKey="id" :columns="columns" :loadData="loadData" />
  </div>
</template>
<script>
import { getUsers } from "@/api/tables";

const columns = [
  {
    dataIndex: "userName",
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
    filterConfig: {
      type: "number",
      label: "数字",
    },
  },
  {
    dataIndex: "year",
    title: "年份",
    filterConfig: {
      type: "yearPicker",
      label: "年选择",
      initialValue: "2023",
    },
  },
  {
    dataIndex: "month",
    title: "月份",
    filterConfig: {
      type: "monthPicker",
      label: "月份选择",
    },
  },
  {
    dataIndex: "city",
    title: "城市",
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
];
export default {
  name: "searchTable",
  data() {
    return {
      columns,
    };
  },
  methods: {
    async loadData(params, conditions) {
      console.log(params, conditions);
      let result = {
        total: 0,
        dataSource: [],
      };
      try {
        const res = await getUsers(params);
        result.total = res?.total || 0;
        result.list = res?.list || [];
      } catch (err) {
        console.log(err);
      }
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
