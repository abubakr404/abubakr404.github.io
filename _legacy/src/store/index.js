import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./theme-slice";
import navbarSlice from "./navbar-slice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    navbar: navbarSlice.reducer,
  },
});

export default store;
