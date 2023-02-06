<template>
  <div>
    <p style="width: 50%" v-ellipsis:2="content">{{ content }}</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {
      content:
        "满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红满江红",
    };
  },
});
</script>
