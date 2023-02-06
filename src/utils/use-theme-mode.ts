import { useEffect, useState } from 'react';

import { getLocalStorageItem, setLocalStorageItem } from './local-storage';

type Theme = 'dark' | 'light';

const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState<Theme>('light');

  useEffect(() => {
    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';
    const localTheme = getLocalStorageItem('theme') as Theme;
    const initialTheme = localTheme || prefersColorScheme;
    setThemeMode(initialTheme);
  }, []);

  const setMode = (mode: Theme) => {
    setLocalStorageItem('theme', mode);
    setThemeMode(mode);
  };

  const themeToggler = () => {
    if (themeMode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  return [themeMode, themeToggler] as const;
};

export default useThemeMode;
