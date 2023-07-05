<template>
  <div>
    <h3>1、全局过滤器</h3>
    <p>{{ number1 | numberFormat(2) }}</p>
    <p>{{ number2 | numberFormat(4) }}</p>
    <h3>2、组件内过滤器</h3>
    <p>{{ "张三" | emptyFormat }}</p>
    <p>{{ undefined | emptyFormat }}</p>
    <p>{{ "李四" | undefinedFormat | emptyFormat }}</p>
  </div>
</template>
<script>
export default {
  name: "FilterDemoPage",
  filters: {
    emptyFormat(text) {
      return text ?? "--";
    },
    undefinedFormat() {
      return undefined;
    },
  },
  data() {
    return {
      number1: 1000,
      number2: "9001.99055",
    };
  },
};
</script>
