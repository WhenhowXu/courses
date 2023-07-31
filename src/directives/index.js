import debounce from "./debounce";
import copy from "./copy";
import watermark from "./watermark";
import ellipsis from "./ellipsis";
import hightLight from "./hightLight";
const directives = {
  copy,
  debounce,
  watermark,
  ellipsis,
  hightLight,
};

export default {
  install(Vue) {
    Object.keys(directives).forEach((k) => {
      Vue.directive(k, directives[k]);
    });
    return Vue;
  },
};
