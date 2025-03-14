import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import favouriteSlice from "./slices/favouriteSlice";
import themeSlice from "./slices/themeSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    isDarkMode: themeSlice,
    favourite: favouriteSlice,
    auth: authReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});