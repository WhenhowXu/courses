<template>
  <div class="app-menu">
    <a-menu>
      <template v-for="item in menuInfo.menuList">
        <a-menu-item
          v-if="!item.children || !item.children.length"
          :key="item.key"
        >
          <i
            :class="
              'icon ' +
              item.iconCls +
              (layoutSite === 'side' ? ' wic1 wfs20' : ' wfs20')
            "
          ></i>
          <span
            :title="item.name"
            :style="{ 'padding-left': !item.iconCls ? '20px' : '0' }"
            >{{ item.name }}</span
          >
        </a-menu-item>
        <AppMenuSub v-else :key="item.key + 'sub'" :subMenuInfo="item" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import AppMenuSub from "./AppMenuSub";
export default {
  name: "AppMenu",
  components: { AppMenuSub },
  data() {
    return {
      menuData: [{}],
    };
  },
};
</script>
<style lang="less" scoped>
.app-menu {
  width: 160px;
  height: 100%;
  background: lightpink;
}
</style>
