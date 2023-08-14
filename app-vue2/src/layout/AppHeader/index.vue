<template>
  <div class="app-header">
    <a-space align="center">
      <h3 v-show="!fold" class="app-header-title">{{ title }}</h3>
      <HeaderSideToggle />
    </a-space>
    <a-space class="tool-bar-wrapper">
      <ThemeChanger />
      <FullScreen />
      <HeaderAvatar />
    </a-space>
  </div>
</template>
<script>
import FullScreen from "./FullScreen";
import ThemeChanger from "./ThemeChanger";
import HeaderAvatar from "./HeaderAvatar.vue";
import HeaderSideToggle from "./HeaderSideToggle.vue";
import { mapState } from "vuex";

export default {
  name: "AppHeader",
  components: {
    FullScreen,
    ThemeChanger,
    HeaderAvatar,
    HeaderSideToggle,
  },
  props: {
    title: String,
  },
  computed: {
    ...mapState({ fold: (state) => state.settings.fold }),
  },
};
</script>
<style lang="less" scoped>
.app-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 0 12px;
  .tool-bar-wrapper {
    /deep/ .anticon {
      font-size: 18px;
      color: #fff;
    }
  }
}
</style>
