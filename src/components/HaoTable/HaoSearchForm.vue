<template>
  <a-form-model
    class="hao-search-form"
    :model="$attrs.model"
    :rules="$props.rules"
    layout="inline"
    ref="haoSearchForm"
  >
    <a-form-model-item
      v-for="config in configs"
      :key="config.key"
      :label="config.label"
      :style="{ width: fieldWidth }"
      class="common-form-item"
    >
      <component
        :is="componentMap[config.type]"
        v-model="$attrs.model[config.key]"
        style="width: 100%"
        allowClear
      />
    </a-form-model-item>
    <a-form-model-item class="action-form-item">
      <a-space>
        <a-button type="primary" icon="search" @click="submit">搜索</a-button>
        <a-button icon="sync">重置</a-button>
      </a-space>
    </a-form-model-item>
  </a-form-model>
</template>
<script>
import { HaoYearPicker, HaoMonthPicker } from "../HaoFields";

const componentMap = {
  input: "a-input",
  inputNumber: "a-input-number",
  select: "a-select",
  cascader: "a-cascader",
  datePicker: "a-date-picker",
  rangePicker: "a-range-picker",
  yearPicker: "HaoYearPicker",
  monthPicker: "HaoMonthPicker",
};
export default {
  components: { HaoYearPicker, HaoMonthPicker },
  props: {
    conditions: { type: Object, default: () => ({}) },
    configs: { type: Array, default: () => [] },
    fieldWidth: { type: [Number, String], default: "33.33%" },
    allowClear: { type: Boolean, default: true },
  },
  data() {
    return {
      componentMap,
    };
  },
  methods: {
    submit() {
      this.$refs.haoSearchForm.validate((valid) => {
        if (valid) {
          this.$emit("search", this.conditions);
        }
      });
    },
    reset() {
      this.$refs.haoSearchForm.resetFields();
      this.$emit("reset", this.conditions);
    },
  },
};
</script>
<style lang="less" scoped>
.hao-search-form {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 8px;
  .common-form-item {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    flex: 1;
    text-align: right;
    min-width: 200px;
    /deep/ .ant-form-item-label {
      width: 80px;
    }
  }
}
</style>
