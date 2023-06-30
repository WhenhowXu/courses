<template>
  <div>
    <a-input v-model="name" />
    <LifeCycleChild :name="name" />
  </div>
</template>

<script>
import LifeCycleChild from "./LifeCycleChild";
export default {
  name: "LifeCycle",
  components: { LifeCycleChild },
  data() {
    return {
      name: "y",
    };
  },
  beforeCreate() {
    console.log("parent beforeCreate");
  },
  created() {
    console.log("parent created");
  },
  beforeMount() {
    console.log("parent beforeMount");
  },
  mounted() {
    console.log("parent mounted");
  },
  beforeUpdate() {
    console.log("parent beforeUpdate");
  },
  updated() {
    console.log("parent updated");
  },
};
</script>
