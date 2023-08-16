import fetch from "@/utils/fetch";

// 用户列表
export const fetchUsers = (data) => fetch.post(`/api/user/list`, data);
// 新增用户
export const createUser = (data) => fetch.post(`/api/user/create`, data);
// 删除用户
export const deleteUser = (userId) =>
  fetch.delete(`/api/user/delete`, { params: { userId } });
// 修改用户
export const updateUser = (data) => fetch.post(`/api/user/update`, data);
