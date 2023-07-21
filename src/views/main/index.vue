<template>
  <app-layout>
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key"></router-view>
    </transition>
  </app-layout>
</template>

<script>
import AppLayout from "@/layout";

export default {
  name: "MainPage",
  components: { AppLayout },
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>
