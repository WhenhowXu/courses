<template>
  <div>
    <h3>LOGIN</h3>
    <a-button v-debounce="log">debounce点击</a-button>
    <a-button @click="log">点击</a-button>
  </div>
</template>
<script>
export default {
  name: "LoginPage",
  methods: {
    log() {
      console.log("===");
    },
  },
};
</script>
