<template>
  <div class="DynamicModelForm_Wrapper">
    <h3>班级学生</h3>
    <a-form-model :ref="formName" :model="formData">
      <a-form-model-item
        v-for="(domain, index) in formData.domains"
        :key="domain.key"
        :label="'学生' + (index + 1)"
        prop="domains"
        v-bind="domainItemLayout"
        style="margin-bottom: 0"
      >
        <a-row :gutter="4">
          <a-col :span="11">
            <a-form-model-item
              :prop="'domains.' + index + '.name'"
              :rules="rules.name"
            >
              <a-input v-model="domain.name" placeholder="请输入姓名" />
            </a-form-model-item>
          </a-col>
          <a-col :span="11">
            <a-form-model-item
              :prop="'domains.' + index + '.age'"
              :rules="rules.age"
            >
              <a-input v-model="domain.age" placeholder="请输入年龄" />
            </a-form-model-item>
          </a-col>
          <a-col :span="2">
            <a-button
              v-if="formData.domains.length > 1"
              icon="minus"
              shape="circle"
              @click="deleteDomain(domain)"
            />
          </a-col>
          <a-col :span="22">
            <a-form-model-item :prop="'domains.' + index + '.remark'">
              <a-textarea
                :rows="3"
                v-model="domain.remark"
                placeholder="请输入备注"
              />
            </a-form-model-item>
          </a-col>
        </a-row>
      </a-form-model-item>
      <a-form-model-item v-bind="formItemLayoutWithOutLabel">
        <a-button
          type="dashed"
          icon="plus"
          style="width: 60%"
          @click="addDomain"
        >
          新增
        </a-button>
      </a-form-model-item>
      <a-form-model-item v-bind="formItemLayoutWithOutLabel">
        <a-space :gutter="4">
          <a-button @click="handleReset">重置</a-button>
          <a-button type="primary" @click="handleSubmit">提交</a-button>
        </a-space>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  name: "DynamicModelForm",
  data() {
    return {
      formName: "dynamicModelForm",
      formData: {
        domains: [{ key: Date.now() }],
      },
      domainItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
      },
      fieldItemLayout: {
        wrapperCol: {
          span: 22,
        },
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 4 },
        },
      },
      rules: {
        name: [{ required: true, message: "请输入姓名" }],
        age: [{ required: true, message: "请输入年龄" }],
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$refs[this.formName].validate((valid) => {
        if (valid) {
          console.log(this.formData);
        }
      });
    },
    handleReset() {
      this.$refs[this.formName].resetFields();
    },
    deleteDomain(domain) {
      const index = this.formData.domains.indexOf(domain);
      if (index !== -1) {
        this.formData.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.formData.domains.push({
        key: Date.now(),
      });
    },
  },
};
</script>
<style scoped lang="less">
.DynamicModelForm_Wrapper {
  width: 600px;
}
</style>
