// 带搜索表格
<template>
  <div class="search-table-page">
    <hao-search-table
      rowKey="id"
      enableOrder
      :orderColumn="{ width: 100 }"
      :columns="columns"
      :loadData="loadData"
      :turnConditionsToParams="turnConditionsToParams"
    >
      <template v-slot:actions="slotProps">
        <a-space>
          <hao-link-button :onClick="handleEdit.bind(this, slotProps)"
            >删除</hao-link-button
          >
          <hao-link-button :onClick="openDetailModal.bind(this, slotProps)"
            >详情</hao-link-button
          >
        </a-space>
      </template>
    </hao-search-table>
  </div>
</template>
<script>
import { fetchUsers } from "@/api/user";

const columns = [
  {
    dataIndex: "username",
    width: 120,
    title: "用户名",
    filterConfig: {
      type: "input",
    },
  },
  {
    dataIndex: "depend",
    width: 120,
    title: "公司",
  },
  {
    dataIndex: "create_time",
    title: "创建日期",
    width: 100,
    filterConfig: {
      type: "rangePicker",
    },
  },
  {
    dataIndex: "update_time",
    title: "更新日期",
    width: 100,
    filterConfig: {
      type: "rangePicker",
    },
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
      const data = await fetchUsers(params);
      result.total = data.length || 0;
      result.list = data;
      return result;
    },
    openDetailModal(record) {
      console.log(record);
    },
    handleEdit() {
      return new Promise((resolve) => {
        let timer = setTimeout(() => {
          resolve();
          this.$message.success("删除成功");
          clearTimeout(timer);
        }, 2000);
      });
    },
  },
};
</script>
<style lang="less" scoped>
.search-table-page {
  height: 100%;
}
</style>
