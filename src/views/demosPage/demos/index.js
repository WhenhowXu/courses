import CssGraphs from "./css/Graphs/index.vue";
import CssBackground from "./css/Background/index.vue";

const CSS_DEMOS = [
  { label: "Css图形", value: "Graphs", describe: "" },
  { label: "背景", value: "Background", describe: "" },
];
const ANTD_DEMOS = [];

export const DEMOS = [
  { label: "Css", value: "Css", describe: "", children: CSS_DEMOS },
  { label: "Antd", value: "Antd", describe: "", children: ANTD_DEMOS },
  { label: "Charts", value: "Charts", describe: "" },
];

export const DEMO_COMPONENTS = {
  CssGraphs,
  CssBackground,
};
