<template>
  <div>
    <h3>.trim</h3>
    <div>
      <p>输入完成后会被去掉首尾空格</p>
      <input v-model.trim="value1" />
      <a-input v-model.trim="value2" />
    </div>
    <h3>.number</h3>
    <div>
      <p>满足以数字开头的字符串，在输入完成后会进行格式化成数字</p>
      <input v-model.number="value3" />
      值：{{ value3 }} 类型：{{ typeof value3 }}
      <a-input v-model.number="value4" />
      值：{{ value4 }} 类型：{{ typeof value4 }}
    </div>
    <h3>.lazy</h3>
    <div>
      <p>
        原生的在输入完成后失去焦点或者enter确认后然后同步,antd-design-vue组件无效
      </p>
      <input v-model.lazy="value5" />
      值：{{ value5 }} 类型：{{ typeof value5 }}
      <a-input v-model.lazy="value6" />
      值：{{ value6 }} 类型：{{ typeof value6 }}
    </div>
  </div>
</template>
<script>
export default {
  name: "ModelModifier",
  data() {
    return {
      value1: undefined,
      value2: undefined,
      value3: undefined,
      value4: undefined,
      value5: undefined,
      value6: undefined,
    };
  },
};
</script>
