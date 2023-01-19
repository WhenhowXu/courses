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
    >
      <component
        :is="componentMap[config.type]"
        v-model="$attrs.model[config.key]"
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
import HaoYearPicker from "../HaoFields/HaoYearPicker";

const componentMap = {
  input: "a-input",
  select: "a-select",
  cascader: "a-cascader",
  datePicker: "a-date-picker",
  rangePicker: "a-range-picker",
  yearPicker: "HaoYearPicker",
};
export default {
  components: { HaoYearPicker },
  props: {
    conditions: { type: Object, default: () => ({}) },
    configs: { type: Array, default: () => [] },
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
  .action-form-item {
    flex: 1;
    text-align: right;
  }
}
</style>
