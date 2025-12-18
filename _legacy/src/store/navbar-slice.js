import { createSlice } from "@reduxjs/toolkit";

const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    isFilled: false,
    isOpened: false,
  },
  reducers: {
    toggleNavbar(state) {
      state.isOpened = !state.isOpened;
      state.isFilled = state.isOpened ? true : state.isFilled;
    },
    filled(state, actions) {
      state.isFilled = actions.payload;
    },
  },
});

export const navbarActions = navbarSlice.actions;
export default navbarSlice;
