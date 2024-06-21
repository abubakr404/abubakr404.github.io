import { FaPalette, FaEye, FaGithub } from "react-icons/fa6";
import { FaDesktop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
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
                <FaDesktop />
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
                <FaTabletAlt />
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
                <FaMobileAlt />
              </button>
            )}
          </div>
          <div className="imgs-container" onClick={() => setIsZoom((prevData) => !prevData)}>
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
            {technologies.map((Techonlogy, i) => (
              <li key={i}>{<Techonlogy />}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card-bottom">
        <div className="card-info">
          <h5 className="one-line title" title={projectName}>
            {projectName}
          </h5>
          <a className="one-line text" href={desingerLink} target="_blank" title={projectDesinger}>
            <FaPalette />
            {projectDesinger}
          </a>
        </div>
        <div className="card-actions">
          <a className="link light action" href={liveLink} target="_blank">
            <FaEye />
            Live Version
          </a>
          <a className="link action" href={projectRepo} target="_blank">
            <FaGithub />
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
