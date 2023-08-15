import fetch from "@/utils/fetch";

export const fetchUsers = (data) => fetch.post(`/api/user/list`, data);
