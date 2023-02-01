import _debounce from "lodash/debounce";
import _throttle from "lodash/throttle";
let fn = null;

export default function useDebunceDirective(Vue) {
  Vue.directive("debounce", {
    inserted: function (el, binding) {
      const { modifiers, arg } = binding;
      const time = 300;
      let _arg = {};
      if (arg) _arg = eval("(" + arg + ")");
      const { wait = time, leading = true, trailing = false } = _arg;
      if (modifiers.throttle) {
        // 节流
        fn = _throttle(binding.value, wait, {
          leading,
          trailing,
        });
      } else {
        // 防抖
        fn = _debounce(binding.value, wait, {
          leading,
          trailing,
        });
      }
      el.addEventListener("click", fn);
    },
    unbind: function (el) {
      fn && el.removeEventListener("click", fn);
    },
  });
  return Vue
}
