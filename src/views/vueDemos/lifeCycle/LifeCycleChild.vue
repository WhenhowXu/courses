<template>
  <div>{{ name }}</div>
</template>

<script>
export default {
  name: "LifeCycleChild",
  props: { name: String },
  beforeCreate() {
    console.log("child beforeCreate");
  },
  created() {
    console.log("child created");
  },
  beforeMount() {
    console.log("child beforeMount");
  },
  mounted() {
    console.log("child mounted");
  },
  beforeUpdate() {
    console.log("child beforeUpdate");
  },
  updated() {
    console.log("child updated");
  },
};
</script>
