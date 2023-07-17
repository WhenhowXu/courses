import { isMatch } from "lodash";

export const filterTreeData = (
  treeData,
  searchWords = "",
  { getMatchWord = (d) => d.name, filterLeaf = true } = {}
) => {
  function isMatchSearchWords(searchWord, searchItem) {
    return (getMatchWord(searchItem) || "").toLowerCase().includes(searchWord);
  }
  const lowerSearchWords = searchWords && searchWords.toLowerCase();
  return searchWords
    ? treeData.reduce((pre, d) => {
        const isItemMatch = isMatchSearchWords(lowerSearchWords, d);
        let isChildrenMatch;
        if (filterLeaf && d.children && d.children.every((v) => v.isLeaf)) {
          isChildrenMatch =
            isMatch ||
            d.children.some((c) => isMatchSearchWords(lowerSearchWords, c))
              ? d.children
              : void 0;
        } else {
          isChildrenMatch =
            d.children &&
            filterTreeData(d.children, lowerSearchWords, {
              getMatchWord,
              filterLeaf,
            });
        }
        if (isItemMatch || isChildrenMatch?.length) {
          pre.push({ ...d, children: isChildrenMatch });
        }
        return pre;
      }, [])
    : treeData;
};
