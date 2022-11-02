<template>
  <div>
    <demo-part v-for="item in dataSource" :key="item.id" :demoData="item" />
  </div>
</template>

<script>
import { DEMOS } from "./constants";
import DemoPart from "./DemoPart.vue";

export default {
  name: "DemoListPage",
  components: {
    DemoPart,
  },
  data() {
    return {
      dataSource: DEMOS,
    };
  },
};
</script>
