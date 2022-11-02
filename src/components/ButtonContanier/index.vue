<template>
  <a-space
    class="ButtonContanier_Wrapper"
    v-bind="$attrs"
    :style="`justify-content: ${justContent}`"
  >
    <slot></slot>
  </a-space>
</template>
<script>
export default {
  name: "ButtonContanier",
  props: {
    justContent: { type: String, default: "flex-end" },
  },
};
</script>
<style scoped lang="less">
.ButtonContanier_Wrapper {
  width: 100%;
}
</style>
