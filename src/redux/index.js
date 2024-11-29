import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import themeSlice from "./slices/themeSlice"

export const store = configureStore({
  reducer: {
    isDarkMode: themeSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});