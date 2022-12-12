// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSearch,
//   faRightFromBracket,
//   faCircleUser,
//   faCircleHalfStroke,
// } from "@fortawesome/free-solid-svg-icons";
// import avatar from "../../assets/images/avatar.webp";
// import { useContext, useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { ThemeContext } from "../../context/ThemeContext";
// import { AuthContext } from "../../context/AuthContext";
// import { doc, getDoc } from "firebase/firestore";
// import { signOut } from "firebase/auth";
// import { database, auth } from "../../firebaseConfig";

const Navbar = () => {
  // const [dropdown, setDropdown] = useState(false);
  // const [profileInfo, setProfileInfo] = useState({
  //   name: "",
  //   email: "",
  //   imageLink: "",
  // });
  // const { dispatch } = useContext(ThemeContext);
  // const { dispatchAuth } = useContext(AuthContext);

  // useEffect(() => {
  //   const getProfileInfo = async () => {
  //     try {
  //       const querySnapshot = await getDoc(doc(database, "settings", "profile"));
  //       setProfileInfo(querySnapshot.data());
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getProfileInfo();
  // }, []);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="logo navbar-brand" href="#">
          <img src="" alt="" />
          Abubakr
        </a>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="nav-wrapper">
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
