<template>
  <div class="demos-page">
    <header class="demos-header">
      <a-cascader
        :options="typeOptions"
        style="width: 300; height: 32px"
        placeholder="请选择示例"
        v-model="demoIds"
        :show-search="{ filter }"
      />
    </header>

    <div>
      <component :is="demoName"></component>
    </div>
  </div>
</template>
<script>
import { DEMOS, DEMO_COMPONENTS } from "./demos";
export default {
  name: "demosPage",
  components: { ...DEMO_COMPONENTS },
  data() {
    return { typeOptions: DEMOS, demoOptions: [], demoIds: [] };
  },
  computed: {
    demoName() {
      return this.demoIds.join("");
    },
  },
  methods: {
    filter(inputValue, path) {
      return path.some(
        (option) =>
          option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
      );
    },
  },
  created() {
    const demo = DEMOS[0];
    this.demoIds = [demo.value, demo.children[0].value];
  },
};
</script>
<style lang="less">
.demos-page {
  .demos-header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    padding: 0 24px;
  }
  .demo-way-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
