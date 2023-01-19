<template>
  <a-layout class="app-container" id="components-layout-demo-custom-trigger">
    <a-layout-header class="app-header">
      <Header />
    </a-layout-header>
    <a-layout>
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
        <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
          <a-menu-item key="1">
            <a-icon type="user" />
            <span>nav 1</span>
          </a-menu-item>
          <a-menu-item key="2">
            <a-icon type="video-camera" />
            <span>nav 2</span>
          </a-menu-item>
          <a-menu-item key="3">
            <a-icon type="upload" />
            <span>nav 3</span>
          </a-menu-item>
        </a-menu>
      </a-layout-sider>
      <a-layout-content>
        <a-layout>
          <a-layout-content><slot></slot></a-layout-content>
          <a-layout-footer>Footer</a-layout-footer>
        </a-layout>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from "./Header";
export default {
  name: "AppLayout",
  components: { Header },
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
  .app-header {
    background-color: lightblue;
  }
}
</style>
