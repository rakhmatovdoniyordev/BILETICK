import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: /* localStorage.getItem("theme")  || */ true,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      /* localStorage.setItem("theme", state.isDarkMode) */
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
