import { useRef } from "react";
import Main from "./views/main/Main";
import { navbarActions } from "./store/navbar-slice";
import Navbar from "./components/navbar/Navbar";
import Divider from "./components/divider/Divider";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const currentMode = useSelector((state) => state.theme.mode);
  const headerRef = useRef(null);

  const { isOpened, isFilled } = useSelector((state) => state.navbar);

  const dispatch = useDispatch();

  const fillToggle = () => {
    if (headerRef.current.offsetTop > 0) {
      dispatch(navbarActions.filled(true));
    } else if (
      headerRef.current.offsetTop <= headerRef.current.offsetHeight &&
      !isOpened
    ) {
      dispatch(navbarActions.filled(false));
    }
  };

  return (
    <div className={currentMode ? "app toggleMode" : "app"} onScroll={() => fillToggle()}>
      <header ref={headerRef} className={isFilled ? "filled" : undefined}>
        <Navbar />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <div className="divider-footer">
          <Divider />
        </div>
        <p>
          Designed and Powered by -<span className="name">Abubakr</span>©
          {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default App;
