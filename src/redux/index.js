import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import favouriteSlice from "./slices/favouriteSlice";
import themeSlice from "./slices/themeSlice"

export const store = configureStore({
  reducer: {
    isDarkMode: themeSlice,
    favourite: favouriteSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});