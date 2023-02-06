<template>
  <div class="page-wrapper">
    <h-search-table :columns="columns" />
  </div>
</template>
<script>
export default {
  name: "HaoComponentsDemo",
  data() {
    return {
      columns: [
        { title: "名称", key: "name" },
        { title: "年龄", key: "age" },
        { title: "学历", key: "xueli" },
      ],
    };
  },
};
</script>
