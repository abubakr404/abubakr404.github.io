import Main from "./views/main/Main";
import Layout from "./components/layouts/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { currentMode } = useContext(ThemeContext);

  return (
    <div className={currentMode ? "app toggleMode" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
