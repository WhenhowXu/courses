<template>
  <a-date-picker
    placeholder="请选择年份"
    v-bind="$attrs"
    v-model="$attrs.value"
    mode="year"
    :open="open"
    @openChange="handleOpenChange"
    @panelChange="handlePanelChange"
    @change="handleChange"
    format="YYYY"
    valueFormat="YYYY"
    :getCalendarContainer="(triggerNode) => triggerNode.parentNode"
  />
</template>

<script>
const formatValue = (value) =>
  value && typeof value.format === "function" ? value.format("YYYY") : value;
export default {
  name: "HaoYearPicker",
  data() {
    return {
      open: false,
    };
  },
  model: {
    prop: "value",
    event: "change",
  },
  methods: {
    handleOpenChange(status) {
      this.open = status;
    },
    handlePanelChange(value) {
      this.$emit("change", formatValue(value));
      this.open = false;
    },
    handleChange(date) {
      this.$emit("change", formatValue(date));
    },
  },
};
</script>
