import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktopAlt,
  faTabletAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Project = ({
  desktopImg,
  tabletImg,
  phoneImg,
  technologies,
  projectName,
  projectDesinger,
  desingerLink,
  liveLink,
  projectRepo,
}) => {
  const [isZoomed, setIsZoom] = useState(false);
  const [shuffle, setShuffle] = useState("desktop");

  return (
    <div className={isZoomed ? "work-card zoomed" : "work-card"}>
      <div className="card-top">
        <div className="works-viewer">
          <div className="work-shuffle">
            {desktopImg && (
              <button
                onClick={() => {
                  setShuffle("desktop");
                }}
                className={shuffle === "desktop" ? "screen active" : "screen"}
                title="desktop"
              >
                <FontAwesomeIcon icon={faDesktopAlt} />
              </button>
            )}
            {tabletImg && (
              <button
                onClick={() => {
                  setShuffle("tablet");
                }}
                className={shuffle === "tablet" ? "screen active" : "screen"}
                title="tablet"
              >
                <FontAwesomeIcon icon={faTabletAlt} />
              </button>
            )}
            {phoneImg && (
              <button
                onClick={() => {
                  setShuffle("phone");
                }}
                className={shuffle === "phone" ? "screen active" : "screen"}
                title="phone"
              >
                <FontAwesomeIcon icon={faMobileAlt} />
              </button>
            )}
          </div>
          <div
            className="imgs-container"
            onClick={() => setIsZoom((prevData) => !prevData)}
          >
            {desktopImg && (
              <img
                src={desktopImg}
                className={shuffle === "desktop" ? "active" : undefined}
                loading="lazy"
                alt=""
              />
            )}
            {tabletImg && (
              <img
                src={tabletImg}
                className={shuffle === "tablet" ? "active" : undefined}
                loading="lazy"
                alt=""
              />
            )}
            {phoneImg && (
              <img
                src={phoneImg}
                className={shuffle === "phone" ? "active" : undefined}
                loading="lazy"
                alt=""
              />
            )}
          </div>
        </div>
        <div className="technologies">
          <ul className="technologies-container">
            {technologies.map((techonlogy, i) => (
              <li key={i}>
                <FontAwesomeIcon icon={techonlogy} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card-bottom">
        <div className="card-info">
          <h5 className="one-line title" title={projectName}>
            {projectName}
          </h5>
          <a
            className="one-line text"
            href={desingerLink}
            target="_blank"
            title={projectDesinger}
          >
            <FontAwesomeIcon icon="fa fa-palette" />
            {projectDesinger}
          </a>
        </div>
        <div className="card-actions">
          <a className="link light action" href={liveLink} target="_blank">
            <FontAwesomeIcon icon="fa fa-eye" />
            Live Version
          </a>
          <a className="link action" href={projectRepo} target="_blank">
            <FontAwesomeIcon icon="fab fa-github" />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
