import { v4 as uuidV4 } from "uuid";
import { generateApi } from "@/utlis";

const list = new Array(100).fill({}).map(() => {
  return { id: uuidV4(), name: "张三" };
});
export const fetchList = (params) =>
  generateApi({
    data: list.slice(
      (params.page - 1) * params.size,
      params.page * params.size
    ),
    total: list.length - 1,
  });
