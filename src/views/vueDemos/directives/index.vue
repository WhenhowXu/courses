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
import OnceDemo from "./OnceDemo";

export default {
  name: "DirectivesPage",
  components: { OnceDemo },
  data() {
    return {
      tabsData: [
        { title: "v-once", component: "OnceDemo" },
        { title: "具名插槽", component: "OnceDemo2" },
      ],
    };
  },
};
</script>
