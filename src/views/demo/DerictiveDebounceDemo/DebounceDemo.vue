<template>
  <div>
    <a-button v-debounce="addCount">防抖点击增加数字</a-button>
    <a-button @click="addCount">点击增加数字</a-button>
    <p>count: {{ count }}</p>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const count = ref(0);
    const addCount = () => {
      count.value++;
    };
    return {
      count,
      addCount,
    };
  },
});
</script>
