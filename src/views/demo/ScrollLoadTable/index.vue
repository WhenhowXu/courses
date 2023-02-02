<template>
  <div style="height: 100%; width: 100%; padding: 0 30px">
    <div>
      <a-button @click="allSelection">全选</a-button>
      <a-button @click="clearSelection">清除选中</a-button>
      <a-button @click="setData(3)">变化数据为3条</a-button>
      <a-button @click="setData(200)">变化数据为200条</a-button>
      <a-button @click="setData(1000)">变化数据为1000条</a-button>
      <a-button @click="pagingScrollTopLeft(1000)">滚动到1千位置</a-button>
      <a-button @click="pagingScrollTopLeft(2000)">滚动到2千位置</a-button>
      <a-button @click="pagingScrollTopLeft(0)">滚动到顶部</a-button>
      <a-button @click="scrollBottom">滚动到底部位置</a-button>
      <a-button @click="setHei(400)">设置高度为400</a-button>
      <a-button @click="setHei(300)">设置高度为300</a-button>
    </div>
    <div v-if="true">
      <p style="color: red">我是Y轴虚拟</p>
      <pl-table
        ref="plTable"
        :height="height"
        :data="data.tableData"
        selectTrClass="selectTr"
        header-drag-style
        :dataChangesScrollTop="false"
        :summary-method="summaryMethod"
        @table-body-scroll="tableBodyScroll"
        fixedColumnsRoll
        inverse-current-row
        bigDataCheckbox
        @select-all="selectAll"
        show-summary
        use-virtual
        :row-height="rowHeight"
      >
        <template slot="empty"> 没有查询到符合条件的记录 </template>
        <pl-table-column type="selection" width="55" :selectable="selectable" />
        <pl-table-column type="index" width="100" fixed />
        <pl-table-column
          v-for="item in columns"
          :key="item.id"
          :resizable="item.resizable"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :prop="item.prop"
          :label="item.label"
          :fixed="item.fixed"
          :width="item.width"
        />
      </pl-table>
    </div>
    <div v-if="false">
      <p style="color: red">我是X + Y轴同时虚拟</p>
      <plx-table-grid
        :data="data.tableData"
        height="300"
        :show-summary="true"
        :summary-method="summaryMethod"
        ref="plTable2"
      >
        <plx-table-column type="selection" width="55" fixed="left" />
        <plx-table-column type="index" width="100" fixed="left" />
        <plx-table-column
          v-for="item in columns2"
          :key="item.id"
          :resizable="item.resizable"
          :prop="item.prop"
          :label="item.label"
          :fixed="item.fixed"
        />
      </plx-table-grid>
    </div>

    <div v-if="false">
      <p style="color: red">我是加入分页的表格</p>
      <pl-table
        :data="data.tableData"
        big-data-checkbox
        :max-height="height"
        header-drag-style
        fixedColumnsRoll
        use-virtual
        :row-height="rowHeight"
        :pagination-show="true"
        :total="pageForm.total"
        :page-size="pageForm.pageSize"
        :current-page="pageForm.currentPage"
        @handlePageSize="handlePageSize"
      >
        <template slot="empty"> 没有查询到符合条件的记录 </template>
        <pl-table-column type="selection" width="55" />
        <pl-table-column type="index" width="100" fixed />
        <pl-table-column
          v-for="item in columns"
          :key="item.id"
          :resizable="item.resizable"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :prop="item.prop"
          :label="item.label"
          :fixed="item.fixed"
          :width="item.width"
        />
      </pl-table>
    </div>

    <div v-if="false">
      <p style="color: red">
        我是普通的el-table树形表格，这个数据多了就卡，这就是原本的el-table树表格，必须指定
        row-key
      </p>
      <pl-table
        ref="plTable"
        :height="height"
        :data="treeData"
        selectTrClass="selectTr"
        row-key="id"
        header-drag-style
        @table-body-scroll="tableBodyScroll"
        fixedColumnsRoll
        inverse-current-row
        @select-all="selectAll"
      >
        <template slot="empty"> 没有查询到符合条件的记录 </template>
        <!--show-overflow-tooltip属性代表超出则内容部分给出提示框-->
        <pl-table-column
          v-for="item in columns"
          :key="item.id"
          :resizable="item.resizable"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :prop="item.prop"
          :label="item.label"
          :fixed="item.fixed"
          :width="item.width"
        />
      </pl-table>
    </div>

    <div v-if="true">
      <p style="color: red">
        我是pl-table大数据树形表格 必须指定 row-key 必须开启use-virtual
      </p>
      <el-button @click="$refs.plTreeTable.toggleTreeExpansion(treeData[0])"
        >切换第一个</el-button
      >
      <el-button @click="$refs.plTreeTable.setTreeExpansion(treeData[2], true)"
        >展开第三个</el-button
      >
      <el-button @click="$refs.plTreeTable.setAllTreeExpansion()"
        >展开全部</el-button
      >
      <el-button @click="$refs.plTreeTable.clearTreeExpand()"
        >关闭所有</el-button
      >
      <el-button @click="getTreeExpansionEvent">获取已展开</el-button>
      <pl-table
        ref="plTreeTable"
        :max-height="height"
        :data="treeData"
        selectTrClass="selectTr"
        row-key="id"
        bigDataCheckbox
        :treeConfig="{ children: 'children', expandAll: false }"
        :use-virtual="true"
        header-drag-style
        @table-body-scroll="tableBodyScroll"
        fixedColumnsRoll
        inverse-current-row
        @select-all="selectAll"
      >
        <template slot="empty"> 没有查询到符合条件的记录 </template>
        <pl-table-column
          :treeNode="item.treeNode"
          v-for="item in columns"
          :key="item.id"
          :resizable="item.resizable"
          :show-overflow-tooltip="item.showOverflowTooltip"
          :prop="item.prop"
          :label="item.label"
          :fixed="item.fixed"
          :width="item.width"
        />
      </pl-table>
    </div>
  </div>
