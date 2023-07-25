<template>
  <HaoRangeContainer>
    <a-month-picker
      slot="left"
      v-model="startValue"
      style="width: 100%"
      :placeholder="placeholder[0]"
      :disabledDate="disabledStart"
    />
    <a-month-picker
      slot="right"
      v-model="endValue"
      style="width: 100%"
      :placeholder="placeholder[1]"
      :disabledDate="disabledEnd"
    />
  </HaoRangeContainer>
</template>

<script>
import HaoRangeContainer from "./HaoRangeContainer.vue";

export default {
  name: "HaoRangeMonthPicker",
  components: { HaoRangeContainer },
  data() {
    return {
      open: false,
    };
  },
  props: {
    placeholder: { type: Array, default: () => ["开始月份", "结束月份"] },
    max: Number,
    min: Number,
  },
  model: {
    prop: "value",
    event: "change",
  },
  computed: {
    startValue: {
      get: function () {
        return this.$attrs.value && this.$attrs.value[0];
      },
      set: function (startValue) {
        this.$emit("change", [startValue, undefined]);
      },
    },
    endValue: {
      get: function () {
        return this.$attrs.value && this.$attrs.value[1];
      },
      set: function (endValue) {
        this.$emit("change", [this.startValue, endValue]);
      },
    },
  },
  methods: {
    disabledStart(start) {
      if (this.endValue) {
        return start.startOf("month") > this.endValue.startOf("month");
      } else {
        return false;
      }
    },
    disabledEnd(end) {
      if (this.startValue) {
        return this.startValue.startOf("month") > end.startOf("month");
      } else {
        return false;
      }
    },
  },
};
</script>
