import type { CookieSetOptions } from 'universal-cookie';
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import Cookies from 'universal-cookie';

import type { CookieAppRecords } from './records';

type CookieAppNames = keyof CookieAppRecords;

const appCookies = new Cookies();

export const setCookies = <T extends CookieAppNames>(
  name: T,
  value: CookieAppRecords[T],
  options?: CookieSetOptions,
): void => {
  appCookies.set(name, value, options);
};

export const getCookies = <T extends CookieAppNames>(
  name: T,
): CookieAppRecords[T] | undefined => {
  return appCookies.get(name);
};

export const getAllCookies = (): Partial<CookieAppRecords> => {
  return appCookies.getAll();
};

export const removeCookies = <T extends CookieAppNames>(name: T): void => {
  appCookies.remove(name);
};
