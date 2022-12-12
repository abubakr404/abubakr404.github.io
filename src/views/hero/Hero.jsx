const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="content">
            <h1 className="display">test</h1>
            <p className="details">details</p>
            <div className="actions" role="group">
              <a href="#" className="left-link">
                left
              </a>
              <a href="#" className="right-link">
                right
              </a>
            </div>
          </div>
        </div>
      </div>
      +socialLinks(socialLinks)
      <div className="hero-figure col-lg-6 d-none d-lg-block position-relative">
        <div className="imgs-viewer position-absolute">
          <div className="imgs-container position-absolute">
            +listOfImages(hero.worksSamples, imgsPath, "", "img-fluid")
          </div>
        </div>
        <img src="" alt="" className="cover-img img-fluid position-relative" />
        <a href="#" className="btn btn-sm btn-primary position-absolute work-link">
          Projects
        </a>
      </div>
      <a href="#" className="alt-work-link position-absolute d-block d-lg-none">
        i(class="fa fa-angles-down")
      </a>
      <div className="divider-hero position-absolute">include ../includes/divider</div>
    </section>
  );
};

export default Hero;
