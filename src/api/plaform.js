import { GET_LOGIN_ELEMENTS } from "./constants";
import { axios } from "@/api/utils";
export const getLogionElements = (params) =>
  axios.get(GET_LOGIN_ELEMENTS, params);
