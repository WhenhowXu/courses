<template>
  <div>
    <h1>PARENT</h1>
    <button @click="handleClick">触发child事件</button>
    <button @click="handleMiddleClick">通过middle触发child事件</button>
    <child-test ref="child" />
    <middle-test ref="middle" />
  </div>
</template>
<script>
import ChildTest from "./ChildTest";
import MiddleTest from "./MiddleTest";
export default {
  name: "ParentTest",
  components: {
    ChildTest,
    MiddleTest,
  },
  created() {
    console.log(this.$refs.child);
  },
  methods: {
    handleClick() {
      console.log(this.$refs.child);
      this.$refs.child.doSomething();
    },
    handleMiddleClick() {
      console.dir(this.$refs.middle);
      this.$refs.middle.doSomething();
    },
  },
};
</script>
