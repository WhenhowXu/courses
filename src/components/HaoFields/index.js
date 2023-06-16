import HaoYearPicker from "./HaoYearPicker";
import HaoMonthPicker from "./HaoMonthPicker";
import HaoNumberRange from "./HaoNumberRange";
const HaoFields = {
  HaoYearPicker,
  HaoMonthPicker,
  HaoNumberRange,
};
HaoFields.install = (Vue) => {
  Object.values(HaoFields).forEach((c) => {
    Vue.component(c.name, c);
  });
  return Vue;
};
export default HaoFields;
