<template>
  <demo-list :demos="list">
    <form-model-demo slot="FormModelDemo" />
  </demo-list>
</template>

<script>
import FormModelDemo from "./FormModelDemo/index.vue";
export default {
  components: {
    FormModelDemo,
  },
  data() {
    list: [
      {
        title: "FormModel表单",
        key: "1",
        slotName: "FormModelDemo",
      },
      {
        title: "给不定宽高的弹框添加背景图片",
        key: "2",
        slotName: "ModalImgBg",
      },
    ];
  },
};
</script>
