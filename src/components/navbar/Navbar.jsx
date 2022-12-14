// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSearch,
//   faRightFromBracket,
//   faCircleUser,
//   faCircleHalfStroke,
// } from "@fortawesome/free-solid-svg-icons";
// import avatar from "../../assets/images/avatar.webp";
// import { Link } from "react-router-dom";
// import { ThemeContext } from "../../context/ThemeContext";
// import { AuthContext } from "../../context/AuthContext";
// import { doc, getDoc } from "firebase/firestore";
// import { signOut } from "firebase/auth";
// import { database, auth } from "../../firebaseConfig";

const Navbar = ({ general }) => {
  return (
    <nav className="site-nav">
      <div className="container">
        <a className="logo" href="#">
          <img src={general.logoImg} alt="" />
          {general.siteTitle}
        </a>
        <button className="menu-button" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="nav-wrapper">
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
        </div>
      </div>
    </nav>
  );
};
// <div classNameName="navbar">
//   <div classNameName="wrapper">
//     <div classNameName="input search">
//       <input type="text" placeholder="Search" />
//       <FontAwesomeIcon icon={faSearch} />
//     </div>
//     <div classNameName="items">
//       <div classNameName="item" onClick={() => dispatch({ type: "TOGGLE" })}>
//         <FontAwesomeIcon icon={faCircleHalfStroke} />
//         <span classNameName="title">Toggle Mode</span>
//       </div>
//       <div classNameName="item">
//         <div classNameName="info" onClick={() => setDropdown((prev) => !prev)}>
//           <img
//             src={profileInfo.imageLink ? profileInfo.imageLink : avatar}
//             alt="user-avatar"
//             classNameName="avatar"
//           />
//           <h4>{profileInfo.name}</h4>
//         </div>
//         <div classNameName={dropdown ? "dropdown active" : "dropdown"}>
//           <ul classNameName="options-list">
//             <li>
//               <Link to="profile">
//                 <FontAwesomeIcon icon={faCircleUser} />
//                 <span>Profile</span>
//               </Link>
//             </li>
//             <li onClick={() => Logout()}>
//               <FontAwesomeIcon icon={faRightFromBracket} />
//               <span>logout</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

export default Navbar;
