import HaoTable from "./HaoTable";

HaoTable.install = function (App) {
  const components = [HaoTable];
  components.forEach((c) => {
    App.component(c.name, c);
  });
};

export default HaoTable;
