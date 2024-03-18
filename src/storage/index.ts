import { localStorageRecords, sessionStorageRecords } from './records';

const config = {
  prefix: import.meta.env.VITE_STORAGE_PREFIX,
};

export const setStoragePrefix = (prefix: string) => {
  config.prefix = prefix;
};

type StorageType = 'local' | 'session';

type GetTypeFromGuard<T> = T extends (value: unknown) => value is infer R
  ? R
  : never;

type LocalStorageRecords = {
  [K in keyof typeof localStorageRecords]: GetTypeFromGuard<
    (typeof localStorageRecords)[K]
  >;
};

type SessionStorageRecords = {
  [K in keyof typeof sessionStorageRecords]: GetTypeFromGuard<
    (typeof sessionStorageRecords)[K]
  >;
};

type StorageRecords<T extends StorageType> = T extends 'local'
  ? LocalStorageRecords
  : T extends 'session'
  ? SessionStorageRecords
  : never;

type StorageNames<T extends StorageType> = keyof StorageRecords<T>;

export const setStorage = <T extends StorageType, U extends StorageNames<T>>(
  type: T,
  key: U,
  value: StorageRecords<T>[U],
) => {
  const storage = type === 'local' ? localStorage : sessionStorage;
  const valueString = JSON.stringify(value);
  storage.setItem(`${config.prefix}${String(key)}`, valueString);
};

export const getStorage = <T extends StorageType, U extends StorageNames<T>>(
  type: T,
  key: U,
): StorageRecords<T>[U] | null => {
  const storage = type === 'local' ? localStorage : sessionStorage;
  const storageRecords =
    type === 'local' ? localStorageRecords : sessionStorageRecords;
  const valueString = storage.getItem(`${config.prefix}${String(key)}`);

  if (valueString) {
    const parsed = JSON.parse(valueString);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((storageRecords as any)[key](parsed)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return parsed as any;
    }
  }
  return null;
};

export const removeStorage = <T extends StorageType, U extends StorageNames<T>>(
  type: T,
  key: U,
) => {
  const storage = type === 'local' ? localStorage : sessionStorage;
  storage.removeItem(`${config.prefix}${String(key)}`);
};

export const clearStorage = (type: StorageType) => {
  const storage = type === 'local' ? localStorage : sessionStorage;
  storage.clear();
};
