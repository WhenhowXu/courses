<template>
  <app-layout />
</template>

<script>
import AppLayout from "@/layout";

export default {
  name: "MainPage",
  components: { AppLayout },
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>
