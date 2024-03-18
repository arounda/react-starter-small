export const isString = (value: unknown): value is string => {
  return typeof value === 'string';
};

export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === 'boolean';
};

export const isNumber = (value: unknown): value is number => {
  return typeof value === 'number';
};

export const isObject = (value: unknown): value is object => {
  return typeof value === 'object' && value !== null;
};

export const isArray = <T extends unknown[]>(value: unknown): value is T => {
  return Array.isArray(value);
};
