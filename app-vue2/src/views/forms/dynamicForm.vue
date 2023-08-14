<template>
  <div class="dymic-form-page">
    <a-form-model
      ref="formRef"
      class="dymic-form"
      :model="form"
      v-bind="formItemLayout"
    >
      <a-form-model-item
        v-for="(domain, index) in form.domains"
        :key="domain.key"
        :label="'用户' + (index + 1)"
        class="dymic-form-domain"
      >
        <a-row :gutter="24">
          <a-col :span="12">
            <a-form-model-item
              :prop="'domains.' + index + '.name'"
              :rules="rules.name"
            >
              <a-input v-model="domain.name" placeholder="请输入姓名" />
            </a-form-model-item>
          </a-col>
          <a-col :span="12">
            <a-form-model-item
              :prop="'domains.' + index + '.address'"
              :rules="rules.address"
            >
              <a-input v-model="domain.address" placeholder="请输入地址" />
            </a-form-model-item>
          </a-col>
        </a-row>
      </a-form-model-item>
      <a-form-model-item v-bind="formItemLayoutWithOutLabel">
        <a-space>
          <a-button type="dash" icon="plus" @click="handleAddRow"
            >添加一行</a-button
          >
          <a-button type="primary" @click="handleSubmit">提交</a-button>
        </a-space>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
export default {
  name: "DymicForm",
  data() {
    return {
      form: { domains: [{ key: "000", name: "", address: "" }] },
      rules: {
        name: [
          { required: true, message: "姓名为必填项" },
          { max: 20, message: "限制20个字符以内" },
        ],
        address: [{ max: 200, message: "限制200个字符以内" }],
      },
      formItemLayout: { labelCol: { span: 4 }, wrapperCol: { span: 18 } },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          span: 24,
          offset: 4,
        },
      },
    };
  },
  methods: {
    handleAddRow() {
      this.form.domains.push({ key: new Date().getTime() });
    },
    handleSubmit() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          console.log("表单提交参数：", this.form);
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
.dymic-form-page {
  padding: 12px 10%;
  .dymic-form {
    border: 1px solid #ccc;
    padding: 24px;
  }
  .dymic-form-domain {
    margin-bottom: 0;
  }
}
</style>
