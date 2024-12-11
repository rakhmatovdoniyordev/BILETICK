import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: JSON.parse(localStorage.getItem("theme")) || false,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("theme", JSON.stringify(state.isDarkMode))
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
