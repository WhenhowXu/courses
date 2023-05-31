// 带搜索表格
<template>
  <div>
    <hao-table :columns="columns" @load="loadData" />
  </div>
</template>
<script>
import { getUserList } from "@/api/searchTable";

const columns = [
  {
    dataIndex: "name",
    title: "姓名",
    filterConfig: {
      type: "input",
    },
  },
  {
    dataIndex: "age",
    title: "年龄",
    filterConfig: {
      type: "inputNumber",
    },
  },
  {
    dataIndex: "year",
    title: "年份",
    filterConfig: {
      type: "yearPicker",
    },
  },
  {
    dataIndex: "year",
    title: "月份",
    filterConfig: {
      type: "monthPicker",
    },
  },
  {
    dataIndex: "city",
    title: "城市-选择框",
    filterConfig: {
      type: "select",
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
        const res = await getUserList(params);
        if (res.status === "success") {
          result.total = res.data?.total || 0;
          result.dataSource = res.data?.records || [];
        }
      } catch (err) {
        console.log(err);
      }
      return result;
    },
  },
};
</script>
