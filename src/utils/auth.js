import JSCookie from "js-cookie";

const TOKEN_KEY = "Auth";

export function getToken() {
  return JSCookie.get(TOKEN_KEY);
}
export function setToken(token) {
  return JSCookie.set(TOKEN_KEY, token);
}
export function removeToken() {
  return JSCookie.remove(TOKEN_KEY);
}
