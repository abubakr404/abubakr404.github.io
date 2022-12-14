import Divider from "../../components/divider/Divider";
import Social from "../../components/widget/social/Social";

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
            <p className="details">{heroDetails}</p>
            <div className="actions" role="group">
              <a href={leftLink} className="left-link">
                {leftLinkTitle}
              </a>
              <a href={rightLink} className="right-link">
                {rightLinkTitle}
              </a>
            </div>
            <Social />
          </div>
        </div>
        <div className="hero-figure col-lg-6 d-none d-lg-block position-relative">
          <div className="imgs-viewer position-absolute">
            <div className="imgs-container position-absolute">
              <img className="img-fluid" src="" alt="" />
            </div>
          </div>
          <img src="" alt="" className="cover-img img-fluid position-relative" />
          <a
            href={centerLink}
            className="btn btn-sm btn-primary position-absolute work-link"
          >
            {centerLinkTitle}
          </a>
        </div>
      </div>
      <a href="#" className="alt-work-link position-absolute d-block d-lg-none">
        <i className="fa fa-angles-down"></i>
      </a>
      <div className="divider-hero">
        <Divider />
      </div>
    </section>
  );
};

export default Hero;
