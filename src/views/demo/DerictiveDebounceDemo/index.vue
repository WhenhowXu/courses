<template>
  <div class="page-wrapper">
    <div v-for="(demo, index) in demos" :key="index">
      <h3>{{ index + 1 }}、{{ demo.name }}</h3>
      <component :is="demo.component" />
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import DebounceDemo from "./DebounceDemo";
import CopyDemo from "./CopyDemo";
import WatermarkDemo from "./WatermarkDemo";

export default defineComponent({
  name: "DerictiveDebounceDemo",
  components: {
    DebounceDemo,
    CopyDemo,
    WatermarkDemo,
  },
  setup() {
    const demos = [
      { name: "防抖", component: "DebounceDemo" },
      { name: "复制", component: "CopyDemo" },
      { name: "水印", component: "WatermarkDemo" },
    ];
    return {
      demos,
    };
  },
});
</script>
