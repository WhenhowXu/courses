<template>
  <div>
    <a-input-number v-model="form.a" @change="onAChange" />
    <a-input-number v-model="form.b" @change="onBChange" />
    <h3>decimal.js计算结果</h3>
    <div>{{ result }}</div>
    <h3>javascript计算结果</h3>
    <div>{{ result1 }}</div>
  </div>
</template>
<script>
import { Decimal } from "decimal.js";

export default {
  name: "TestDemo",
  data() {
    return {
      name: "TEST_DEMO",
      form: {
        a: undefined,
        b: undefined,
      },
      result1: undefined,
      result: undefined,
    };
  },
  methods: {
    caculateResult(a, b) {
      return new Decimal(a).minus(new Decimal(b));
    },
    onAChange(v) {
      this.result = this.caculateResult(v, this.form.b);
      this.result1 = v - this.form.b;
    },
    onBChange(v) {
      this.result = this.caculateResult(this.form.a, v);
      this.result1 = this.form.a - v;
    },
  },
};
</script>
