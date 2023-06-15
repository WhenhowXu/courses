<template>
  <div class="app-side-menu">
    <a-menu
      style="width: 200px"
      :selectedKeys.sync="selectedKeys"
      :openKeys.sync="openKeys"
      mode="inline"
      :theme="menuThemeKey"
      @select="handleSelect"
    >
      <template v-for="item in menus">
        <a-sub-menu
          v-if="item.children && item.children.length"
          :key="item.path"
          @titleClick="titleClick"
        >
          <span slot="title">
            <a-icon v-if="item.icon" :type="item.icon" />
            <span>{{ item.name }}</span>
          </span>
          <a-menu-item v-for="mItem in item.children" :key="mItem.path"
            ><a-icon :type="mItem.icon" /> {{ mItem.name }}
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item v-else :key="item.path">
          <a-icon :type="item.icon" />
          {{ item.name }}
        </a-menu-item>
      </template>
    </a-menu>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  name: "AppMenu",
  data() {
    return {
      openKeys: [],
      selectedKeys: [],
    };
  },

  computed: {
    ...mapGetters("settings", ["menuThemeKey"]),
    ...mapState(["menus", "menusMap"]),
  },
  methods: {
    getOpenKeys(key, menusMap) {
      let keys = [];
      function findPath(key, keys) {
        const p = menusMap[key];
        if (p && p.parentPath) {
          keys.push(p.parentPath);
          findPath(p.parentPath, keys);
        }
      }
      findPath(key, keys);
      return keys;
    },
    handleRouteChange() {
      const { path } = this.$route;
      this.selectedKeys = [path];
      this.openKeys = this.getOpenKeys(path, this.menusMap);
    },
    handleSelect({ key }) {
      this.$router.push(key);
    },
    titleClick() {},
  },
  watch: {
    $route: {
      handler: function () {
        this.handleRouteChange();
      },
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
.app-side-menu {
  height: 100%;
}
</style>
