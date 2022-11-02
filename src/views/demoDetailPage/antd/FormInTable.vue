<template>
  <div class="FormInTable_Wrapper">
    <a-form-model :ref="formName" :model="formValues" :rules="rules">
      <a-form-model-item prop="products" label="商品">
        <div>
          <a-table
            row-key="id"
            :columns="columns"
            :data-source="formValues.products"
            :pagination="false"
          >
            <a-form-model-item
              slot="productName"
              slot-scope="text, record, index"
              v-bind="rowFormItemLayout"
              :style="rowFormItemStyle"
              :rules="tableRules.productName"
              :prop="'products.' + index + '.productName'"
              size="small"
            >
              <a-input
                placeholder="商品名称"
                v-model.lazy="record.productName"
              />
            </a-form-model-item>
            <a-form-model-item
              slot="amount"
              slot-scope="text, record, index"
              v-bind="rowFormItemLayout"
              :style="rowFormItemStyle"
              :prop="'products.' + index + '.amount'"
              :rules="tableRules.amount"
              size="small"
            >
              <a-input-number
                placeholder="商品数量"
                v-model.number="record.amount"
                style="width: 100%"
              />
            </a-form-model-item>
          </a-table>
          <div class="add-row-wrapper">
            <a-button
              type="dashed"
              @click="handleProductRow"
              class="add-row-button"
              >添加一行数据</a-button
            >
          </div>
        </div>
      </a-form-model-item>
      <ButtonContainer>
        <a-button @click="handleReset">重置</a-button>
        <a-button type="primary" @click="handleSubmit">确定</a-button>
      </ButtonContainer>
    </a-form-model>
  </div>
</template>
<script>
import { ButtonContainer } from "@/components";

const columns = Object.freeze([
  {
    title: "商品名称",
    dataIndex: "productName",
    scopedSlots: { customRender: "productName" },
  },
  {
    title: "商品数量",
    dataIndex: "amount",
    scopedSlots: { customRender: "amount" },
  },
]);
export default {
  name: "FormInTable",
  components: { ButtonContainer },
  data() {
    return {
      rules: {
        products: [
          {
            validator: (rule, value, callback) => {
              console.log(value, "validator------------");
              if (value && value.length > 0) {
                callback();
              } else {
                callback(new Error("商品不能为空"));
              }
            },
          },
        ],
      },
      formValues: {
        products: [
          { id: new Date().getTime(), productName: "奶粉", amount: 30 },
        ],
      },
      columns,
      rowFormItemLayout: { wrapperCol: { span: 24 } },
      rowFormItemStyle: "margin-bottom: 0",
      tableRules: {
        productName: [{ required: true, message: "商品名称不能为空" }],
        amount: [{ required: true, message: "商品数量不能为空" }],
      },
      formName: "productForm",
    };
  },
  methods: {
    handleSubmit() {
      this.$refs[this.formName].validate((valid) => {
        if (valid) {
          console.log(this.formValues);
        }
      });
    },
    handleReset() {
      this.$refs[this.formName].resetFields();
    },
    handleProductRow() {
      this.formValues.products.push({ id: new Date().getTime() });
    },
  },
  created() {},
};
</script>
<style scoped lang="less">
.FormInTable_Wrapper {
  .ant-table-tbody > tr > td {
    padding: 0;
  }
  .add-row-wrapper {
    text-align: center;
    .add-row-button {
      width: 100%;
    }
  }
}
</style>
