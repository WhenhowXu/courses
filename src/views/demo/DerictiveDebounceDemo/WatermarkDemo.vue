<template>
  <div
    class="watermark-demo"
    v-watermark="{
      text: 'xx有限责任公司',
      textColor: 'rgba(180, 180, 180, 0.4)',
    }"
  ></div>
</template>
<style lang="less" scoped>
.watermark-demo {
  width: 300px;
  height: 500px;
  background-color: lemonchiffon;
}
</style>
