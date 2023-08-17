<template>
  <a-modal v-model="visible" :title="title" @ok="handleOK">
    <a-form-model
      ref="userFormRef"
      :model="form"
      :rules="rules"
      v-bind="formItemLayout"
    >
      <a-form-model-item label="用户名" prop="username">
        <a-input v-model="form.username" />
      </a-form-model-item>   
    </a-form-model>
  </a-modal>
</template>
<script>
import { createUser, updateUser } from "@/api/user";
export default {
  name: "UserModal",
  data() {
    return {
      visible: false,
      title: "",
      form: {
        username: "",
        company_name: "",
      },
      extraParams: {},
      rules: {
        username: [{ required: true, message: "用户名不能为空" }],
      },
      isEdit: false,
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
      },
    };
  },
  methods: {
    openModal({ isEdit, initialValues, extraParams = {} } = {}) {
      this.form.username = initialValues?.username;
      this.isEdit = isEdit;
      this.extraParams = extraParams;
      this.title = `${isEdit ? "编辑" : "新增"}用户`;
      Object.assign(this.form, initialValues);
      this.visible = true;
    },
    handleOK() {
      this.$refs.userFormRef.validate((valid) => {
        if (valid) {
          if (this.isEdit) {
            updateUser({ ...this.extraParams, ...this.form }).then(() => {
              this.visible = false;
              this.$message.success("保存成功");
              this.$emit("update");
            });
          } else {
            createUser(this.form).then(() => {
              this.visible = false;
              this.$message.success("新增成功");
              this.$emit("update");
            });
          }
        }
      });
    },
  },
};
</script>
