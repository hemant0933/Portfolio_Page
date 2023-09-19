import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: 'light',
  },
  reducers: {
    setTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;