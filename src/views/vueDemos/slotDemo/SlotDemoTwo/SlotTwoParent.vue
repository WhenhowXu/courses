<template>
  <div>
    <slot :text="'message for default slot'"></slot>
    <slot name="title" :text="'message for default slot title'"></slot>
  </div>
</template>
<script>
export default {
  name: "SlotTwoParent",
  created() {
    console.log(this.$slots);
  },
  mounted() {
    console.log(this.$slots);
  },
};
</script>