</template>

<script>
var dataList = Array.from({ length: 500 }, (_, idx) => ({
  id: idx + "_" + 1,
  date: "2016-05-03",
  name: 1,
  ab: "欢迎使用pl-table",
  address: idx,
  children: Array.from({ length: 3 }, (_, idx2) => ({
    id: idx + "_" + idx2 + "_" + 1,
    date: "2016-05-03",
    name: 1,
    ab: "欢迎使用pl-table",
    address: idx + "_" + idx2,
    children: Array.from({ length: 1 }, (_, idx3) => ({
      id: idx + "_" + idx2 + "_" + idx3 + "_" + 1,
      date: "2016-05-03",
      name: 1,
      ab: "欢迎使用pl-table",
      address: idx + "_" + idx2 + "_" + idx3,
    })),
  })),
}));
export default {
  name: "ScrollLoadTable",
  data() {
    return {
      rowHeight: 50,
      columns: [
        {
          prop: "address",
          label: "日期",
          width: 120,
          treeNode: true,
          showOverflowTooltip: true,
        },
        {
          prop: "address",
          label: "地址",
          width: 100,
          showOverflowTooltip: true,
        },
        {
          prop: "address",
          label: "噜噜噜",
          width: 230,
          showOverflowTooltip: true,
        },
        {
          prop: "address",
          label: "娃哈哈",
          width: 100,
          showOverflowTooltip: true,
        },
        {
          prop: "address",
          label: "地址",
          width: 100,
          showOverflowTooltip: true,
        },
        {
          prop: "address",
          label: "娃哈哈",
          width: 100,
          showOverflowTooltip: true,
        },
        {
          prop: "address",
          label: "娃哈哈",
          width: 100,
          showOverflowTooltip: true,
        },
        {
          prop: "address",
          label: "地址",
          width: 100,
          showOverflowTooltip: true,
        },
        {
          prop: "address",
          label: "娃哈哈",
          width: 100,
          showOverflowTooltip: true,
        },
        {
          prop: "address",
          label: "娃哈哈",
          width: 100,
          showOverflowTooltip: true,
        },
        { prop: "address", label: "噜噜噜", showOverflowTooltip: true },
        {
          prop: "address",
          label: "娃哈哈",
          width: 100,
          showOverflowTooltip: true,
          fixed: "right",
        },
      ],
      columns2: Array.from({ length: 20 }, (_, idx) => ({
        prop: "address",
        label: "地址" + idx,
        width: 200,
        showOverflow: true,
        sortable: true,
        fixed: "",
      })),
      data: {
        tableData: Array.from({ length: 20 }, (_, idx) => ({
          id: idx + 1,
          date: "2016-05-03",
          name: 1,
          ab: "欢迎使用pl-table",
          address: 1 + idx,
        })),
      },
      top: 0,
      height: 500,
      pageForm: {
        total: 1000,
        pageSize: 10,
        currentPage: 1,
      },
      treeData: dataList,
    };
  },
  methods: {
    selectAll(val) {
      console.log(val);
    },
    selectable(row, index) {
      if (index === 1) {
        return false;
      } else {
        return true;
      }
    },
    // 合计
    summaryMethod({ columns, data }) {
      // 平均值算法（不需要自己去掉）
      function cacl(arr, callback) {
        let ret;
        for (let i = 0; i < arr.length; i++) {
          ret = callback(arr[i], ret);
        }
        return ret;
      }
      // 平均值算法（不需要自己去掉）
      Array.prototype.sum = function () {
        return cacl(this, function (item, sum) {
          if (typeof sum == "undefined") {
            return item;
          } else {
            return (sum += item);
          }
        });
      };
      // 平均值算法（不需要自己去掉）
      Array.prototype.avg = function () {
        if (this.length == 0) {
          return 0;
        }
        return this.sum(this) / this.length;
      };
      const means = []; // 合计
      const fenceSums = []; // 平均值
      columns.forEach((column, columnIndex) => {
        if (columnIndex === 0) {
          means.push("合计");
          fenceSums.push("平均值");
        } else {
          const values = data.map((item) => Number(item[column.property]));
          // 合计
          if (!values.every((value) => isNaN(value))) {
            means[columnIndex] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            means[columnIndex] =
              '<span style="color: red">' +
              means[columnIndex] +
              "元</span><br/><span>123</span>";
          } else {
            means[columnIndex] = "";
          }
          // 平均值
          const precisions = [];
          let notNumber = true;
          values.forEach((value) => {
            if (!isNaN(value)) {
              notNumber = false;
              let decimal = ("" + value).split(".")[1];
              precisions.push(decimal ? decimal.length : 0);
            }
          });
          if (!notNumber) {
            fenceSums[columnIndex] = values.avg();
          } else {
            fenceSums[columnIndex] = "";
          }
        }
      });
      // 返回一个二维数组的表尾合计
      return [means, fenceSums];
    },
    setHei(val) {
      this.height = val;
    },
    tableBodyScroll({ scrollTop }, ) {
      this.top = scrollTop;
    },
    allSelection() {
      this.$refs.plTable.toggleAllSelection();
    },
    clearSelection() {
      this.$refs.plTable.clearSelection();
      this.$refs.plTable2.clearSelection();
    },
    setData(num) {
      this.data.tableData = Array.from({ length: num }, (_, idx) => ({
        id: idx + 1,
        date: "2016-05-03",
        name: 1,
        ab: "欢迎使用pl-table",
        address: 1 + idx,
      }));
    },
    scrollBottom() {
      this.$refs.plTable.scrollBottom();
    },
    pagingScrollTopLeft(val) {
      this.$refs.plTable.pagingScrollTopLeft(val, 0);
    },
    // 分页事件
    handlePageSize({ page, size }) {
      console.log(page, size);
    },
    // 获取已经展开的节点
    getTreeExpansionEvent() {
      console.log(this.$refs.plTreeTable.getTreeExpandRecords());
    },
  },
};
</script>
<style>
body,
html {
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}
body ::-webkit-scrollbar-thumb {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  background-color: rgba(144, 147, 153, 0.5);
}
.selectTr td {
  background: #ccc !important;
  color: red !important;
}
</style>
