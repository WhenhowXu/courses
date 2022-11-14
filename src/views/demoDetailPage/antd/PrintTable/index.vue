<template>
  <div>
    <a-button type="primary" @click="handlePrint">打印</a-button>
    <a-table :columns="columns" :dataSource="dataSource" :pagination="false" />
    <vue-easy-print :ref="printer">
      <div>
        <print-container title="用户列表">
          <a-table
            row-key="key"
            :columns="columns"
            :dataSource="dataSource"
            :pagination="false"
          />
        </print-container>
        <print-container> </print-container>
      </div>
    </vue-easy-print>
  </div>
</template>
<script>
import VueEasyPrint from "vue-easy-print";
import PrintContainer from "./PrintContainer";

const columns = [
  { title: "Name", dataIndex: "name" },
  { title: "Age", dataIndex: "age" },
  { title: "Address", dataIndex: "address" },
];
const dataSource = new Array(20).fill({}).map((v, index) => {
  return {
    key: index,
    name: `Edward King ${index}`,
    age: 32,
    address: `London, Park Lane no. ${index}`,
  };
});
Object.freeze(columns);
export default {
  name: "PrintTable",
  components: {
    VueEasyPrint,
    PrintContainer,
  },
  data() {
    return {
      printer: "printer",
      columns,
      dataSource,
    };
  },
  methods: {
    handlePrint() {
      this.$refs[this.printer].print();
    },
  },
};
</script>
