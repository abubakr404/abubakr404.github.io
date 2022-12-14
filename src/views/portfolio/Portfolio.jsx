import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faEye,
  faDesktop,
  faTabletAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faCss3Alt,
  faHtml5,
  faJsSquare,
  faReact,
  faSass,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebaseConfig";

const Portfolio = ({ title, headTitle }) => {
  const [shuffle, setShuffle] = useState("desktop");
  const [projects, setProjects] = useState(null);
  useEffect(() => {
    const getProjects = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(database, "projects"));
        querySnapshot.forEach((snapshot) => {
          list.push(snapshot.data());
        });
        setProjects(list);
      } catch (err) {
        console.log(err);
      }
    };
    getProjects();
  }, []);

  return (
    <section className="portfolio" id={title}>
      <h2 className="text-center special-head" title={headTitle}>
        {headTitle}
      </h2>
      <div className="container g-col-lg-3">
        {projects === null ? (
          <div className="loader-1">
            <span className="loading-1">loging...</span>
          </div>
        ) : (
          projects.map((project) => (
            <div className="work-card" key={project.id}>
              <div className="card-top">
                <div className="works-viewer">
                  <div className="work-shuffle">
                    {project.desktopImage && (
                      <button
                        onClick={() => setShuffle("desktop")}
                        className={shuffle === "desktop" ? "screen active" : "screen"}
                        title="desktop"
                      >
                        <FontAwesomeIcon icon={faDesktop} />
                        desktop
                      </button>
                    )}
                    {project.tabletImage && (
                      <button
                        onClick={() => setShuffle("tablet")}
                        className={shuffle === "tablet" ? "screen active" : "screen"}
                        title="tablet"
                      >
                        <FontAwesomeIcon icon={faTabletAlt} />
                        tablet
                      </button>
                    )}
                    {project.mobileImage && (
                      <button
                        onClick={() => setShuffle("mobile")}
                        className={shuffle === "mobile" ? "screen active" : "screen"}
                        title="mobile"
                      >
                        <FontAwesomeIcon icon={faMobileAlt} />
                        mobile
                      </button>
                    )}
                  </div>
                  <div className="imgs-container">
                    {shuffle === "desktop" && <img src={project.desktopImage} alt="" />}
                    {shuffle === "tablet" && <img src={project.tabletImage} alt="" />}
                    {shuffle === "mobile" && <img src={project.mobileImage} alt="" />}
                  </div>
                </div>
                <div className="technologies">
                  <div className="technologies-container">
                    <ul className="technologies">
                      {project.technologies.html5.status && (
                        <li>
                          <FontAwesomeIcon icon={faHtml5} />
                        </li>
                      )}
                      {project.technologies.css3.status && (
                        <li>
                          <FontAwesomeIcon icon={faCss3Alt} />
                        </li>
                      )}
                      {project.technologies.javascript.status && (
                        <li>
                          <FontAwesomeIcon icon={faJsSquare} />
                        </li>
                      )}
                      {project.technologies.sass.status && (
                        <li>
                          <FontAwesomeIcon icon={faSass} />
                        </li>
                      )}
                      {project.technologies.react.status && (
                        <li>
                          <FontAwesomeIcon icon={faReact} />
                        </li>
                      )}
                      {project.technologies.vuejs.status && (
                        <li>
                          <FontAwesomeIcon icon={faVuejs} />
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-bottom">
                <div className="card-info">
                  <h5 className="card-title" title={project.projectName}>
                    {project.projectName}
                  </h5>
                  <a
                    className="card-text"
                    href={project.desingerLink}
                    target="_blank"
                    title={project.projectDesinger}
                  >
                    <FontAwesomeIcon icon={faPalette} />
                    {project.projectDesinger}
                  </a>
                </div>
                <div className="card-actions">
                  <a
                    className="btn btn-light action"
                    href={project.projectRepo}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    View Code
                  </a>
                  <a
                    className="btn btn-light action"
                    href={project.liveLink}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faEye} />
                    Live Version
                  </a>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Portfolio;
