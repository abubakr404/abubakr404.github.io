import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import themeSlice from "./theme-slice";
import navbarSlice from "./navbar-slice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    navbar: navbarSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
