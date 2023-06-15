<template>
  <app-layout>
    <keep-alive >
      <router-view></router-view>
    </keep-alive>
  </app-layout>
</template>

<script>
import AppLayout from "@/layout";

export default {
  name: "MainPage",
  components: { AppLayout },
};
</script>
