<template>
  <a-button
    :class="['hao-link-button']"
    :loading="loading"
    size="small"
    @click="handleClick"
    ><slot></slot
  ></a-button>
</template>
<script>
import { isPromise, isFunction } from "@/utils/is";
export default {
  name: "HaoLinkButton",
  props: {
    disabled: { type: Boolean, default: false },
    icon: { type: String, default: "" },
    onlyShowIcon: { type: Boolean, default: false },
    onClick: Function,
  },
  data() {
    return { loading: false };
  },
  methods: {
    handleClick() {
      if (isFunction(this.onClick)) {
        const p = this.onClick();
        if (isPromise(p)) {
          this.loading = true;
          p.finally(() => {
            this.loading = false;
          });
        }
      }
    },
  },
};
</script>
<style lang="less" scoped>
.hao-link-button {
  cursor: pointer;
  color: #1890ff;
}
</style>
