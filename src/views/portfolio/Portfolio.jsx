import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebaseConfig";
import Spinner from "../../components/spinner/Spinner";

const Portfolio = ({ title, headTitle }) => {
  const [zoomPro, setZoomPro] = useState({ projectNum: 0, isZoomed: false });
  const [shuffle, setShuffle] = useState(0);
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
        setProjects(null);
        console.log(err);
      }
    };
    getProjects();
  }, []);

  return (
    <section className="portfolio" id={title}>
      <h2 className="special-head" title={headTitle}>
        {headTitle}
      </h2>
      <div className="container">
        {projects === null ? (
          <Spinner />
        ) : (
          projects.map((project, i) => (
            <div
              className={
                zoomPro.isZoomed && zoomPro.projectNum === i
                  ? "work-card zoomed"
                  : "work-card"
              }
              key={project.id}
            >
              <div className="card-top">
                {project.images !== null && (
                  <div className="works-viewer">
                    <div className="work-shuffle">
                      {Object.entries(project.images).map((image, imgI) => (
                        <button
                          key={imgI}
                          onClick={() => {
                            setShuffle(imgI);
                          }}
                          className={shuffle === imgI ? "screen active" : "screen"}
                          title={image[0]}
                        >
                          <FontAwesomeIcon icon={image[1].icon} />
                        </button>
                      ))}
                    </div>
                    <div
                      className="imgs-container"
                      onClick={() =>
                        setZoomPro((prevData) => ({
                          projectNum: i,
                          isZoomed: !prevData.isZoomed,
                        }))
                      }
                    >
                      {Object.entries(project.images).map((image, imgI) => (
                        <img
                          key={imgI}
                          src={image[1].url}
                          className={shuffle === imgI ? "active" : undefined}
                          alt=""
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div className="technologies">
                  <ul className="technologies-container">
                    {project.technologies.map(
                      (techonlogy, i) =>
                        techonlogy.isChecked && (
                          <li key={i}>
                            <FontAwesomeIcon icon={techonlogy.icon} />
                          </li>
                        )
                    )}
                  </ul>
                </div>
              </div>
              <div className="card-bottom">
                <div className="card-info">
                  <h5 className="one-line title" title={project.projectName}>
                    {project.projectName}
                  </h5>
                  <a
                    className="one-line text"
                    href={project.desingerLink}
                    target="_blank"
                    title={project.projectDesinger}
                  >
                    <FontAwesomeIcon icon="fa fa-palette" />
                    {project.projectDesinger}
                  </a>
                </div>
                <div className="card-actions">
                  <a
                    className="link light action"
                    href={project.liveLink}
                    target="_blank"
                  >
                    <FontAwesomeIcon icon="fa fa-eye" />
                    Live Version
                  </a>
                  <a className="link action" href={project.projectRepo} target="_blank">
                    <FontAwesomeIcon icon="fab fa-github" />
                    View Code
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
