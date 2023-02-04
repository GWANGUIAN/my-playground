import { createSlice } from '@reduxjs/toolkit';

export interface TempInfo {
  id: number;
}

const initialState: TempInfo = {
  id: 0,
};

export const tempSlice = createSlice({
  name: 'temps',
  initialState,
  reducers: {
    setTemp: (state, action) => {
      state = action.payload;
    },
    resetTemp: (state) => {
      state.id = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTemp, resetTemp } = tempSlice.actions;

export default tempSlice.reducer;
