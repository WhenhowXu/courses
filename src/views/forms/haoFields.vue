<template>
  <div class="app-table-padding-page">
    <h3>基于ant design vue 1.7.8自定义表单</h3>
    <div class="hao-filed-item-card">
      <div>1、数字范围选择 {{ numberRange }}</div>
      <hao-number-range v-model="numberRange" />
    </div>
    <div>
      <div>2、年份选择 {{ year }}</div>
      <hao-year-picker v-model="year" />
    </div>
  </div>
</template>
<script>
import HaoYearPicker from "@/components/HaoFields/HaoYearPicker.vue";
export default {
  components: { HaoYearPicker },
  name: "HaoFiledsPage",
  data() {
    return {
      numberRange: [3, 5],
      year: "2023",
    };
  },
};
</script>

<style lang="less" scoped>
.hao-filed-item-card {
  margin-bottom: 12px;
}
</style>
