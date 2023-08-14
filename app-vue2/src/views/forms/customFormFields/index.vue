<template>
  <div class="app-table-padding-page">
    <a-card title="CUSTOM FORM FIELDS">
      <a-form-model :model="form" :rules="rules" v-bind="formItemLayout">
        <a-form-model-item label="数字范围">
          <hao-number-range v-model="form.numberRange" />
        </a-form-model-item>
        <a-form-model-item label="月份范围">
          <hao-range-month-picker v-model="form.monthRange" />
        </a-form-model-item>
        <a-form-model-item label="年份">
          <hao-year-picker v-model="form.year" />
        </a-form-model-item>
        <a-form-model-item label="月份">
          <a-month-picker v-model="form.month" placeholder="请选择月份" />
        </a-form-model-item>
      </a-form-model>
    </a-card>
  </div>
</template>
<script>
export default {
  name: "CustomFormFields",
  data() {
    return {
      numberRange: [3, 5],
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
      },
      form: {
        numberRange: [3, 5],
        year: "2023",
        month: "",
      },
      rules: {},
    };
  },
};
</script>

<style lang="less" scoped>
.hao-filed-item-card {
  margin-bottom: 12px;
}
</style>
