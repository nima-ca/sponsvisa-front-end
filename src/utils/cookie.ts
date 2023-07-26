import Cookies from "js-cookie";

export const isJsonString = (value: string): boolean => {
  try {
    JSON.parse(value);
  } catch (error) {
    return false;
  }
  return true;
};

export const setInCookies = (
  key: string,
  value: unknown,
  options?: Cookies.CookieAttributes,
): void => {
  Cookies.set(key, JSON.stringify(value), options);
};

export const getFromCookies = <T = unknown>(key: string): T | undefined => {
  const jsonValue = Cookies.get(key);
  if (jsonValue && isJsonString(jsonValue)) return JSON.parse(jsonValue) as T;
  return undefined;
};
