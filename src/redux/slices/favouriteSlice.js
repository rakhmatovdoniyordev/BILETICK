import { createSlice } from '@reduxjs/toolkit';

const favouriteSlice = createSlice({
  name: 'favoutite',
  initialState: {
    items: JSON.parse(localStorage.getItem("favourite")) || [],
  },
  reducers: {
    toggleFavourite: (state, action) => {
      const exists = state.items.find(item => item.id === action.payload.id);
      if (exists) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        localStorage.setItem("favourite", JSON.stringify(state.items))
      } else {
        state.items.push(action.payload);
        localStorage.setItem("favourite", JSON.stringify(state.items))
      }
    },
  },
});

export const { toggleFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;