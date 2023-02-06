import { createSlice } from '@reduxjs/toolkit';

import type { Theme } from '../../styles/theme';
import { darkTheme, lightTheme } from '../../styles/theme';

export interface ThemeInfo {
  isDarkMode: boolean;
  theme: Theme;
}

export const initialState: ThemeInfo = {
  isDarkMode: false,
  theme: lightTheme,
};

export const themeSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      state.theme = state.isDarkMode ? darkTheme : lightTheme;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
