import { FaHtml5, FaCss3Alt, FaSass, FaReact, FaVuejs } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import portfolioPattern from "@/assets/images/portfolio-pattern.svg";
import {
  abubakrDesktop,
  abubakrTablet,
  abubakrPhone,
  languagesHelperDesktop,
  languagesHelperTablet,
  languagesHelperPhone,
  kasperDesktop,
  kasperTablet,
  kasperPhone,
  elzeroTeamDesktop,
  elzeroTeamTablet,
  elzeroTeamPhone,
  sunysideDesktop,
  sunysideTablet,
  sunysidePhone,
  leonDesktop,
  leonTablet,
  leonPhone,
} from "@/assets/images";
import Project from "../project/Project";

const Portfolio = () => {
  const projects = [
    {
      desktopImg: languagesHelperDesktop,
      tabletImg: languagesHelperTablet,
      phoneImg: languagesHelperPhone,
      technologies: [FaHtml5, FaCss3Alt, FaJsSquare, FaSass, FaReact],
      projectName: "Languages Helper",
      projectDesinger: "Abubakr",
      desingerLink: "https://www.abubakr.co",
      liveLink: "https://abubakr404.github.io/language-helper/",
      projectRepo: "https://languages-helper.abubakr.co/",
    },
    {
      desktopImg: abubakrDesktop,
      tabletImg: abubakrTablet,
      phoneImg: abubakrPhone,
      technologies: [FaHtml5, FaCss3Alt, FaJsSquare, FaSass, FaReact],
      projectName: "Abubakr Website",
      projectDesinger: "Abubakr",
      desingerLink: "https://www.figma.com/file/sd7cX1lLaL6pMWDclQdoOA/Abubakr-site",
      liveLink: "https://abubakr404.github.io/abubakr-portfolio",
      projectRepo: "https://github.com/abubakr404/abubakr-portfolio",
    },
    {
      desktopImg: kasperDesktop,
      tabletImg: kasperTablet,
      phoneImg: kasperPhone,
      technologies: [FaHtml5, FaCss3Alt, FaJsSquare, FaSass, FaVuejs],
      projectName: "Kasper",
      projectDesinger: "Graphberry",
      desingerLink: "https://www.graphberry.com/item/kasper-one-page-creative-html-theme",
      liveLink: "https://abubakr404.github.io/elzero-tut-temp-2/",
      projectRepo: "https://github.com/abubakr404/elzero-tut-temp-2",
    },
    {
      desktopImg: elzeroTeamDesktop,
      tabletImg: elzeroTeamTablet,
      phoneImg: elzeroTeamPhone,
      technologies: [FaHtml5, FaCss3Alt, FaJsSquare, FaSass],
      projectName: "Elzero Team",
      projectDesinger: "Elzero.org",
      desingerLink: "https://elzero.org/html-css-practice-template-three/",
      liveLink: "https://abubakr404.github.io/elzero-tut-temp-3/",
      projectRepo: "https://github.com/abubakr404/elzero-tut-temp-3",
    },
    {
      desktopImg: sunysideDesktop,
      tabletImg: sunysideTablet,
      phoneImg: sunysidePhone,
      technologies: [FaHtml5, FaCss3Alt, FaJsSquare, FaSass, FaVuejs],
      projectName: "Sunyside",
      projectDesinger: "Forntend Mentor",
      desingerLink:
        "https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef",
      liveLink: "https://abubakr404.github.io/frontend-mentor-challenge-21/",
      projectRepo: "https://github.com/abubakr404/frontend-mentor-challenge-21",
    },
    {
      desktopImg: leonDesktop,
      tabletImg: leonTablet,
      phoneImg: leonPhone,
      technologies: [FaHtml5, FaCss3Alt, FaJsSquare, FaSass, FaVuejs],
      projectName: "Leon",
      projectDesinger: "Graphberry",
      desingerLink: "https://www.graphberry.com/item/leon-psd-agency-template",
      liveLink: "https://abubakr404.github.io/elzero-tut-temp-1/",
      projectRepo: "https://github.com/abubakr404/elzero-tut-temp-1",
    },
  ];

  return (
    <section
      className="portfolio"
      id="portfolio"
      style={{
        backgroundImage: `url(${portfolioPattern.src}), var(--second-surface)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        // backgroundClip: "border-box",
      }}
    >
      <h2 className="special-head" title="Latest Works">
        Latest Works
      </h2>
      <div className="container">
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
