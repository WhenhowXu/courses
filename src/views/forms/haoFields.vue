<template>
  <div>
    <h3>基于ant design vue 1.7.8自定义表单</h3>
    <div>数字范围选择</div>
    <hao-number-range
      v-model="numberRange"
      :placeholder="['开始数值', '截止数值']"
    />
  </div>
</template>
<script>
export default {
  name: "HaoFiledsPage",
  data() {
    return {
      numberRange: [3, 5],
    };
  },
};
</script>
