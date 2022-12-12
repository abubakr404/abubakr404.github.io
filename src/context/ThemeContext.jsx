import { createContext, useReducer } from "react";
import ThemeReducer from "./ThemeReducer";

const INIT_STATE = false;

export const ThemeContext = createContext(INIT_STATE);

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ThemeReducer, INIT_STATE);
  return (
    <ThemeContext.Provider value={{ currentMode: state.currentMode, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
