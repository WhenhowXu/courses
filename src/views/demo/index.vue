<template>
  <div class="demo-page">
    <div class="demo-header">
      <h3>
        <a-dropdown v-model="visible">
          <span>{{ demoTitle }} <a-icon type="down" /></span>
          <a-menu slot="overlay" @click="handleSelectDemo">
            <a-menu-item v-for="demo in demos" :key="demo.component">
              {{ demo.title }}
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </h3>
      <a-space>
        <a-button ghost icon="rollback" shape="circle"></a-button>
        <a-button ghost icon="skin" shape="circle"></a-button>
      </a-space>
    </div>
    <div class="demo-main">
      <component :is="loadertpl" />
    </div>
  </div>
</template>
<script>
import demos from "./demos";

export default {
  name: "DemoPage",
  data() {
    return {
      currentDemo: demos[demos.length - 1],
      demos,
      loadertpl: "",
      visible: false,
    };
  },
  computed: {
    demoTitle() {
      return this.currentDemo && this.currentDemo.title;
    },
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
  },
};
</script>
<style lang="less" scoped>
.demo-page {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
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
}
</style>
