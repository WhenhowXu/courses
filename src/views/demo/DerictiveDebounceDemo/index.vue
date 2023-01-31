<template>
  <div class="page-wrapper">
    <h3>1、使用是自定义指令</h3>
    <div>
      <a-button v-debounce="debounceAdd">自定义指令防抖效果</a-button>
      {{ count }}
    </div>
    <h3>2、使用lodash中的工具类来实现</h3>
    <div>
      <a-button @click="debounceClick">lodash防抖</a-button>
      {{ count }}
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import debounce from "lodash/debounce";
export default defineComponent({
  name: "DerictiveDebounceDemo",
  setup() {
    const count = ref(0);
    const debounceAdd = () => {
      count.value++;
    };
    const debounceClick = debounce(() => {
      count.value++;
    }, 300);
    return {
      count,
      debounceAdd,
      debounceClick,
    };
  },
});
</script>
