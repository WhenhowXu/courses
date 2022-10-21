<template>
  <div>
    <a-input placeholder="弹框宽度" v-model="modalWidth" />
    <a-input placeholder="弹框内容高度宽度" v-model="modalContentHeight" />
    <a-button @click="open">打开弹框</a-button>
    <a-modal
      v-model="visible"
      :width="renderModelWidth"
      wrapClassName="bg-demo-modal"
      dialogClass="bg-demo-dialog"
    >
      <div :style="`height: ${modalContentHeight}px`"></div>
    </a-modal>
  </div>
</template>
<script>
export default {
  name: "ModalImgBg",
  data() {
    return {
      modalWidth: 1000,
      modalContentHeight: 300,
      visible: false,
    };
  },
  computed: {
    renderModelWidth() {
      return Number(this.modalWidth);
    },
  },
  methods: {
    open() {
      this.visible = true;
    },
  },
};
</script>

<style>
.bg-demo-dialog .ant-modal-content {
  background-image: url("./images/img_flwr.gif");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
