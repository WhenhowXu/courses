<template>
  <div>
    <a-page-header :title="title" @back="handleBack">
      <component v-if="componentName" :is="componentName"></component>
    </a-page-header>
  </div>
</template>
<script>
import AntdFormInTable from "./antd/FormInTable.vue";
export default {
  name: "DemoDetailPage",
  components: {
    AntdFormInTable,
  },
  methods: {
    handleBack() {
      this.$router.go(-1);
    },
  },
  computed: {
    componentName() {
      return this.$route.query.componentName;
    },
    title() {
      return this.$route.query.title;
    },
  },
  created() {
    console.log(this.$route);
    console.log(this.$router);
  },
};
</script>
