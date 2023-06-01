import { GET_LOGIN_ELEMENTS, LOGIN } from "./constants";
import { axios } from "@/api/utils";

export const getLogionElements = (params) =>
  axios.get(GET_LOGIN_ELEMENTS, params);

export const login = (params) => axios.get(LOGIN, params);
