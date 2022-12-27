import { createContext, useReducer } from "react";
import NavReducer from "./NavReducer";

const INIT_STATE = false;

export const NavContext = createContext(INIT_STATE);

export const NavContextProvider = ({ children }) => {
  const [navState, navDispatch] = useReducer(NavReducer, INIT_STATE);
  return (
    <NavContext.Provider
      value={{ isFilled: navState.isFilled, isOpened: navState.isOpened, navDispatch }}
    >
      {children}
    </NavContext.Provider>
  );
};
