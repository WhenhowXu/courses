<template>
  <div class="app-table-padding-page">
    <a-form-model :model="formData" ref="tableFormRef">
      <a-table :columns="columns" :dataSource="formData.dataSource">
        <a-form-model-item
          slot="userName"
          slot-scope="text, record, index"
          :prop="'dataSource.' + index + '.userName'"
          :rules="rules.userName"
          class="form-model-item-in-table"
        >
          <a-input v-model="record.userName" placeholder="请输入用户名" />
        </a-form-model-item>
        <a-form-model-item
          slot="age"
          slot-scope="text, record, index"
          :prop="'dataSource.' + index + '.age'"
          class="form-model-item-in-table"
        >
          <a-input-number
            v-model="record.age"
            :min="0"
            style="width: 100%"
            placeholder="请输入年龄"
          />
        </a-form-model-item>
        <a-form-model-item
          slot="class"
          slot-scope="text, record, index"
          :prop="'dataSource.' + index + '.class'"
          class="form-model-item-in-table"
        >
          <a-input v-model="record.class" placeholder="请输入班级" />
        </a-form-model-item>
        <a-space slot="actions" slot-scope="text, record">
          <a-button
            type="link"
            icon="delete"
            @click="handleDelete(record)"
          ></a-button>
        </a-space>
        <a-space slot="footer">
          <a-button icon="plus" @click="handleAdd">添加一行数据</a-button>
          <a-button type="primary" @click="handleSubmit">提交</a-button>
        </a-space>
      </a-table>
    </a-form-model>
  </div>
</template>
<script>
const columns = [
  {
    title: "用户名",
    dateIndex: "userName",
    scopedSlots: { customRender: "userName" },
    width: "35%",
  },
  {
    title: "年龄",
    dateIndex: "age",
    scopedSlots: { customRender: "age" },
    width: "30%",
  },
  {
    title: "班级",
    dateIndex: "class",
    scopedSlots: { customRender: "class" },
  },
  {
    title: "操作",
    dataIndex: "actions",
    scopedSlots: {
      customRender: "actions",
    },
    width: 100,
  },
];
export default {
  name: "FormInTablePage",
  data() {
    return {
      columns,
      formData: { dataSource: [] },
      rules: {
        userName: [
          { required: true, message: "用户名为必填项" },
          { max: 20, message: "限制20个字符以内" },
        ],
      },
    };
  },
  methods: {
    handleAdd() {
      this.formData.dataSource.push({});
    },

    handleSubmit() {
      this.$refs.tableFormRef.validate((valid) => {
        if (valid) {
          console.log("页面提交数据：", this.formData);
        }
      });
    },

    handleDelete(record) {
      this.formData.dataSource = this.formData.dataSource.filter(
        (v) => v !== record
      );
    },
  },
};
</script>
<style lang="less" scoped>
.form-model-item-in-table {
  margin-bottom: 0;
}
</style>
