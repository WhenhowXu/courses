<template>
  <div>
    <slot :text="'message for default slot'"></slot>
  </div>
</template>
<script>
export default {
  name: "SlotOneParent",
  created() {
    console.log(this.$slots);
  },
  mounted() {
    console.log(this.$slots);
  },
};
</script>
