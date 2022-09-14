<template>
  <div>
    <h3>Filter 过滤器</h3>
    <p>{{ a }}</p>
    <p>{{ a | formatStr }}</p>
    <p>{{ a | formatStr | addSuffixDate }}</p>
  </div>
</template>
<script>
export default {
  name: "FilterDemo",
  data() {
    return {
      a: "YYYYYYYYYYYYYYYYYYYYYYYYYYYY",
    };
  },
  filters: {
    formatStr(str = "") {
      return str.toLowerCase();
    },
    addSuffixDate(str) {
      return `${str}${Date.now().toString()}`;
    },
  },
};
</script>
