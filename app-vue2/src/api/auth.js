import fetch from "@/utils/fetch";
import { AUTH_GET_USER_INFO, AUTH_LOGIN, AUTH_LOGOUT } from "./constants";

export const login = (data) => fetch.post(AUTH_LOGIN, data);
export const getUserInfo = () => fetch.get(AUTH_GET_USER_INFO);
export const logout = () => fetch.post(AUTH_LOGOUT);
