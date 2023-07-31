const handleHightLight = function (el, binding) {
  const { value } = binding || {};
  const { text, keyWords, hightLightStyle = "background:orange" } = value;
  if (!text) return;
  if (!keyWords) {
    el.innerHTML = text;
    return;
  }
  el.innerHTML = text.replace(new RegExp(keyWords, "ig"), (a) => {
    return `<span style="${hightLightStyle}">${a}</span>`;
  });
};
export default {
  bind: handleHightLight.bind(this),
  update: handleHightLight.bind(this),
};
