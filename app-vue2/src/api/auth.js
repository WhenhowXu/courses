import fetch from "@/utils/fetch";

export const login = (data) => fetch.post("/api/auth/login", data);
export const getUserInfo = () => fetch.get("/api/auth/getUserInfo");
export const logout = () => fetch.post("/api/auth/logout");
