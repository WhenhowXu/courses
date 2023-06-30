<template>
  <div>
    <SlotTwoParent>
      <template v-slot="slotProps"><div>{{slotProps.text}}</div></template>
      <template v-slot:title="slotProps"><div>{{slotProps.text}}</div></template>
      <template #other="slotProps"><div>{{slotProps.text}}</div></template>
    </SlotTwoParent>
  </div>
</template>
<script>
import SlotTwoParent from "./SlotTwoParent.vue";

export default {
  name: "SlotDemoTwo",
  components: { SlotTwoParent },
  mounted(){
    console.log(this.$slots, this.$scopedSlots)
  }
};
</script>
