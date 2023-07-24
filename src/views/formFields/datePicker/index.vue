<template>
  <div>
    <a-radio-group v-model="demoKey">
      <a-radio-button
        v-for="demo in demos"
        :key="demo.component"
        :value="demo.component"
        >{{ demo.name }}</a-radio-button
      >
    </a-radio-group>
    <component :is="demoKey" />
  </div>
</template>

<script>
import MonthPickerDemo from "./MonthPickerDemo";
export default {
  name: "DatePickerPage",
  components: { MonthPickerDemo },
  data() {
    return {
      demos: [
        { name: "月份选择器", describe: "", component: "monthPickerDemo" },
      ],
      demoKey: "monthPickerDemo",
    };
  },
};
</script>
