<template>
  <span :class="['toggle-icon-wrapper', fold ? 'fold' : '']">
    <a-icon
      class="sidebar-toggle-icon"
      :type="fold ? 'menu-fold' : 'menu-unfold'"
      @click="toggleFold"
    />
  </span>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "HeaderSideToggle",
  computed: {
    ...mapState({ fold: (state) => state.settings.fold }),
  },
  methods: {
    ...mapMutations({ setFold: "settings/SET_FOLD" }),
    toggleFold() {
      this.setFold(!this.fold);
    },
  },
};
</script>
<style lang="less" scoped>
.toggle-icon-wrapper {
  &.fold {
    margin-left: 12px;
  }
}
.sidebar-toggle-icon {
  font-size: 20px;
}
</style>
