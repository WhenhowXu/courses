<template>
  <div class="demo-page">
    <!-- <div class="demo-header">
      <h3>
        <a-dropdown v-model="visible">
          <span>{{ demoTitle }} <a-icon type="down" /></span>
          <a-menu slot="overlay" @click="handleSelectDemo">
            <a-menu-item v-for="demo in demos" :key="demo.component">
              {{ demo.title }}
            </a-menu-item>
          </a-menu>
        </a-dropdown>
        <div
          class="tags-wrapper"
          v-if="currentDemo.keywords && currentDemo.keywords.length > 0"
        >
          <a-tag v-for="(tag, index) in currentDemo.keywords" :key="index">
            {{ tag }}
          </a-tag>
        </div>
      </h3>
      <a-space>
        <a-button ghost icon="rollback" shape="circle"></a-button>
        <a-dropdown>
          <a-button ghost icon="skin" shape="circle"></a-button>
          <a-menu slot="overlay">
            <a-menu-item
              v-for="theme in themes"
              :key="theme.value"
              @click="setThemeKey(theme.value)"
            >
              <a href="javascript:;">{{ theme.label }}</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-space>
    </div> -->
    <div class="demo-main">
      <component :is="loadertpl" />
    </div>
  </div>
</template>
<script>
import demos from "./demos";
import { mapMutations, mapState } from "vuex";

export default {
  name: "DemoPage",
  data() {
    return {
      currentDemo: demos[3],
      demos,
      loadertpl: "",
      visible: false,
    };
  },
  computed: {
    demoTitle() {
      return this.currentDemo && this.currentDemo.title;
    },
    ...mapState(["themes"]),
  },
  watch: {
    currentDemo: {
      handler: function (val) {
        const componentName = val && val.component;
        this.loadertpl = (resolve) =>
          require([`@/views/demo/${componentName}`], resolve);
      },
      immediate: true,
    },
  },
  methods: {
    handleSelectDemo({ key }) {
      if (key === this.currentDemo.component) return;
      this.currentDemo = this.demos.find((v) => v.component === key);
    },
    ...mapMutations(["setThemeKey"]),
    
  },
};
</script>
<style lang="less" scoped>
.demo-page {
  height: 100%;
  width: 100%;
  .demo-header {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background-color: lightseagreen;
    padding: 0 12px;
    h3 {
      color: #fff;
      font-weight: bold;
    }
  }
  .tags-wrapper {
    display: inline-block;
    padding: 0 12px;
  }
}
</style>
