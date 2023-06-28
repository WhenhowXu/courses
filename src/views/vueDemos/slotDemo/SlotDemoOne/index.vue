<template>
  <div>
    <SlotOneParent>
      <template v-slot="slotProps"><div>{{slotProps.text}}</div></template>
    </SlotOneParent>
  </div>
</template>
<script>
import SlotOneParent from "./SlotOneParent.vue";

export default {
  name: "SlotDemoOne",
  components: { SlotOneParent },
};
</script>
