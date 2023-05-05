<template>
  <a-form-model
    class="hao-search-form"
    :model="$attrs.model"
    :rules="$props.rules"
    layout="inline"
    ref="haoSearchForm"
  >
    <a-form-model-item
      v-for="(config, index) in configs"
      :key="config.key"
      :label="config.label"
      class="common-form-item"
      v-show="collapsible ? index + 1 <= hideBoundary || unfold : true"
    >
      <component
        :is="componentMap[config.type]"
        v-model="$attrs.model[config.key]"
        allowClear
        style="width: 100%; min-width: 200px"
        v-bind="getFieldProps(config)"
      />
    </a-form-model-item>
    <a-form-model-item class="common-form-item action-form-item">
      <a-space>
        <a-button
          :icon="unfold ? 'up' : 'down'"
          type="link"
          v-if="collapsible"
          @click="toggleUnfold"
        >
          {{ unfold ? "收起" : "展开" }}
        </a-button>
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
  name: "HaoFilters",
  components: { HaoYearPicker, HaoMonthPicker },
  props: {
    conditions: { type: Object, default: () => ({}) },
    configs: { type: Array, default: () => [] },
    fieldWidth: { type: [Number, String], default: "25%" },
    allowClear: { type: Boolean, default: true },
    collapsible: { type: Boolean, default: true }, // 是否可收起
    hideBoundary: { type: Number, default: 2 },
  },
  data() {
    return {
      componentMap,
      unfold: true, // true为全部展开
    };
  },
  methods: {
    getFieldProps(f) {
      switch (f.type) {
        case "select":
          return { options: f.options };
      }
      return {};
    },
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
    toggleUnfold() {
      this.unfold = !this.unfold;
    },
  },
};
</script>
<style lang="less" scoped>
.hao-search-form {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 8px;
  .common-form-item {
    // /deep/ .ant-form-item-label {
    //   width: 80px;
    // }
  }
  .action-form-item {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
