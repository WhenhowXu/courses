<template>
  <app-layout>
    <router-view></router-view>
  </app-layout>
</template>

<script>
import AppLayout from "@/layout";

export default {
  name: "MainPage",
  components: { AppLayout },
};
</script>
