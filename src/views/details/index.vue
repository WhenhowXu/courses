<template>
  <div>
    <input type="file" @change="hanldeChange" />
  </div>
</template>
<script>
export default {
  name: "DemoDetailPage",
  methods: {
    hanldeChange(e) {
        console.log(e);
    },
  },
};
</script>
