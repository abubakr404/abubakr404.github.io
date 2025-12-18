import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { navbarActions } from "../../store/navbar-slice";
import { themeActions } from "../../store/theme-slice";
import { logo } from "../../assets/images";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isOpened } = useSelector((state) => state.navbar);

  return (
    <nav className="site-nav">
      <div className="container">
        <a className="logo" href="/">
          <img src={logo} alt="" />
          Abubakr
        </a>
        <button
          className="menu-button"
          onClick={() => dispatch(navbarActions.toggleNavbar())}
        >
          <FontAwesomeIcon icon="fa fa-bars" />
        </button>
        <div className={isOpened ? "nav-wrapper open" : "nav-wrapper"}>
          <ul className="nav-list">
            <li>
              <a className="nav-link active" href="#home">
                home
              </a>
            </li>
            <li>
              <a className="nav-link" href="#about">
                about
              </a>
            </li>
            <li>
              <a className="nav-link" href="#portfolio">
                portfolio
              </a>
            </li>
            <li>
              <a className="nav-link" href="#blogs">
                blogs
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
                contact
              </a>
            </li>
          </ul>
          <button
            className="link light theme-button"
            onClick={() => dispatch(themeActions.toggle())}
          >
            <FontAwesomeIcon icon="fa fa-circle-half-stroke" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
