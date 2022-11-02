<template>
    <div class="c-tree-node" >
        <a-tree-node v-for="item in tree" :key="item.ley" ></a-tree-node>
    </div>
  <a-tree-node v-bind="node" v-on="$listeners">
    <tree-title slot="title">KKKKK</tree-title>
    <template v-if="node.children && node.children.length > 0">
      <tree-node v-for="item in node.children" :key="item.key" :node="node" />
    </template>
  </a-tree-node>
</template>
<script>
import TreeTitle from "./TreeTitle.vue";
export default {
  name: "TreeNode",
  isTreeNode: true,
  components: { TreeTitle },
  props: {
    tree: Object,
  },
};
</script>
