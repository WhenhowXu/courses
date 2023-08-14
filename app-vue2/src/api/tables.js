import { GET_USER_LIST } from './constants'
import { axios } from "@/api/utils";

export const getUsers = (data) => axios.post(GET_USER_LIST, data);