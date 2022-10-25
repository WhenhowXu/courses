<template>
  <div class="rhomboild-transform" :style="style"></div>
</template>
<script>
import { grahMixins } from "./minxins";

export default {
  name: "CssRhomboild",
  mixins: [ grahMixins ],
  computed:{
    style(){
      return `background-color: ${this.resultColor}`;
    }
  }
}; 
</script>
<style scoped lang="less">
.rhomboild-transform {
  width: 120px;
  height: 80px;
  transform: skew(30deg);
}
</style>
