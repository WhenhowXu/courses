<template>
  <div>{{ message }}</div>
</template>
<script>
export default {
  name: "ChildTest",
  data() {
    return {
      message: "",
    };
  },
  methods: {
    doSomething() {
      this.message = "我是Child组件";
      console.log("我是Child组件");
    },
  },
};
</script>
