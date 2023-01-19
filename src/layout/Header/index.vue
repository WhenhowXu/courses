<template>
  <div class="AppHeader_Wrapper">
    <h3>{{ title }}</h3>
    <a-space>
      <slot></slot>
      <full-screen />
    </a-space>
  </div>
</template>
<script>
import FullScreen from "./FullScreen";

export default {
  name: "AppHeader",
  components: {
    FullScreen,
  },
  props: {
    title: String,
  },
};
</script>
<style>
.AppHeader_Wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}
</style>
