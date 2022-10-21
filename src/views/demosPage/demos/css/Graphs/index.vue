<template>
  <demo-list :demos="list">
    <rhomboild slot="Rhomboild" />
    <triangle slot="Triangle" />
  </demo-list>
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
      list: [
        {
          title: "三角形",
          key: "1",
          slotName: "Triangle",
          keyswords: ["border"],
        },
        {
          title: "平行四边形",
          key: "2",
          slotName: "Rhomboild",
          keyswords: ["tansform"],
        },
      ],
    };
  },
};
</script>
<style scoped lang="less">
.demo-content-wrapper {
  padding: 24px 48px;
}
</style>
