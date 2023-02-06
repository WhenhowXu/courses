export default {
  inserted(el, bind) {
    let clamps = Number(bind.arg) || 1
    el.style.display = "-webkit-box";
    el.style.overflow = "hidden";
    el.style.textOverflow = "ellipsis";
    el.style.whiteSpace = "no-wrap";
    el.style["-webkit-line-clamp"] = clamps;
    el.style["-webkit-box-orient"] = "vertical";
    el.title = bind.value;
  },
};
