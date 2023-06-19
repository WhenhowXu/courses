import HaoSearchTable from "./HaoSearchTable";
import HaoFilters from "./HaoFilters";

const components = { HaoFilters, HaoSearchTable };

components.install = function (App) {
  Object.values(components).forEach((c) => {
    App.component(c.name, c);
  });
};

export default components;
