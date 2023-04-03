<template>
  <div class="app-header">
    <h3 class="app-header-title">{{ title }}</h3>
    <a-space class="tool-bar-wrapper">
      <theme-changer/>
      <full-screen />
    </a-space>
  </div>
</template>
<script>
import FullScreen from "./FullScreen";
import ThemeChanger from "./ThemeChanger";

export default {
  name: "AppHeader",
  components: {
    FullScreen,
    ThemeChanger,
  },
  props: {
    title: String,
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
