<template>
  <div class="form-model-demo-wrapper">
    <a-form-model :model="settings" v-bind="formItemLayout">
      <a-form-model-item label="布局" prop="layout">
        <a-radio-group
          v-model="settings.layout"
          :options="layoutOptions"
          buttonStyle="solid"
        />
      </a-form-model-item>
    </a-form-model>
    <a-divider></a-divider>
    <a-form-model
      :model="formData"
      v-bind="formItemLayout"
      :rules="rules"
      :layout="settings.layout"
      :size="settings.size"
    >
      <a-form-model-item label="输入框" prop="inputValue1">
        <a-input placeholder="请输入" v-model.trim="formData.inputValue1" />
      </a-form-model-item>
      <a-form-model-item label="选择框" prop="selectValue1">
        <a-select placeholder="请选择" v-model="formData.selectValue1" />
      </a-form-model-item>
      <div class="footer-button-wrapper">
        <a-button type="primary">确定</a-button>
      </div>
    </a-form-model>
  </div>
</template>
<script>
export default {
  name: "FormModelDemo",
  prop: {
    getEchoValues: Function | Object,
  },
  computed: {
    formName: "formModelDemo",
    formItemLayout() {
      return this.settings.layout === "horizontal"
        ? {
            wrapperCol: { span: 20 },
            labelCol: { span: 4 },
          }
        : {};
    },
  },
  data() {
    return {
      layoutOptions: Object.freeze([
        { label: "水平", value: "horizontal" },
        { label: "垂直", value: "vertical" },
        { label: "行内", value: "inline" },
      ]),
      formData: {
        inputValue1: undefined,
        selectValue1: undefined,
      },
      settings: {
        size: undefined,
        layout: "horizontal",
      },
      rules: {},
    };
  },
};
</script>
<style lang="less" scoped>
.form-model-demo-wrapper {
  padding: 24px 40px;
  .footer-button-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
  }
}
</style>
