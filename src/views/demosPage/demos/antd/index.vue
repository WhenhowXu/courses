<template>
  <demo-list :demos="list"> </demo-list>
</template>
<script>
export default {
  data() {
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
    ];
  },
};
</script>
