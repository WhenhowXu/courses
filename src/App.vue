<template>
  <div id="app">
    <app-layout>
      <router-view></router-view>
    </app-layout>
  </div>
</template>

<script>
import { AppLayout } from "@/layout";

export default {
  name: "App",
  components: { AppLayout },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
