import HaoSearchTable from "./HaoSearchTable";
import HaoFilters from "./HaoFilters";
import HaoLinkButton from "./HaoLinkButton";

const components = { HaoLinkButton, HaoFilters, HaoSearchTable };

components.install = function (App) {
  Object.values(components).forEach((c) => {
    App.component(c.name, c);
  });
};

export default components;
