<template>
  <div class="rhomboild-transform" :style="style"></div>
</template>
<script>
import { grahMixins } from "./minxins";
export default {
  name: "CssTriangle",
  mixins: [grahMixins],
  computed: {
    style(){
      return `border-left-color: ${this.resultColor}; border-bottom-color: ${this.resultColor}; `
    }
  }
};
</script>
<style scoped lang="less">
.rhomboild-transform {
  width: 0;
  height: 0;
  border: 60px solid transparent;
}
</style>
