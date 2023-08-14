export function toTranslateLabels(options) {
  const labels = {};
  function toLabels(options, labels) {
    if (options?.length) {
      options.forEach((j) => {
        labels[j.value] = j.label;
        if (j.children?.length) {
          toLabels(j.children, labels);
        }
      });
    }
  }
  toLabels(options, labels);
  return labels;
}
