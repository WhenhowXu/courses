<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <router-view></router-view>
    </a-config-provider>
  </div>
</template>

<script>
import locale from "ant-design-vue/lib/locale-provider/zh_CN";
import { mapState } from "vuex";

export default {
  name: "App",
  data() {
    return {
      locale,
    };
  },
  computed: {
    ...mapState(["themeKey"]),
  },
  watch: {
    themeKey(themeKey, oldThemeKey) {
      if (themeKey === oldThemeKey) return;
      require(`@/styles/themes/${themeKey}.less`);
    },
  },
};
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  height: 100%;
}
.page-contianer {
  height: 100%;
}
</style>
