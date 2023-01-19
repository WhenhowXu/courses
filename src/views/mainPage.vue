<template>
  <a-config-provider :locale="zhCN">
    <app-layout>
      <a-input-search slot="extra"/>
      <router-view></router-view>
    </app-layout>
  </a-config-provider>
</template>

<script>
import AppLayout from "@/layout/AppLayout.vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";

export default {
  name: "MainPage",
  components: {
    AppLayout,
  },
  data() {
    return {
      zhCN,
    };
  },
};
</script>
