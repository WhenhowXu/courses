<template>
  <div class="login-page page-contianer">
    <div class="login-form-wrapper">
      <h3>登录</h3>
      <a-form-model>
        <a-form-model-item prop="userName">
          <a-input
            v-model="form.userName"
            size="large"
            placeholder="输入用户名"
          />
        </a-form-model-item>
        <a-form-model-item prop="password">
          <a-input-password
            v-model="form.password"
            size="large"
            placeholder="输入密码"
            @keyup.enter="handleSubmit"
          />
        </a-form-model-item>
        <a-form-model-item prop="remember">
          <a-checkbox v-model="form.remember">记住密码 </a-checkbox>
        </a-form-model-item>
        <a-form-model-item>
          <a-button
            type="primary"
            size="large"
            style="width: 100%"
            @click="handleSubmit"
            >登录</a-button
          >
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginPage",
  data() {
    return {
      form: {
        userName: undefined,
        password: undefined,
        remember: false,
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$store.dispatch("auth/login", this.form).then(() => {
        this.$router.replace("/");
      });
    },
  },
};
</script>

<style lang="less" scoped>
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .login-form-wrapper {
    margin-left: 300px;
    width: 320px;
    padding: 36px 24px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
}
</style>
