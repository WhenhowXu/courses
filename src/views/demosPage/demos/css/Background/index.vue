<template>
  <demo-list :demos="list">
    <muti-as-bg slot="MutiAsBg" />
    <modal-img-bg slot="ModalImgBg" />
    <bg-origin slot="BgOrigin" />
  </demo-list>
</template>
<script>
import DemoList from "@/components/DemoList";
import ModalImgBg from "./ModalImgBg.vue";
import MutiAsBg from "./MutiAsBg.vue";
import BgOrigin from "./BgOrigin.vue";

export default {
  name: "CssBackground",
  components: { DemoList, MutiAsBg, ModalImgBg, BgOrigin },
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
        { title: "background-origin 属性", key: "3", slotName: "BgOrigin" },
      ],
    };
  },
};
</script>
