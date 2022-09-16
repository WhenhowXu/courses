<template>
  <div class="AppLayout_wrapper">
    <app-header class="app-header" />
    <main class="app-main">
      <slot></slot>
    </main>
  </div>
</template>

<script>
import AppHeader from "./AppHeader";
export default {
  name: "AppLayout",
  components: { AppHeader },
};
</script>
<style scoped lang="less">
.AppLayout_wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .app-header {
    height: 50px;
    background-color: aqua;
    border-bottom: 1px solid #ccc;
  }
  .app-main {
    height: calc(100% - 50px);
    padding: 24px;
  }
}
</style>
