import fetch from "@/utils/fetch";

export const getMenus = (data) => fetch.post('/api/auth/getPermissions', data);
