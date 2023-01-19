<template>
  <div>
    <a-space>
      <a-button type="primary" @click="handleOpenModelForm"
        >打开Form Model表单</a-button
      >
      <a-button>打开Form表单</a-button>
    </a-space>
    <form-model-modal :ref="formModelModal" />
  </div>
</template>
<script>
import FormModelModal from "./FormModelModal";
export default {
  components: { FormModelModal },
  name: "FormInModal",
  data() {
    return {
      formModelModal: "formModelModal",
    };
  },
  methods: {
    handleOpenModelForm() {
      this.$refs[this.formModelModal].open();
    },
  },
};
</script>
