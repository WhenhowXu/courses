import { generateApi } from "@/utlis";
const LIST = Array.from({ length: 1000 });
export const getUserList = (params) => {
  return generateApi({
    status: "success",
    data: {
      records: LIST.slice(
        (params.page - 1) * params.size,
        params.page * params.size
      ),
      total: LIST.length,
      page: params.page,
      size: params.size,
    },
  });
};
