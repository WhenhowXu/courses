<template>
  <a-space>
    <div class="graph-wrapper" v-for="graph in graphs" :key="graph.component">
      <component :is="graph.component" />
    </div>
  </a-space>
</template>
<script>
import DemoList from "@/components/DemoList";
import Rhomboild from "./Rhomboild.vue";
import Triangle from "./Triangle.vue";

export default {
  name: "CssGraphs",
  components: {
    DemoList,
    Rhomboild,
    Triangle,
  },
  data() {
    return {
      graphs: [
        {
          title: "三角形",
          component: "Triangle",
          keyswords: ["border"],
          color: ''
        },
        {
          title: "平行四边形",
          component: "Rhomboild",
          keyswords: ["tansform"],
        },
      ],
    };
  },
};
</script>
<style scoped lang="less">
.graph-wrapper {
  padding: 12px;
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>
