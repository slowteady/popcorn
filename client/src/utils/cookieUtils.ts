import { Cookies } from "react-cookie";

// ----------------------------------------------------------------------
// 쿠키 사용 유틸
// ----------------------------------------------------------------------

const cookies = new Cookies();

export const setCookie = (name: string, value: any, options?: any) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string) => {
  return cookies.remove(name);
};
