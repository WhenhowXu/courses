<template>
  <a-form-model class="hao-filters-wrapper" ref="formRef" :model="model">
    <a-row type="flex">
      <template v-for="(filter, index) in filters">
        <a-col
          v-show="folded ? index <= maxShowIndex : true"
          :key="index"
          :span="filter.span || 6"
        >
          <a-form-model-item :label="filter.label" v-bind="formItemLayout">
            <a-input
              v-if="filter.type === 'input'"
              v-model="model[filter.prop]"
            />
            <a-input-number
              v-else-if="filter.type === 'number'"
              style="width: 100%"
              v-model="model[filter.prop]"
            />
            <a-select
              v-else-if="filter.type === 'select'"
              v-model="model[filter.prop]"
              :options="optionsMap[filter.prop]"
            />
            <a-cascader
              v-else-if="filter.type === 'cascader'"
              v-model="model[filter.prop]"
            />
            <HaoYearPicker
              v-else-if="filter.type === 'yearPicker'"
              style="width: 100%"
              v-model="model[filter.prop]"
            />
            <a-month-picker
              v-else-if="filter.type === 'monthPicker'"
              style="width: 100%"
              v-model="model[filter.prop]"
            />
          </a-form-model-item>
        </a-col>
      </template>
      <a-col flex="1" align="middle" justify="end" style="text-align: right">
        <a-space>
          <a-button type="primary" @click="handleSearch">查询</a-button>
          <a-button @click="handleReset">重置</a-button>
          <a-button
            type="link"
            :icon="folded ? 'down' : 'up'"
            @click="folded = !folded"
            >{{ folded ? "展开" : "收起" }}</a-button
          >
        </a-space>
      </a-col>
    </a-row>
  </a-form-model>
</template>
<script>
import HaoYearPicker from "../HaoFields/HaoYearPicker.vue";
import { toTranslateLabels } from "./_utils";

export default {
  name: "HaoFilters",
  components: { HaoYearPicker },
  props: {
    filters: { type: Array, default: () => [] },
  },
  data() {
    return {
      folded: false,
      maxShowIndex: 2,
      formItemLayout: { labelCol: { span: 6 }, wrapperCol: { span: 18 } },
      model: {},
      optionsMap: {},
      optionsLabelMap: {},
      initialValues: {},
    };
  },
  methods: {
    setOptionsMap() {},
    handleSearch() {},
    handleReset() {},
    init() {
      const _initialPromises = [],
        _initialValues = {},
        optionsLabelsMap = {},
        _optionsPromises = [];
      this.filters.forEach((f) => {
        if (typeof f.initialValue === "function") {
          let p = f.initialValue();
          p.then((v) => {
            _initialValues[f.prop] = v;
            this.$set(this.model, f.prop, v);
          });
          _initialPromises.push(p);
        } else {
          _initialValues[f.prop] = f.initialValue;
          this.$set(this.model, f.prop, f.initialValue);
        }

        if (typeof f.options === "function") {
          let optionP = f.options();
          optionP.then((options) => {
            this.$set(this.optionsMap, [f.prop], options);
            optionsLabelsMap[f.prop] = toTranslateLabels(options);
          });
          _optionsPromises.push(optionP);
        } else {
          this.$set(this.optionsMap, [f.prop], f.options);
          optionsLabelsMap[f.prop] = toTranslateLabels(f.options);
        }
      });
      Promise.all(_initialPromises).then(() => {
        this.$emit("init", this.model);
        this.initialValues = _initialValues;
      });
      Promise.all(_optionsPromises).then(() => {
        this.optionsLabelMap = optionsLabelsMap;
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>
<style lang="less" scoped>
.hao-filters-wrapper {
  padding: 12px;
}
</style>
