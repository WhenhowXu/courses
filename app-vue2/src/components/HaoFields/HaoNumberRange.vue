<template>
  <HaoRangeContainer>
    <a-input-number
      slot="left"
      v-model="startValue"
      :placeholder="placeholder[0]"
      style="width: 100%"
    />
    <a-input-number
      slot="right"
      v-model="endValue"
      :placeholder="placeholder[1]"
      style="width: 100%"
    />
  </HaoRangeContainer>
</template>
<script>
import HaoRangeContainer from "./HaoRangeContainer.vue";
export default {
  name: "HaoNumberRange",
  components: { HaoRangeContainer },
  props: {
    placeholder: { type: Array, default: () => ["开始数值", "结束数值"] },
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
};
</script>
<style lang="less" scoped>
.range-number-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  .ant-input-number {
    flex: 1;
  }
}
</style>
