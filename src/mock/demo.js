import { v4 as uuidv4 } from "uuid";
function Demo(options) {
  this.id = uuidv4();
  ["title", "descirbe", "keywords"].forEach((k) => {
    this[k] = options[k];
  });
  return this;
}
export const DMEOS = [
  new Demo({
    title: "打印",
    descirbe: "",
    path: ''
  }),
  new Demo({
    title:''
  })
];


