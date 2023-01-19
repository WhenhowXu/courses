<template>
  <child-test v-bind="$attrs" v-on="$listeners" />
</template>
<script>
import ChildTest from "./ChildTest";
export default {
  name: "ParentTest",
  components: {
    ChildTest,
  },
  created() {
    console.log(this.$refs.child);
  },
};
</script>
