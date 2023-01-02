import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { SiteDataContext } from "../../context/SiteDataContext";
import { NavContext } from "../../context/NavContext";
import Loader from "../loader/Loader";
import Divider from "../divider/Divider";

const Layout = forwardRef((props, ref) => {
  const data = useContext(SiteDataContext);
  const headerRef = useRef(null);
  const { isOpened, isFilled, navDispatch } = useContext(NavContext);

  useImperativeHandle(ref, () => ({
    fillToggle() {
      if (headerRef.current.offsetTop > 0) {
        navDispatch({ type: "FILLED" });
      } else if (
        headerRef.current.offsetTop <= headerRef.current.offsetHeight &&
        !isOpened
      ) {
        navDispatch({ type: "NOTFILLED" });
      }
    },
  }));

  return data === null ? (
    <Loader />
  ) : (
    <>
      <header ref={headerRef} className={isFilled ? "filled" : undefined}>
        <Navbar general={data.general} />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="divider-footer">
          <Divider />
        </div>
        <p>
          Designed and Powered by -<span className="name">{data.general.siteTitle}</span>©
          {new Date().getFullYear()}
        </p>
      </footer>
    </>
  );
});

export default Layout;
