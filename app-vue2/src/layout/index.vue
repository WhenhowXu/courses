<template>
  <div class="app-container">
    <AppHeader title="VUE2 DEMOS" />
    <div class="app-main">
      <AppMenu />
      <div class="app-content">
        <MenuTabs />
        <div class="app-tab-page" style="flex: 1">
          <transition name="fade-transform" mode="out-in">
            <router-view />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./AppHeader";
import AppMenu from "./AppMenu";
import MenuTabs from "./MenuTabs";

export default {
  name: "AppLayout",
  components: { AppHeader, AppMenu, MenuTabs },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style scoped lang="less">
.app-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  .app-main {
    flex: 1;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    .app-content {
      display: flex;
      flex-direction: column;
      flex: 1;
    }
  }
}
</style>
