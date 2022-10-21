<template>
  <div id="example1">
    <h1>Lorem Ipsum Dolor</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
      nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
    </p>
    <p>
      Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
      suscipit lobortis nisl ut aliquip ex ea commodo consequat.
    </p>
  </div>
</template>
<script>
export default {
  name: "MutiAsBg",
};
</script>
<style lang="less" scoped>
#example1 {
  background-image: url(./images/img_flwr.gif), url(./images/paper.gif);
  background-position: right bottom, left top;
  background-repeat: no-repeat, repeat;
  padding: 15px;
}
</style>
