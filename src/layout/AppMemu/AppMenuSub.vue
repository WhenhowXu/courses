<template>
  <a-sub-menu :key="subMenuInfo.key" v-bind="$props" v-on="$listeners">
    <div
      class="title-icon"
      slot="title"
      :style="
        subMenuInfo.level > 2
          ? { 'padding-left': (subMenuInfo.level - 2) * 14 + 'px' }
          : ''
      "
    >
      <i
        :class="
          'icon ' +
          subMenuInfo.iconCls +
          (layoutSite === 'side' ? ' wic1 wfs20' : ' wfs20')
        "
      ></i>
      <p
        class="title wfs14"
        :title="subMenuInfo.name"
        :style="{ 'padding-left': !subMenuInfo.iconCls ? '20px' : '0' }"
      >
        {{ subMenuInfo.name }}
      </p>
    </div>
    <template v-for="item in subMenuInfo.children">
      <a-menu-item
        v-if="(!item.children || !item.children.length) && item.showFlag"
        :key="item.key"
        :style="
          subMenuInfo.level > 1
            ? {
                'padding-left':
                  42 + (subMenuInfo.level - 2) * 14 + 'px!important',
              }
            : { 'padding-left': '22px!important' }
        "
      >
        <i :class="'icon ' + item.iconCls" v-if="!!item.iconCls"></i>
        <span
          class="wfs14"
          :title="item.name"
          :style="{ 'padding-left': !item.iconCls ? '20px' : '0' }"
          >{{ item.name }}
        </span>
      </a-menu-item>
      <AppMenuSub v-else :subMenuInfo="item" :key="item.key + 'sub'" />
    </template>
  </a-sub-menu>
</template>
<script>
import { Menu } from "ant-design-vue";

export default {
  name: "AppMenuSub",
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
  },
};
</script>
