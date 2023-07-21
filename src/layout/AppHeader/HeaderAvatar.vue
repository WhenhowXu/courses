<template>
  <a-dropdown>
    <a-avatar icon="user" />
    <a-menu slot="overlay" @click="handleMenuClick">
      <a-menu-item v-for="action in actions" :key="action.key">
        {{ action.name }}
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>
<script>
export default {
  name: "HeaderAvatar",
  data() {
    return {
      actions: [{ name: "退出登录", key: "logout" }],
    };
  },
  methods: {
    handleLogout() {
      this.$store.dispatch("auth/logout").then(() => {
        this.$router.push("/login");
      });
    },
    handleMenuClick(e) {
      switch (e.key) {
        case "logout":
          this.handleLogout();
          break;
        default:
          break;
      }
    },
  },
};
</script>
