<template>
  <div class="tree-search-wrapper">
    <a-input-search placeholder="请输入关键字搜索" v-model="searchWords" />
    <a-tree checkable defaultExpandAll :tree-data="treeData" />
  </div>
</template>
<script>
import { filterTreeData } from "@/utils/tree";
import debounce from "lodash/debounce";

const treeData = [
  {
    title: "消炎的储物戒指",
    key: "0-0",
    children: [
      {
        title: "高级储物袋",
        key: "0-0-0",
        children: [
          { title: "青莲地心火", key: "0-0-0-0" },
          { title: "破厄丹", key: "0-0-0-1" },
          { title: "焚觉", key: "0-0-0-2" },
        ],
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        children: [
          { title: "0-0-1-0", key: "0-0-1-0" },
          { title: "0-0-1-1", key: "0-0-1-1" },
          { title: "0-0-1-2", key: "0-0-1-2" },
        ],
      },
      {
        title: "0-0-2",
        key: "0-0-2",
      },
    ],
  },
  {
    title: "0-1",
    key: "0-1",
    children: [
      { title: "0-1-0-0", key: "0-1-0-0" },
      { title: "0-1-0-1", key: "0-1-0-1" },
      { title: "0-1-0-2", key: "0-1-0-2" },
    ],
  },
  {
    title: "0-2",
    key: "0-2",
  },
];

export default {
  data() {
    return {
      allTreeData: treeData,
      treeData: [],
      searchWords: "",
    };
  },

  methods: {
    handleSearch() {
      this.treeData = filterTreeData(this.allTreeData, this.searchWords, {
        getMatchWord: (v) => v.title,
      });
    },
  },
  watch: {
    searchWords: {
      handler: debounce(function () {
        this.handleSearch();
      }, 300),
      immediate: true,
    },
  },
};
</script>

<style lang="less" scoped>
.tree-search-wrapper {
  width: 300px;
  padding: 12px;
}
</style>
