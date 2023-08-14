import { generateApi } from "@/utils/generateApi";

export const getUserList = ({ pageSize = 50 } = {}) => {
  return generateApi({
    records: Array.from({ length: pageSize }).map((v, index) => {
      return {
        id: index,
        userName: "西门吹风",
        remark: "我是一天很长的备注",
        age: (index % 3) + 11,
        year: 2000,
        month: "7月",
        city: "咸宁",
        class: "一年级（1）班",
      };
    }),
    total: 1000,
  });
};
