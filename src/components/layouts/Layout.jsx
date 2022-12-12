// import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="divider-footer position-absolute"></div>
        <p>
          Designed and Powered by -<span className="name">Abubakr</span>
          ©2022
        </p>
      </footer>
    </>
  );
};

export default Layout;
