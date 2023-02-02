import debounce from "./debounce";
import copy from "./copy";
import watermark from "./watermark";

const directives = {
  copy,
  debounce,
  watermark,
};

export default {
  install(Vue) {
    Object.keys(directives).forEach((k) => {
      Vue.directive(k, directives[k]);
    });
    return Vue;
  },
};
