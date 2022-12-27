import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { ThemeContextProvider } from "./context/ThemeContext";
import { NavContextProvider } from "./context/NavContext";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas, fab);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <NavContextProvider>
        <App />
      </NavContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
