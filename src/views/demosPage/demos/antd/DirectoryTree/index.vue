<template>
  <div style="width: 300px">
    <a-tree
      multiple
      default-expand-all
      @select="onSelect"
      @expand="onExpand"
      :treeData="treeData"
    >
      <template slot="title" slot-scope="{ title }">
        <span>{{ title }}{{ "NNNNN电话电话是段和首都互撒谎杜哈速度刷活动湖大互动活塞环的" }}</span>
      </template>
    </a-tree>
  </div>
</template>
<script>
export default {
  name: "DirectoryTree",
  data() {
    return {
      treeData: [
        {
          key: "01",
          title: "parent 1",
          slots: { title: "title" },
          children: [
            { key: "01-1", title: "leaf 1-0", slots: { title: "title" } },
            { key: "01-2", title: "leaf 2-0", slots: { title: "title" } },
          ],
        },
      ],
    };
  },
  methods: {
    onSelect(keys, event) {
      console.log("Trigger Select", keys, event);
    },
    onExpand() {
      console.log("Trigger Expand");
    },
  },
};
</script>
