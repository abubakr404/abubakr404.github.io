const Hero = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="text-center special-head" title="lates works">
        lates works
      </h2>
      <div className="container g-col-lg-3">
        <div className="work-card">
          <div className="card-top">
            <div className="works-viewer">
              <div className="work-shuffle">
                <button className="screen active" title="desktop" data-type="desktop">
                  <i className="fa fa-desktop" aria-hidden="true"></i>
                </button>
                <button className="screen" title="tablet" data-type="tablet">
                  <i className="fa fa-tablet-alt" aria-hidden="true"></i>
                </button>
                <button className="screen" title="mobile" data-type="mobile">
                  <i className="fa fa-mobile-alt" aria-hidden="true"></i>
                </button>
              </div>
              <div className="imgs-container">
                <img
                  className="img-fluid active"
                  src=""
                  alt="work-image"
                  data-type="desktop"
                />
                <img className="img-fluid" src="" alt="work-image" data-type="tablet" />
                <img className="img-fluid" src="" alt="work-image" data-type="mobile" />
              </div>
            </div>
            <div className="technologies">
              <div className="technologies-container">
                <button>
                  <i className="fab fa-html5" aria-hidden="true"></i>
                </button>
                <button>
                  <i className="fab fa-css3-alt" aria-hidden="true"></i>
                </button>
                <button>
                  <i className="fab fa-js-square" aria-hidden="true"></i>
                </button>
                <button>
                  <i className="fab fa-sass" aria-hidden="true"></i>
                </button>
                <button>
                  <i className="fab fa-vuejs" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h5 className="card-title" title="Leon">
                Leon
              </h5>
              <a
                className="card-text"
                href="https://www.graphberry.com/item/leon-psd-agency-template"
                target="_blank"
                title="Graphberry"
              >
                <i className="fa fa-palette" aria-hidden="true"></i>
                Graphberry
              </a>
            </div>
            <div className="card-actions">
              <a
                className="btn btn-light action"
                href="https://github.com/abubakr404/elzero-tut-temp-1"
                target="_blank"
              >
                <i className="fab fa-github" aria-hidden="true"></i>
                View Code
              </a>
              <a
                className="btn btn-light action"
                href="https://abubakr404.github.io/elzero-tut-temp-1/"
                target="_blank"
              >
                <i className="fa fa-eye" aria-hidden="true"></i>
                Live Version
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
