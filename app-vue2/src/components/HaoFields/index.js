import HaoRangeContainer from "./HaoRangeContainer";
import HaoYearPicker from "./HaoYearPicker";
import HaoNumberRange from "./HaoNumberRange";
import HaoRangeMonthPicker from "./HaoRangeMonthPicker";

const HaoFields = {
  HaoRangeContainer,
  HaoYearPicker,
  HaoNumberRange,
  HaoRangeMonthPicker,
};
HaoFields.install = (Vue) => {
  Object.values(HaoFields).forEach((c) => {
    Vue.component(c.name, c);
  });
  return Vue;
};
export default HaoFields;
