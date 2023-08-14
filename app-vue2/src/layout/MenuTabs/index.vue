<template>
  <div class="app-tabs-wrapper">
    <a-tabs
      class="app-tabs"
      :active-key="activePage"
      type="editable-card"
      hideAdd
      size="small"
      @edit="handleEdit"
      @change="handleTabChange"
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
  methods: {
    handleTabChange(key) {
      this.activePage = key;
    },
    handleRemoveTab(key) {
      if (this.pageList.length === 1) {
        this.$message.warning("最后一页不可以关闭");
        return;
      }
      this.pageList = this.pageList.filter((v) => v.path !== key);
      this.linkList = this.linkList.filter((v) => v !== key);
      if (this.activePage === key) {
        this.activePage = this.pageList[this.pageList.length - 1]?.path;
      }
    },
    handleEdit(key, action) {
      switch (action) {
        case "remove":
          this.handleRemoveTab(key);
          break;
      }
    },
  },
  watch: {
    $route: function (newRoute) {
      let matcheds = newRoute["matched"][1];
      console.log(matcheds, "------------matcheds");
      this.activePage = matcheds["path"];
      if (!this.multipage) {
        this.linkList = [newRoute.fullPath];
        this.pageList = [newRoute];
      } else if (this.linkList.indexOf(this.activePage) < 0) {
        this.linkList.push(this.activePage);
        this.pageList.push(matcheds);
      }
    },
    activePage: function (key) {
      if (!key || key === "/") return;
      if (key.indexOf("/") === 0) {
        const _route = this.pageList.find((v) => v.path === key),
          _path = (_route && _route.fullPath) || key;
        if (this.$route.fullPath !== _path) {
          this.$router.push(_path);
        }
      } else {
        this.$router.push(JSON.parse(key));
      }
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
/deep/.ant-tabs-bar {
  margin-bottom: 0;
}
</style>
