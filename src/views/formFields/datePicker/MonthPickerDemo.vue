<template>
  <div>
    <label>月份范围选择：</label>
    <a-month-picker
      placeholder="开始月份"
      v-model="startMonth"
      :disabledDate="disabledStartMonth"
    />
    ~
    <a-month-picker
      placeholder="结束月份"
      v-model="endMonth"
      :disabledDate="disabledEndMonth"
    />
  </div>
</template>
<script>
export default {
  name: "MonthPickerDemo",
  data() {
    return {
      startMonth: null,
      endMonth: null,
    };
  },
  methods: {
    disabledStartMonth(start) {
      return this.endMonth
        ? this.endMonth.startOf("month") < start.startOf("month")
        : false;
    },
    disabledEndMonth(end) {
      return this.startMonth
        ? end.startOf("month") < this.startMonth.startOf("month")
        : false;
    },
  },
};
</script>
