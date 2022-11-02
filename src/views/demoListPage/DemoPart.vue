<template>
  <a-card :title="demoData.title">
    <div v-if="demoData.children && demoData.children.length > 0">
      <a-row :gutter="12">
        <a-col v-for="demo in demoData.children" :key="demo.id" :span="6">
          <a-card :title="demo.title" style="margin-top: 12px">
            <a-button slot="extra" type="link" @click="goToDemoDetail(demo)"
              >查看示例</a-button
            >
            <p>{{ demo.describe }}</p>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <a-empty v-else />
  </a-card>
</template>
<script>
export default {
  name: "DemoPart",
  props: {
    demoData: { type: Object, default: () => ({}) },
  },
  methods: {
    goToDemoDetail(demo) {
      this.$router.push({ path: "/demo-detail", query: demo });
    },
  },
};
</script>
