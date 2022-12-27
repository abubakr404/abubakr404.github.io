import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { NavContext } from "../../context/NavContext";
import { ThemeContext } from "../../context/ThemeContext";

const Navbar = ({ general }) => {
  const { dispatch } = useContext(ThemeContext);
  const { isOpened, navDispatch } = useContext(NavContext);

  const handleNavDrop = () => {
    navDispatch({ type: "TOGGLEOPEN" });
  };

  return (
    <nav className="site-nav">
      <div className="container">
        <a className="logo" href="#">
          <img src={general.logoImg} alt="" />
          {general.siteTitle}
        </a>
        <button className="menu-button" onClick={handleNavDrop}>
          <FontAwesomeIcon icon="fa fa-bars" />
        </button>
        <div className={isOpened ? "nav-wrapper open" : "nav-wrapper"}>
          <ul className="nav-list">
            <li>
              <a className="nav-link active" href={`#${general.heroNavigatorTitle}`}>
                {general.heroNavigatorTitle}
              </a>
            </li>
            <li>
              <a className="nav-link" href={`#${general.aboutNavigatorTitle}`}>
                {general.aboutNavigatorTitle}
              </a>
            </li>
            <li>
              <a className="nav-link" href={`#${general.portfolioNavigatorTitle}`}>
                {general.portfolioNavigatorTitle}
              </a>
            </li>
            <li>
              <a className="nav-link" href={`#${general.blogsNavigatorTitle}`}>
                {general.blogsNavigatorTitle}
              </a>
            </li>
            <li>
              <a className="nav-link" href={`#${general.contactNavigatorTitle}`}>
                {general.contactNavigatorTitle}
              </a>
            </li>
          </ul>
          <button
            className="link light theme-button"
            onClick={() => dispatch({ type: "TOGGLE" })}
          >
            <FontAwesomeIcon icon="fa fa-circle-half-stroke" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
