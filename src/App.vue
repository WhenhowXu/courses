<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <router-view></router-view>
    </a-config-provider>
  </div>
</template>

<script>
import locale from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
  name: "App",
  data() {
    return {
      locale,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.page-wrapper {
  height: calc(100vh - 50px);
}
</style>
