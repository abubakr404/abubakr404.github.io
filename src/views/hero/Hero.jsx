import Divider from "../../components/divider/Divider";
import Social from "../../components/social/Social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { useRef, useEffect } from "react";
import {
  personChair,
  ellipse,
  languages,
  pattern,
  screen,
  backgroundSec,
} from "../../assets/images";

const Hero = () => {
  const heroRef = useRef(null);
  const setHeroBackground = () => {
    heroRef.current.style.backgroundImage =
      document.body.offsetWidth <= 991
        ? `url(${ellipse}), url(${pattern}), var(--hero-gradient)`
        : `url(${ellipse}), url(${languages}), url(${pattern}), var(--hero-gradient)`;
  };
  window.addEventListener("resize", () => setHeroBackground());
  useEffect(() => {
    setHeroBackground();
  }, []);
  return (
    <section ref={heroRef} className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="content">
            <h1 className="display">Hey I'm Abubakr, Frontend developer</h1>
            <p className="lead">
              Here Iam gonna share everything about my life. Books Iam reading, Games Iam
              Playing, Stories and Events
            </p>
            <div className="actions" role="group">
              <a
                href="https://drive.google.com/file/d/1fDdCcaUDnjsP0SDb1-zTr1deGp7hpCbc/"
                className="link light left-link"
              >
                Get Resume
              </a>
              <a href="#contact" className="link right-link">
                Contact Me
              </a>
            </div>
            <Social />
          </div>
        </div>
        <div
          className="hero-figure"
          style={{
            backgroundImage: `url(${screen}), url(${backgroundSec})`,
          }}
        >
          <div className="imgs-viewer">
            <div className="imgs-container">
              <img className="img-fluid" src="" alt="" />
            </div>
          </div>
          <img src={personChair} alt="" className="cover-img" />
          <a href="#portfolio" className="link primary work-link">
            projects
          </a>
        </div>
      </div>
      <a href="#portfolio" className="alt-work-link">
        <FontAwesomeIcon icon={faAnglesDown} />
      </a>
      <div className="divider-hero">
        <Divider />
      </div>
    </section>
  );
};

export default Hero;
