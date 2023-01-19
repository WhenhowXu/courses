<template>
  <div>
    <a-page-header :title="title" @back="handleBack">
      <component v-if="componentName" :is="componentName"></component>
    </a-page-header>
  </div>
</template>
<script>
import AntdFormInTable from "./antd/FormInTable";
import AntdPrintTable from "./antd/PrintTable";
import AntdFormInModal from "./antd/FormInModal";
import VueModelModifier from "./vue/ModelModifier";
import ElseBpmnFlowChart from "./else/BpmnFlowChart";

export default {
  name: "DemoDetailPage",
  components: {
    AntdFormInTable,
    AntdPrintTable,
    AntdFormInModal,
    VueModelModifier,
    ElseBpmnFlowChart,
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
};
</script>
