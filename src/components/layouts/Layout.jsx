import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { SiteDataContext } from "../../context/SiteDataContext";
import Loader from "../loader/Loader";
import Divider from "../divider/Divider";

const Layout = () => {
  const data = useContext(SiteDataContext);
  return data === null ? (
    <Loader />
  ) : (
    <>
      <header>
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
          Designed and Powered by -<span className="name">{data.general.siteTitle}</span>
          ©2022
        </p>
      </footer>
    </>
  );
};

export default Layout;
