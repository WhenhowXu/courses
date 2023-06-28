<template>
  <div>
    <a-tabs>
      <a-tab-pane v-for="tab in tabsData" :key="tab.component" :tab="tab.title">
        <component :is="tab.component" />
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import SlotDemoOne from "./SlotDemoOne";
import SlotDemoTwo from "./SlotDemoTwo";
export default {
  name: "SlotDemo",
  components: { SlotDemoOne, SlotDemoTwo },
  data() {
    return {
      tabsData: [
        { title: "默认插槽", component: "SlotDemoOne" },
        { title: "具名插槽", component: "SlotDemoTwo" },
      ],
    };
  },
};
</script>
