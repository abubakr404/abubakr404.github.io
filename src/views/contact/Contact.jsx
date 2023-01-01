import Social from "../../components/widget/social/Social";
import {
  faArrowRotateBack,
  faEnvelope,
  faPaperPlane,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import thanksIllustration from "../../../public/images/thank-you-illustration.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../../firebaseConfig";

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
  const [messageText, setMessageText] = useState({
    date: new Date().getTime(),
    text: "",
  });
  const [message, setMessage] = useState({
    id: new Date().getTime().toString(),
    senderName: "",
    senderEmail: "",
    phoneNumber: "",
    messagesText: [],
  });
  const [thanksMsg, setThanksMsg] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setMessage((prevData) => ({
      ...prevData,
      messagesText: [...prevData.messagesText, messageText],
    }));
    try {
      const messageRef = doc(database, "messages", message.id);
      await setDoc(messageRef, message);
      setThanksMsg(true);
    } catch (e) {
      console.error("Error adding message: ", e);
    }
  };

  const handleInputs = (target) => {
    setMessage((prevData) => ({
      ...prevData,
      [target.name]: target.value,
    }));
  };

  const handleMessage = (target) => {
    setMessageText({
      date: new Date().getTime(),
      text: target.value,
    });
  };

  const SendAgain = () => {
    setMessageText({
      date: new Date().getTime(),
      text: "",
    });
    setThanksMsg(false);
  };

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
                  value={message.senderName}
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
                  value={message.senderEmail}
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
                  value={message.phoneNumber}
                  onChange={(ele) => handleInputs(ele.target)}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="input">
                <textarea
                  className="form-input message"
                  name="messagesText"
                  placeholder="Tell me about all you needs"
                  onChange={(ele) => handleMessage(ele.target)}
                  required
                />
              </div>
            </div>
            <p className="message-stutus"></p>
            <button className="submit">
              <FontAwesomeIcon icon={faPaperPlane} />
              {SendButton}
            </button>
          </form>
          <div className={thanksMsg ? "thanks-message" : "thank-message hide"}>
            <div className="img">
              <img src={thanksIllustration} alt="" />
            </div>
            <h3>Thank you!</h3>
            <div className="thanks">{messageOfThanks}</div>
            <button onClick={SendAgain} className="submit light send-again">
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
