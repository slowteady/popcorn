import { Cookies } from 'react-cookie';
import { Cookie, CookieSetOptions } from 'universal-cookie';

const DEFAULT_OPTION = {
  path: '/'
};

const cookies = new Cookies();

export const setCookie = (name: string, value: Cookie, options?: CookieSetOptions) => {
  return cookies.set(name, value, { ...DEFAULT_OPTION, ...options });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const removeCookie = (name: string, options?: CookieSetOptions) => {
  return cookies.remove(name, { ...DEFAULT_OPTION, ...options });
};
