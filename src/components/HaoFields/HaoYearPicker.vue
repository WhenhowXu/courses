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
    formatYear(value){
      return value && typeof value.format === "function" ? value.format("YYYY") : value;
    },
    handleOpenChange(status) {
      this.open = status;
    },
    handlePanelChange(value) {
      this.$emit("change", this.formatYear(value));
      this.open = false;
    },
    handleChange(date) {
      this.$emit("change", this.formatYear(date));
    },
  },
};
</script>
