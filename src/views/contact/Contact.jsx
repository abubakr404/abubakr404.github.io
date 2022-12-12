const Hero = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="text-center special-head" title="contact">
        contact
      </h2>
      <div className="container">
        <div className="contact-box">
          <div className="info">
            <div className="info-head">
              <h3>Get in touch,</h3>
              <p>
                Blandit viverra felis vulputate lacus turpis ipsum ut dictumst amet, urna
                donec in cursus eget ullamcorper.
              </p>
            </div>
            <div className="info-bottom">
              <ul className="links">
                <li>
                  <a className="contact-link" href="mailto:abubakr.hisham@hotmail.com">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                    <span>Abubakr.Hisham@hotmail.com</span>
                  </a>
                </li>
                <li>
                  <a className="contact-link" href="tel:+249904219999">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span>+249 904219999</span>
                  </a>
                </li>
              </ul>
              <div className="social-links">
                <ul className="social">
                  <li className="list-group-item">
                    <a
                      className="social-link btn btn-light"
                      href="https://www.facebook.com/abubakr404"
                    >
                      <i className="fab fa-facebook-f" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      className="social-link btn btn-light"
                      href="https://twitter.com/abubakr_404"
                    >
                      <i className="fab fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      className="social-link btn btn-light"
                      href="https://linkedin.com/in/abubakr-hisham"
                    >
                      <i className="fab fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      className="social-link btn btn-light"
                      href="https://github.com/abubakr404"
                    >
                      <i className="fab fa-github" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="list-group-item">
                    <a
                      className="social-link btn btn-light"
                      href="https://codepen.io/abubakr_404"
                    >
                      <i className="fab fa-codepen" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <form className="contact-form" method="get">
            <input
              className="form-input name"
              type="text"
              placeholder="Your Name"
              required=""
            />
            <input
              className="form-input email"
              type="email"
              placeholder="Your Email"
              required=""
            />
            <input className="form-input phone" type="phone" placeholder="Your Phone" />
            <textarea
              className="form-input message"
              placeholder="Tell me about all you needs"
              required=""
            ></textarea>
            <p className="message-stutus"></p>
            <button className="submit btn btn-light">
              <i className="fa fa-paper-plane" aria-hidden="true"></i>
              Send Message
            </button>
          </form>
          <div className="thank-message hide">
            <div className="img"></div>
            <div className="rated-state">Your message was sent sccessfuly</div>
            <h3>Thank you!</h3>
            <div className="thanks">
              If you ever need more support, don’t hesitate to get in touch!
            </div>
            <button className="submit send-again btn btn-light">
              <i className="fa fa-refresh" aria-hidden="true"></i>Send Message Again
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
