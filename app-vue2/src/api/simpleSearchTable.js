import { generateApi } from "@/utils";

let list = [];
for (let i = 0; i < 100; i++) {
  list.push({
    id: i,
    name: "西门吹吹凤" + i,
    createTime: "2023-01-01 10:30:30",
    bothYear: 1990,
    bothMonth: 1,
    age: 23,
    city: "北京",
    remark: "一段很长很长的备注",
  });
}
export const fetchList = (params) =>
  generateApi({
    data: list.slice(
      (params.page - 1) * params.size,
      params.page * params.size
    ),
    total: list.length - 1,
  });
