<template>
  <a-modal v-model="visible" title="添加用户" :width="1000">
    <a-spin :spinning="loading">
      <a-form-model :model="form">
        <a-form-model-item prop="name" label="姓名">
          <a-input v-model="form.name" />
        </a-form-model-item>
        <a-form-model-item label="用水地点" prop="address">
          <a-input
            v-model="form.address"
            placeholder="请定位地址"
            :title="form.address"
            :disabled="true"
          >
            <a-icon
              slot="addonAfter"
              type="environment"
              @click="handleSelectLocation"
            />
          </a-input>
        </a-form-model-item>
      </a-form-model>
    </a-spin>
  </a-modal>
</template>
<script>
export default {
  name: "FormModelModal",
  data() {
    return {
      visible: false,
      loading: false,
      form: {
        name: "",
        address: "",
      },
    };
  },
  methods: {
    open() {
      this.visible = true;
    },
    handleSelectLocation() {},
  },
};
</script>
