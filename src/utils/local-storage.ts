export const setLocalStorageItem = (key: string, value: string) =>
  typeof window !== 'undefined' && localStorage?.setItem(key, value);

export const getLocalStorageItem = (key: string): string =>
  typeof window !== 'undefined' ? localStorage?.getItem(key) ?? '' : '';

export const removeLocalStorageItem = (key: string) =>
  typeof window !== 'undefined' && localStorage?.removeItem(key);

export const registerLocalStorageListener = (
  handler: (event: StorageEvent) => void,
) =>
  typeof window !== 'undefined' && window.addEventListener('storage', handler);

export const unregisterLocalStorageListener = (
  handler: (event: StorageEvent) => void,
) =>
  typeof window !== 'undefined' &&
  window.removeEventListener('storage', handler);
