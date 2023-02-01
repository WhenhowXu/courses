import useDebunceDirective from "./useDebunceDirective";
import useCopyDirective from "./useCopyDirective";
export const useDirectives = function (Vue) {
  useDebunceDirective(Vue)
  useCopyDirective(Vue);
  return Vue;
};

export default useDirectives;
export { useDebunceDirective, useCopyDirective };
