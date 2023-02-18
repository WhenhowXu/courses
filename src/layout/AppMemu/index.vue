<template>
  <div class="app-menu">
    <a-menu
      style="width: 200px"
      :default-selected-keys="['1']"
      :open-keys.sync="openKeys"
      mode="inline"
      @click="handleClick"
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
              path: "t1-01",
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
  methods: {
    handleClick() {},
    titleClick() {},
  },
};
</script>

<style lang="less" scoped>
.app-menu {
  height: 100%;
  background: lightpink;
}
</style>
