import Main from "./views/main/Main";
import Layout from "./components/layouts/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { SiteDataContext } from "./context/SiteDataContext";
import { collection, getDocs } from "firebase/firestore";
import { database } from "./firebaseConfig";

const App = () => {
  const { currentMode } = useContext(ThemeContext);
  const [siteData, setSiteData] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const getSiteData = async () => {
      try {
        const querySnapshot = await getDocs(collection(database, "settings"));
        let list = {};
        querySnapshot.forEach(
          (setup) => (list = { ...list, [setup.id]: { ...setup.data() } })
        );
        setSiteData(list);
      } catch (err) {
        setSiteData(null);
        console.log(err);
      }
    };
    getSiteData();
  }, []);

  return (
    <div
      className={currentMode ? "app toggleMode" : "app"}
      onScroll={() => {
        headerRef.current.fillToggle();
      }}
    >
      <SiteDataContext.Provider value={siteData}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout ref={headerRef} />}>
              <Route index element={<Main />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SiteDataContext.Provider>
    </div>
  );
};

export default App;
