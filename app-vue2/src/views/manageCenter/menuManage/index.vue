// 带搜索表格
<template>
  <div class="search-table-page">
    <hao-search-table
      ref="searchTableRef"
      rowKey="id"
      hideFilters
      hideToggle
      enableOrder
      :orderColumn="{ width: 100 }"
      :columns="columns"
      :loadData="loadData"
      :turnConditionsToParams="turnConditionsToParams"
      :titleProps="{ title: '菜单列表' }"
    >
      <template v-slot:titleActions>
        <a-button icon="plus" @click="openAddModal">新增</a-button>
      </template>
      <template v-slot:actions="slotProps">
        <a-space>
          <hao-link-button
            :loading="slotProps.record['DELETE_LOADING']"
            :onClick="handleDelete.bind(this, slotProps)"
            >新增</hao-link-button
          >
          <hao-link-button :onClick="openEditModal.bind(this, slotProps)"
            >编辑</hao-link-button
          >
          <hao-link-button :onClick="openDetailModal.bind(this, slotProps)"
            >详情</hao-link-button
          >
        </a-space>
      </template>
    </hao-search-table>
    <UserModal ref="userModalRef" @update="handleUpdate" />
  </div>
</template>
<script>
import { fetchUsers, deleteUser } from "@/api/user";
import UserModal from "./UserModal.vue";
const columns = [
  {
    dataIndex: "pageName",
    width: 120,
    title: "页面名称",
    filterConfig: {
      type: "input",
    },
  },
  { title: "图标", dataIndex: "icon", width: 100 },
  {
    dataIndex: "path",
    width: 120,
    title: "路径",
  },
  {
    dataIndex: "template",
    width: 120,
    title: "模板",
  },
  {
    dataIndex: "createTime",
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
  { title: "启用状态", dataIndex: "active", width: 100 },
  {
    title: "操作",
    dataIndex: "actions",
    width: 120,
    scopedSlots: { customRender: "actions" },
  },
];
export default {
  name: "searchTable",
  components: { UserModal },
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
        list: [],
      };
      const res = await fetchUsers(params);
      result.total = res.total;
      result.list = res.data;
      return result;
    },
    openDetailModal(record) {
      console.log(record);
    },
    openAddModal() {
      this.$refs.userModalRef?.openModal?.({ isEdit: false });
    },
    openEditModal({ record }) {
      this.$refs.userModalRef?.openModal?.({
        isEdit: true,
        initialValues: { username: record.username },
        extraParams: record,
      });
    },
    handleDelete({ record }) {
      this.$set(record, "DELETE_LOADING", true);
      deleteUser(record.user_id)
        .then(() => {
          this.$message.success("删除成功");
          this.handleUpdate();
        })
        .finally(() => {
          this.$set(record, "DELETE_LOADING", false);
        });
    },
    handleUpdate() {
      this.$refs.searchTableRef.updateList();
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
