import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faEnvelope,
  faUsers,
  faFolder,
  faRss,
  faCircleUser,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="" className="logo-image" />
          <span>Abubakr</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <FontAwesomeIcon icon={faGauge} />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="clients">
              <FontAwesomeIcon icon={faUsers} />
              <span>Clients</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="messages">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Messages</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="projects">
              <FontAwesomeIcon icon={faFolder} />
              <span>Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="blogs">
              <FontAwesomeIcon icon={faRss} />
              <span>Blogs</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="profile">
              <FontAwesomeIcon icon={faCircleUser} />
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="settings">
              <FontAwesomeIcon icon={faGear} />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
