<template>
  <!-- <a-tooltip :title="title" placement="bottomRight"> -->
    <a-icon :type="iconType" @click="toogleFullScreen" />
  <!-- </a-tooltip> -->
</template>

<script>
import screenFull from "screenfull";

export default {
  data() {
    return {
      isFullScreen: false,
    };
  },
  computed: {
    iconType() {
      return this.isFullScreen ? "fullscreen-exit" : "fullscreen";
    },
    title() {
      return this.isFullScreen ? "退出全屏" : "全屏";
    },
  },
  methods: {
    toogleFullScreen() {
      if (screenFull.isEnabled) {
        screenFull.toggle().then(() => {
          this.isFullScreen = !this.isFullScreen;
        });
      }
    },
  },
};
</script>
