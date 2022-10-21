<template>
  <demo-list :demos="list">
    <muti-as-bg slot="MutiAsBg" />
    <modal-img-bg slot="ModalImgBg" />
  </demo-list>
</template>
<script>
import DemoList from "@/components/DemoList";
import ModalImgBg from "./ModalImgBg.vue";
import MutiAsBg from "./MutiAsBg.vue";

export default {
  name: "CssBackground",
  components: { DemoList, MutiAsBg, ModalImgBg },
  data() {
    return {
      list: [
        {
          title: "多张背景图做图片",
          key: "1",
          slotName: "MutiAsBg",
        },
        {
          title: "给不定宽高的弹框添加背景图片",
          key: "2",
          slotName: "ModalImgBg",
        },
      ],
    };
  },
};
</script>
