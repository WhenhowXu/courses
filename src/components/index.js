import ButtonContainer from "./ButtonContanier";
import HaoTable from "./HaoTable";
import { HaoYearPicker } from "./HaoFields";
import HIcon from "./HaoIcon";
const components = { ButtonContainer, HaoTable, HaoYearPicker, HIcon };

export default {
  install(Vue) {
    Object.keys(components).forEach((c) => {
      Vue.component(c, components[c]);
    });
    return Vue
  },
};
