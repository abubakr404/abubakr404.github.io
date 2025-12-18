import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faSass,
  faReact,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import {
  portfolioPattern,
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
} from "../../assets/images";
import Project from "../project/Project";

const Portfolio = () => {
  return (
    <section
      className="portfolio"
      id="portfolio"
      style={{
        backgroundImage: `url(${portfolioPattern}), var(--second-surface)`,
      }}
    >
      <h2 className="special-head" title="Latest Works">
        Latest Works
      </h2>
      <div className="container">
        <Project
          desktopImg={languagesHelperDesktop}
          tabletImg={languagesHelperTablet}
          phoneImg={languagesHelperPhone}
          technologies={[faHtml5, faCss3Alt, faJsSquare, faSass, faReact]}
          projectName="Languages Helper"
          projectDesinger="Abubakr"
          desingerLink="https://www.abubakr.co"
          liveLink="https://abubakr404.github.io/language-helper/"
          projectRepo="https://languages-helper.abubakr.co/"
        />
        <Project
          desktopImg={abubakrDesktop}
          tabletImg={abubakrTablet}
          phoneImg={abubakrPhone}
          technologies={[faHtml5, faCss3Alt, faJsSquare, faSass, faReact]}
          projectName="Abubakr Website"
          projectDesinger="Abubakr"
          desingerLink="https://www.figma.com/file/sd7cX1lLaL6pMWDclQdoOA/Abubakr-site"
          liveLink="https://abubakr404.github.io/abubakr-portfolio"
          projectRepo="https://github.com/abubakr404/abubakr-portfolio"
        />
        <Project
          desktopImg={kasperDesktop}
          tabletImg={kasperTablet}
          phoneImg={kasperPhone}
          technologies={[faHtml5, faCss3Alt, faJsSquare, faSass, faVuejs]}
          projectName="Kasper"
          projectDesinger="Graphberry"
          desingerLink="https://www.graphberry.com/item/kasper-one-page-creative-html-theme"
          liveLink="https://abubakr404.github.io/elzero-tut-temp-2/"
          projectRepo="https://github.com/abubakr404/elzero-tut-temp-2"
        />
        <Project
          desktopImg={elzeroTeamDesktop}
          tabletImg={elzeroTeamTablet}
          phoneImg={elzeroTeamPhone}
          technologies={[faHtml5, faCss3Alt, faJsSquare, faSass]}
          projectName="Elzero Team"
          projectDesinger="Elzero.org"
          desingerLink="https://elzero.org/html-css-practice-template-three/"
          liveLink="https://abubakr404.github.io/elzero-tut-temp-3/"
          projectRepo="https://github.com/abubakr404/elzero-tut-temp-3"
        />
        <Project
          desktopImg={sunysideDesktop}
          tabletImg={sunysideTablet}
          phoneImg={sunysidePhone}
          technologies={[faHtml5, faCss3Alt, faJsSquare, faSass, faVuejs]}
          projectName="Sunyside"
          projectDesinger="Forntend Mentor"
          desingerLink="https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef"
          liveLink="https://abubakr404.github.io/frontend-mentor-challenge-21/"
          projectRepo="https://github.com/abubakr404/frontend-mentor-challenge-21"
        />
        <Project
          desktopImg={leonDesktop}
          tabletImg={leonTablet}
          phoneImg={leonPhone}
          technologies={[faHtml5, faCss3Alt, faJsSquare, faSass, faVuejs]}
          projectName="Leon"
          projectDesinger="Graphberry"
          desingerLink="https://www.graphberry.com/item/leon-psd-agency-template"
          liveLink="https://abubakr404.github.io/elzero-tut-temp-1/"
          projectRepo="https://github.com/abubakr404/elzero-tut-temp-1"
        />
      </div>
    </section>
  );
};

export default Portfolio;
