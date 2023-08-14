import { LOGIN, GET_MENUS_BUTTONS } from "./constants";
import { axios } from "@/api/utils";

export const login = (params) => axios.get(LOGIN, params);
export const getMenus = (data) => axios.post(GET_MENUS_BUTTONS, data).then(res=>res.data);
