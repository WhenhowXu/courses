<template>
  <div id="app">
    <a-config-provider :locale="locale">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </a-config-provider>
  </div>
</template>

<script>
import locale from "ant-design-vue/lib/locale-provider/zh_CN";
import { mapState } from "vuex";
import { getLogionElements } from '@/api/plaform';

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
  mounted() {
    getLogionElements().then((res) => {
      console.log(res);
    });
  },
};
</script>

<style></style>
