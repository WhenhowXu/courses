<template>
  <div class="DynamicForm_Wrapper">
    {{ domians }}

    <a-form v-if="form" :form="form" @submit="handleSubmit">
      <a-form-item>
        {{ form.getFieldValue(domians) }}
        {{ form }}
        {{ typeof form.getFieldValue(domians) }}
      </a-form-item>
      <a-form-item
        v-for="(domain, index) in form.getFieldValue(domians)"
        :key="domain.key"
        v-bind="formItemLayout"
        :label="'学生' + (index + 1)"
        style="margin-bottom: 0"
      >
        <a-row :gutter="12">
          <a-col :span="11">
            <a-form-item>
              <a-input
                v-decorator="[
                  `${domians}[${index}].name`,
                  {
                    validateTrigger: ['change', 'blur'],
                    rules: [
                      {
                        required: true,
                        whitespace: true,
                        message: '请输入姓名',
                      },
                    ],
                  },
                ]"
                placeholder="请输入姓名"
              />
            </a-form-item>
          </a-col>
          <a-col :span="11">
            <a-form-item>
              <a-input-number
                style="width: 100%"
                v-decorator="[
                  `${domians}[${index}].age`,
                  {
                    validateTrigger: ['change', 'blur'],
                    rules: [
                      {
                        required: true,
                        whitespace: true,
                        message: '请输入年龄',
                      },
                    ],
                  },
                ]"
                placeholder="请输入年龄"
                :step="1"
                :min="1"
              />
            </a-form-item>
          </a-col>
          <a-col>
            <a-icon
              v-if="form.getFieldValue(domians).length > 1"
              class="dynamic-delete-button"
              type="minus-circle-o"
              :disabled="form.getFieldValue(domians).length === 1"
              @click="() => remove(domain)"
            />
          </a-col>
        </a-row>
      </a-form-item>
      <a-form-item v-bind="formItemLayoutWithOutLabel">
        <a-button icon="plus" type="dashed" @click="add"> 新增学生 </a-button>
      </a-form-item>
      <a-form-item v-bind="formItemLayoutWithOutLabel">
        <a-button type="primary" html-type="submit"> Submit </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "DynamicForm",
  data() {
    return {
      domians: "domians",
      dataSource: [{ name: "张三" }],
      form: null,
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 4 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 20 },
        },
      },
      formItemLayoutWithOutLabel: {
        wrapperCol: {
          xs: { span: 24, offset: 0 },
          sm: { span: 20, offset: 4 },
        },
      },
    };
  },
  beforeCreate() {
    console.log(this.$form);
    this.form = this.$form.createForm(this, {
      name: "dynamic-form-demo",
      initialValue: {
        domians: [{ key: Date.now() }],
      },
    });
    this.form.getFieldDecorator("domians", {
      initialValue: [{ key: Date.now() }],
      preserve: true,
    });
  },
  methods: {
    remove(domain) {
      const items = this.form.getFieldValue(this.domians);
      if (items.length === 1) {
        return;
      }
      this.form.setFieldsValue({
        [this.domians]: items.filter((v) => v.key !== domain.key),
      });
    },

    add() {
      const items = this.form.getFieldValue(this.domians) || [];
      this.form.setFieldsValue({
        [this.domians]: items.concat({ key: Date.now() }),
      });
    },

    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
        }
      });
    },
  },
};
</script>
<style>
.dynamic-delete-button {
  cursor: pointer;
  position: relative;
  top: 4px;
  font-size: 24px;
  color: #999;
  transition: all 0.3s;
}
.dynamic-delete-button:hover {
  color: #777;
}
.dynamic-delete-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
