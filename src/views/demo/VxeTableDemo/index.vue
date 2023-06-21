<template>
  <div class="page-wrapper">
    <vxe-table
      border
      show-overflow
      show-header-overflow
      ref="xTable"
      height="600"
      :column-config="{ resizable: true }"
      :loading="loading"
      :scroll-y="{ mode: 'wheel' }"
    >
      <vxe-table-column type="seq" width="100" fixed="left"></vxe-table-column>
      <vxe-table-column
        prop="attr0"
        title="Attr0"
        width="200"
        fixed="left"
        sortable
      ></vxe-table-column>
      <vxe-table-column
        field="attr1"
        title="Attr1"
        width="200"
      ></vxe-table-column>
      <vxe-table-column
        field="attr2"
        title="Attr2"
        width="200"
      ></vxe-table-column>
      <vxe-table-column
        field="attr3"
        title="Attr3"
        width="200"
      ></vxe-table-column>
      <vxe-table-column
        field="attr4"
        title="Attr4"
        width="120"
      ></vxe-table-column>
      <vxe-table-column
        field="attr5"
        title="Attr5"
        width="200"
      ></vxe-table-column>
      <vxe-table-column
        field="attr6"
        title="Attr6"
        width="300"
        sortable
      ></vxe-table-column>
      <vxe-table-column
        field="attr7"
        title="Attr7"
        width="200"
        sortable
      ></vxe-table-column>
      <vxe-table-column
        field="attr8"
        title="Attr8"
        width="220"
      ></vxe-table-column>
      <vxe-table-column
        field="attr9"
        title="Attr9"
        width="200"
      ></vxe-table-column>
      <vxe-table-column
        field="attr10"
        title="Attr10"
        width="130"
      ></vxe-table-column>
      <vxe-table-column
        field="attr11"
        title="Attr11"
        width="200"
      ></vxe-table-column>
      <vxe-table-column
        field="attr12"
        title="Attr12"
        width="100"
      ></vxe-table-column>
      <vxe-table-column
        field="attr13"
        title="Attr14"
        width="200"
      ></vxe-table-column>
      <vxe-table-column
        field="attr14"
        title="Attr14"
        width="300"
      ></vxe-table-column>
      <vxe-table-column
        field="attr15"
        title="Attr15"
        width="200"
      ></vxe-table-column>
      <vxe-table-column
        field="attr16"
        title="Attr16"
        width="200"
      ></vxe-table-column>
      <vxe-table-column
        field="attr17"
        title="Attr17"
        width="80"
      ></vxe-table-column>
      <vxe-table-column
        field="attr18"
        title="Attr18"
        width="200"
      ></vxe-table-column>
      <vxe-table-column
        field="attr19"
        title="Attr19"
        width="140"
      ></vxe-table-column>
      <vxe-table-column
        field="attr20"
        title="Attr20"
        width="200"
      ></vxe-table-column>
      <vxe-table-column
        field="attr21"
        title="Attr21"
        width="160"
      ></vxe-table-column>
      <vxe-table-column
        field="attr22"
        title="Attr22"
        width="200"
      ></vxe-table-column>
      <vxe-table-column
        field="attr23"
        title="Attr23"
        width="200"
      ></vxe-table-column>
      <vxe-table-column
        field="attr24"
        title="Attr24"
        width="100"
        fixed="right"
      ></vxe-table-column>
      <vxe-table-column
        field="attr25"
        title="Attr25"
        width="200"
        fixed="right"
      ></vxe-table-column>
    </vxe-table>
  </div>
</template>
<script>
import VXETable from "vxe-table";
import XEUtils from "xe-utils";

const dataList = [];
const mockList = (rowSize) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const currSize = dataList.length;
      if (currSize < rowSize) {
        for (let i = currSize; i < rowSize; i++) {
          dataList.push({
            checked: false,
            attr0: "attr0_row_" + i,
            attr1: "attr1_row_" + i,
            attr2: "attr2_row_" + i,
            attr3: "attr3_row_" + i,
            attr4: "attr4_row_" + i,
            attr5: "attr5_row_" + i,
            attr6: i,
            attr7: "" + i,
            attr8: "attr8_row_" + i,
            attr9: "attr9_row_" + i,
            attr10: "attr10_row_" + i,
            attr11: "attr11_row_" + i,
            attr12: "attr12_row_" + i,
            attr13: "attr13_row_" + i,
            attr14: "attr14_row_" + i,
            attr15: "attr15_row_" + i,
            attr16: "attr16_row_" + i,
            attr19: "attr19_row_" + i,
            attr20: "attr20_row_" + i,
            attr24: "attr24_row_" + i,
            attr25: "attr25_row_" + i,
          });
        }
      }
      const result = XEUtils.clone(dataList.slice(0, rowSize), true);
      resolve(result);
    }, 100);
  });
};
export default {
  name: "VxeTableDemo",
  data() {
    return {
      loading: false,
      tableData: [],
    };
  },
  methods: {
    loadList(rowSize) {
      this.loading = true;
      mockList(rowSize).then((data) => {
        const startTime = Date.now();
        const $table = this.$refs.xTable;
        if ($table) {
          $table.reloadData(data).then(() => {
            VXETable.modal.message({
              content: `渲染 ${rowSize} 行，用时 ${Date.now() - startTime}毫秒`,
              status: "info",
            });
            this.loading = false;
          });
        } else {
          this.loading = false;
        }
      });
    },
  },
  mounted() {
    this.loadList(600);
  },
};
</script>
