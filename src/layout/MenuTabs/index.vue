<template>
  <div class="app-tabs-wrapper">
    <a-tabs
      class="app-tabs"
      :active-key="activePage"
      type="editable-card"
      hideAdd
      size="small"
    >
      <a-tab-pane
        v-for="tab in pageList"
        :key="tab.path"
        :tab="tab.meta && tab.meta.name"
      />
    </a-tabs>
  </div>
</template>

<script>
export default {
  name: "MenuTabs",
  data() {
    return {
      pageList: [],
      linkList: [],
      activePage: "",
      multipage: true,
    };
  },
  watch: {
    $route: function (newRoute) {
      let matcheds = newRoute["matched"][1];
      this.activePage = matcheds["path"];
      if (!this.multipage) {
        this.linkList = [newRoute.fullPath];
        this.pageList = [newRoute];
      } else if (this.linkList.indexOf(this.activePage) < 0) {
        this.linkList.push(this.activePage);
        this.pageList.push(matcheds);
      }
      console.log(this.pageList, "---------pageList");
    },
  },
  created() {
    let matcheds = this.$route["matched"][1];
    if (matcheds) {
      this.pageList.push(matcheds);
      this.linkList.push(matcheds["path"]);
      this.activePage = matcheds["path"];
    }
  },
};
</script>

<style lang="less" scoped>
.app-tabs-wrapper {
  .app-tabs {
    /deep/ .ant-tabs-nav-container {
      background: orange;
    }
  }
}
</style>
