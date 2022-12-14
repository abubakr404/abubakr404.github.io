import Social from "../../components/widget/social/Social";
import {
  faArrowRotateBack,
  faEnvelope,
  faPaperPlane,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = ({
  title,
  headTitle,
  contact: {
    contactTitle,
    contactInfo,
    emailLink,
    phoneNumber,
    messageOfThanks,
    SendButton,
    SendAgainButton,
  },
}) => {
  return (
    <section className="contact" id={title}>
      <h2 className="text-center special-head" title={headTitle}>
        {headTitle}
      </h2>
      <div className="container">
        <div className="contact-box">
          <div className="info">
            <div className="info-head">
              <h3>{contactTitle}</h3>
              <p>{contactInfo}</p>
            </div>
            <div className="info-bottom">
              <ul className="links">
                <li>
                  <a className="contact-link" href={`mailto:${emailLink}`}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>{emailLink}</span>
                  </a>
                </li>
                <li>
                  <a className="contact-link" href={`tel:${phoneNumber}`}>
                    <FontAwesomeIcon icon={faPhone} />
                    <span>{phoneNumber}</span>
                  </a>
                </li>
              </ul>
              <Social />
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
            <div className="form-group">
              <div className="input">
                <FontAwesomeIcon icon={faPhone} />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Your Phone Number"
                  // value={contactSetup.phoneNumber}
                  // onChange={(ele) => handleInputs(ele.target)}
                />
              </div>
            </div>
            <textarea
              className="form-input message"
              placeholder="Tell me about all you needs"
              required=""
            ></textarea>
            <p className="message-stutus"></p>
            <button className="submit btn btn-light">
              <FontAwesomeIcon icon={faPaperPlane} />
              {SendButton}
            </button>
          </form>
          <div className="thank-message hide">
            <div className="img"></div>
            <h3>Thank you!</h3>
            <div className="thanks">{messageOfThanks}</div>
            <button className="submit send-again btn btn-light">
              <FontAwesomeIcon icon={faArrowRotateBack} />
              {SendAgainButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
