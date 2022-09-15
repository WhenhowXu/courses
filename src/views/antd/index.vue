<template>
  <div>
    <a-select
      style="width: 260px"
      :options="options"
      placeholder="请搜索或选择示例"
      show-search
      v-model="demoType"
    />
    <div>
      <component :is="demoType" />
    </div>
  </div>
</template>
<script>
import { DATA } from "./constants";
import demos from "./Demos";

export default {
  name: "VuePage",
  components: { ...demos },
  data() {
    return {
      demoType: DATA[0].id,
      options: DATA.map((v) => ({ label: v.title, value: v.id })),
    };
  },
};
</script>
