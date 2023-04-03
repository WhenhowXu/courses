<template>
  <div class="app-side-menu">
    <a-menu
      style="width: 200px"
      :default-selected-keys="['1']"
      :open-keys.sync="openKeys"
      mode="inline"
      :theme="menuThemeKey"
      @select="handleSelect"
    >
      <template v-for="item in menuData">
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
import { mapGetters } from "vuex";

export default {
  name: "AppMenu",
  data() {
    return {
      menuData: [
        {
          name: "Tables",
          icon: "table",
          path: "table",
          children: [
            {
              name: "表格1",
              icon: "table",
              path: "/tables/test01",
              templatePath: "tables/test01",
            },
            {
              name: "表格2",
              icon: "table",
              path: "/tables/test02",
              templatePath: "tables/test02",
            },
          ],
        },
        {
          name: "Forms",
          icon: "form",
          path: "form",
          children: [
            {
              name: "表格1",
              icon: "table",
              path: "t1-01",
            },
          ],
        },
        {
          name: "VueDirectives",
          icon: "table",
          path: "vueDirectives",
          children: [
            { name: "防抖", path: "t1-01" },
            { name: "水印", path: "t1-01" },
          ],
        },
      ],
      openKeys: [],
    };
  },
  computed: {
    ...mapGetters("settings", ["menuThemeKey"]),
  },
  methods: {
    handleSelect({ key, keyPath }) {
      console.log(key, keyPath);
      this.$router.push(key);
    },
    titleClick() {},
  },
};
</script>

<style lang="less" scoped>
.app-side-menu {
  height: 100%;
}
</style>
