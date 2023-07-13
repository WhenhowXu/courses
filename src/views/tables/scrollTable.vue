<template>
  <div>
    <p>
      <a-form-model layout="inline">
        <a-form-model-item label="页码切换自动滚动到顶部"
          ><a-checkbox v-model="scrollToFirstRowOnChange"
        /></a-form-model-item>
      </a-form-model>
    </p>
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="{ pageSize: 50 }"
      :scroll="{ y: 360, scrollToFirstRowOnChange }"
    />
  </div>
</template>
<script>
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: 150,
  },
  {
    title: "Age",
    dataIndex: "age",
    width: 150,
  },
  {
    title: "Address",
    dataIndex: "address",
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

export default {
  data() {
    return {
      data,
      columns,
      scrollToFirstRowOnChange: false,
      pagination: {
        current: 1,
        pageSize: 50,
      },
    };
  },
};
</script>
