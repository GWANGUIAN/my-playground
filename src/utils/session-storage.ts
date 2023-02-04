/* eslint-disable unicorn/no-null */
export const setSessionStorageItem = (key: string, value: string) =>
  typeof window !== 'undefined' && sessionStorage?.setItem(key, value);

export const getSessionStorageItem = (key: string): string | null =>
  typeof window !== 'undefined' ? sessionStorage?.getItem(key) ?? '' : null;

export const removeSessionStorageItem = (key: string) =>
  typeof window !== 'undefined' && sessionStorage?.removeItem(key);
