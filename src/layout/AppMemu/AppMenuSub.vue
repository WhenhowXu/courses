<template>
    <a-sub-menu :key="subMenuInfo.key" v-bind="$props" v-on="$listeners">
        <div>
            <a-icon :type="subMenuInfo.icon" />
            <p class="title wfs14" :title="subMenuInfo.name">
                {{ subMenuInfo.name }}
            </p>
        </div>
        <template v-for="item in subMenuInfo.children">
              <a-menu-item
                v-if="(!item.children || !item.children.length)"
                :key="item.key"     
              >
                <a-icon :type="item.icon" />
                <span
                  :title="item.name"
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
        subMenuInfo: { type: Object, default: () => ({}) }
    },
};
</script>
