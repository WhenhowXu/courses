<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script>
export default {
  name: "HIcon",
  props: {
    name: { type: String, required: true },
    className: String,
  },
  computed: {
    iconName() {
      return `#icon-${this.name}`;
    },
    svgClass() {
      return this.className ? "svg-icon " + this.className : "svg-icon";
    },
  },
};
</script>
<style lang="less" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  margin-right: 4px;
  fill: currentColor;
  overflow: hidden;
}
</style>
>
