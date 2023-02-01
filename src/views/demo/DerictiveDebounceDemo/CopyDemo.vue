<template>
  <div>
    <a-textarea v-model="content" />
    <a-button v-copy="content">复制</a-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "这是一段文字",
    };
  },
  methods: {
    submit(e, data) {
      console.log(e, data);
    },
  },
};
</script>
