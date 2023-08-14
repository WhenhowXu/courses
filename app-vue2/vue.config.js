const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  productionSourceMap: false,
  publicPath: "/",
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3009",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
});
