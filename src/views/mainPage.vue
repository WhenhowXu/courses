<template>
  <app-layout>
    <router-view></router-view>
  </app-layout>
</template>

<script>
import AppLayout from "@/layout/AppLayout.vue";
export default {
  name: "MainPage",
  components: {
    AppLayout,
  },
};
</script>
