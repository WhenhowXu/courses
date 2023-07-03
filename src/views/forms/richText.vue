<template>
  <div>
    <h3>1、vue-ueditor-wrap</h3>
    <VueUeditorWrap v-model="editorHtmlData" :config="editorConfig" />
  </div>
</template>

<script>
import VueUeditorWrap from "vue-ueditor-wrap";

export default {
  name: "RichText",
  components: { VueUeditorWrap },
  data() {
    return {
      editorHtmlData: "",
      editorConfig: {
        UEDITOR_HOME_URL: "/UEditor/",
        serverUrl: "",
        autoHeightEnabled: false, // 编辑器不自动被内容撑高
        initialFrameHeight: 320, // 初始容器高度
        initialFrameWidth: "100%", // 初始容器宽度
      },
    };
  },
};
</script>
