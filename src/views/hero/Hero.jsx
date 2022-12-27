import Divider from "../../components/divider/Divider";
import Social from "../../components/widget/social/Social";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
const Hero = ({
  title,
  hero: {
    heroDetails,
    heroTitle,
    rightLink,
    rightLinkTitle,
    centerLink,
    centerLinkTitle,
    leftLink,
    leftLinkTitle,
  },
}) => {
  return (
    <section className="hero" id={title}>
      <div className="container">
        <div className="hero-content">
          <div className="content">
            <h1 className="display">{heroTitle}</h1>
            <p className="lead">{heroDetails}</p>
            <div className="actions" role="group">
              <a href={leftLink} className="link light left-link">
                {leftLinkTitle}
              </a>
              <a href={rightLink} className="link right-link">
                {rightLinkTitle}
              </a>
            </div>
            <Social />
          </div>
        </div>
        <div className="hero-figure">
          <div className="imgs-viewer">
            <div className="imgs-container">
              <img className="img-fluid" src="" alt="" />
            </div>
          </div>
          <img src="/images/person & chair.png" alt="" className="cover-img" />
          <a href={centerLink} className="link primary work-link">
            {centerLinkTitle}
          </a>
        </div>
      </div>
      <a href={centerLink} className="alt-work-link">
        <FontAwesomeIcon icon={faAnglesDown} />
      </a>
      <div className="divider-hero">
        <Divider />
      </div>
    </section>
  );
};

export default Hero;
