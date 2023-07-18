<template>
  <div class="collapsible-container">
    <div :class="['collapsible-sidebar', show ? '' : 'hidden']">
      <slot name="sidebar">侧边栏</slot>
    </div>
    <div :class="['collapsible-tag-wrapper', show ? '' : 'hidden']">
      <div class="collapsible-tag" @click.stop="show = !show">
        <a-icon :type="show ? 'left' : 'right'"></a-icon>
      </div>
    </div>
    <div :class="['collapsible-main', show ? '' : 'hidden']">
      <slot>主要内容</slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "CollapsibleSidebar",
  props: {
    defaultShow: { type: Boolean, default: true },
  },
  data() {
    return {
      show: this.defaultShow,
    };
  },
};
</script>
<style lang="less" scoped>
.collapsible-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  .collapsible-sidebar {
    background: #fff;
    &.hidden {
      display: none;
    }
  }
  .collapsible-tag-wrapper {
    width: 24px;
    height: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    &:hover {
      .collapsible-tag {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    &.hidden {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  .collapsible-tag {
    width: 20px;
    height: 88px;
    background-color: var(--theme);
    border-radius: 0 8px 8px 0;
    cursor: pointer;
    display: none;
    color: #fff;
  }
  .collapsible-main {
    flex: 1;
    background-color: #fff;
  }
}
</style>
