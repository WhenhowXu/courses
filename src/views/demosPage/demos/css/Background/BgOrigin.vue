<template>
  <div class="bg-origin-wrapper">
    <div class="bg-origin-box padding-box">TEST</div>
    <div class="bg-origin-box border-box">TEST</div>
    <div class="bg-origin-box content-box">TEST</div>
  </div>
</template>

<style lang="less" scoped>
.bg-origin-wrapper {
  display: flex;
  flex-direction: row;
  border: 1px solid red;
}
.bg-origin-box {
  margin: 30px;
  padding: 40px;
  width: 300px;
  height: 300px;
  border: 5px solid rgba(200, 200, 200, 0.1);
  background-image: url("./images/img_flwr.gif");
  background-position: left;
  background-repeat: no-repeat;
  &.padding-box {
    background-origin: padding-box;
  }
  &.border-box {
    background-origin: border-box;
  }
  &.content-box {
    background-origin: content-box;
  }
}
</style>
