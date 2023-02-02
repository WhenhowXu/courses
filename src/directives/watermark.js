export function addWatermark(
  parentNode,
  {
    textColor = "rgba(180, 180, 180, 0.3)",
    font = "16px Microsoft JhengHei",
    text,
  } = {}
) {
  let can = document.createElement("canvas");
  parentNode.appendChild(can);
  can.width = 200;
  can.height = 150;
  can.style.display = "none";
  let cans = can.getContext("2d");
  cans.rotate((-20 * Math.PI) / 180);
  cans.font = font;
  cans.fillStyle = textColor;
  cans.textAlign = "left";
  cans.textBaseline = "Middle";
  cans.fillText(text, can.width / 10, can.height / 2);
  parentNode.style.backgroundImage = "url(" + can.toDataURL("image/png") + ")";
}
export default {
  bind: function (el, binding) {
    addWatermark(el, binding.value);
  },
};
