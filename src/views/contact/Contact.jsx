import Social from "../../components/social/Social";
import {
  faArrowRotateBack,
  faEnvelope,
  faPaperPlane,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  thanksIllustration,
  contactPattern,
  contactIllustration,
} from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState({});
  const [thanksMsg, setThanksMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const config = {
      SecureToken: import.meta.env.VITE_SECURE_TOKEN,
      To: import.meta.env.VITE_CONTACT_EMAIL,
      From: message.senderEmail,
      Subject: `This is a contact message from ${message.senderName}${
        message.phoneNumber ? `and his number is: ${message.phoneNumber}` : ""
      }`,
      Body: message.messageText,
    };
    if (window.Email) {
      try {
        setIsLoading(true);
        window.Email.send(config).then(() => {
          setIsLoading(false);
          setThanksMsg(true);
        });
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }
  };

  const handleInputs = (target) => {
    setMessage((prevData) => ({
      ...prevData,
      [target.name]: target.value,
    }));
  };

  return (
    <section
      className="contact"
      id="contact"
      style={{ backgroundImage: `url(${contactPattern}), var(--second-surface)` }}
    >
      <h2 className="text-center special-head" title="Contact">
        Contact
      </h2>
      <div className="container">
        <div className="contact-box">
          <div className="info">
            <div className="info-head">
              <h3>Get in touch,</h3>
              <p>
                Let's collaborate and make your vision a reality. Feel free to reach out
                and let's discuss how I can contribute to your success.
              </p>
            </div>
            <div
              className="info-bottom"
              style={{
                backgroundImage: `url(${contactIllustration})`,
              }}
            >
              <ul className="links">
                <li>
                  <a className="contact-link" href="mailto:abubakr.hisham@hotmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span>abubakr.hisham@hotmail.com</span>
                  </a>
                </li>
                <li>
                  <a className="contact-link" href="tel:+966 503237742">
                    <FontAwesomeIcon icon={faPhone} />
                    <span>+966 503237742</span>
                  </a>
                </li>
                <li>
                  <a className="contact-link" href="tel:+249 904219999">
                    <FontAwesomeIcon icon={faPhone} />
                    <span>+249 904219999</span>
                  </a>
                </li>
              </ul>
              <Social />
            </div>
          </div>
          <form
            onSubmit={(e) => handleSendMessage(e)}
            className={thanksMsg ? "contact-form hide" : "contact-form"}
          >
            <div className="form-group">
              <div className="input">
                <FontAwesomeIcon icon={faUser} />
                <input
                  type="text"
                  name="senderName"
                  placeholder="Your Name"
                  value={message.senderName || ""}
                  onChange={(ele) => handleInputs(ele.target)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input">
                <FontAwesomeIcon icon={faEnvelope} />
                <input
                  type="email"
                  name="senderEmail"
                  placeholder="Your Email"
                  value={message.senderEmail || ""}
                  onChange={(ele) => handleInputs(ele.target)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input">
                <FontAwesomeIcon icon={faPhone} />
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Your Phone Number"
                  value={message.phoneNumber || ""}
                  onChange={(ele) => handleInputs(ele.target)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input">
                <textarea
                  className="form-input message"
                  name="messageText"
                  placeholder="Tell me about all you needs"
                  value={message.messageText || ""}
                  onChange={(ele) => handleInputs(ele.target)}
                  required
                />
              </div>
            </div>
            <p className="message-stutus"></p>
            <button className="submit" disabled={isLoading}>
              <FontAwesomeIcon icon={faPaperPlane} />
              Send Message
            </button>
          </form>
          <div className={thanksMsg ? "thanks-message" : "thank-message hide"}>
            <div className="img">
              <img src={thanksIllustration} alt="" />
            </div>
            <h3>Thank you!</h3>
            <div className="thanks">Thanks you for contact.</div>
            <button
              onClick={() => setThanksMsg(false)}
              className="submit light send-again"
            >
              <FontAwesomeIcon icon={faArrowRotateBack} />
              Send Other Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
