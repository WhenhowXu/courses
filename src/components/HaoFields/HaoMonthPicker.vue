<template>
  <a-date-picker
    placeholder="请选择月份"
    v-bind="$attrs"
    v-model="$attrs.value"
    mode="month"
    :open="open"
    @openChange="handleOpenChange"
    @panelChange="handlePanelChange"
    @change="handleChange"
    format="YYYY-MM"
    valueFormat="YYYY-MM"
    :getCalendarContainer="(triggerNode) => triggerNode.parentNode"
  />
</template>

<script>
const formatValue = (value) =>
  value && typeof value.format === "function" ? value.format("YYYY-MM") : value;
export default {
  name: "HaoMonthPicker",
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
