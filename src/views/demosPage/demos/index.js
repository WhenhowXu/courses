import CssGraphs from "./css/Graphs/index.vue";
import CssBackground from "./css/Background/index.vue";
import AntdFormModelDemo from "./antd/FormModelDemo";
import AntdDirectoryTree from './antd/DirectoryTree';

const CSS_DEMOS = [
  { label: "Css图形", value: "Graphs", describe: "" },
  { label: "背景", value: "Background", describe: "" },
];
const ANTD_DEMOS = [
  { label: "formModel表单", value: "DirectoryTree", describe: "" },
];

export const DEMOS = [
  { label: "Antd", value: "Antd", describe: "", children: ANTD_DEMOS },
  { label: "Css", value: "Css", describe: "", children: CSS_DEMOS },
  { label: "Charts", value: "Charts", describe: "" },
];

export const DEMO_COMPONENTS = {
  CssGraphs,
  CssBackground,
  AntdFormModelDemo,
  AntdDirectoryTree
};
