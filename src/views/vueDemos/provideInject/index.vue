<template>
  <div>
    <h3>1、简单值的传递</h3>
    <DemoOne />
    <h3>2、传递的数值不是响应式的</h3>
    <DemoTwo />
    <h3>3、传递的this保证数据响应式的</h3>
    <DemoThree />
  </div>
</template>
<script>
import DemoOne from "./DemoOne.vue";
import DemoTwo from "./DemoTwo.vue";
import DemoThree from "./DemoThree.vue";

export default {
  name: "ProvideInjectPage",
  components: { DemoOne, DemoTwo,DemoThree },
};
</script>
