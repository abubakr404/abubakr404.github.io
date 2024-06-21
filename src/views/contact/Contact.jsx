import Social from "@/components/Social";
import { FaArrowRotateLeft, FaEnvelope, FaPaperPlane, FaPhone, FaUser } from "react-icons/fa6";
import thanksIllustration from "@/assets/images/thank-you-illustration.svg";
import contactIllustration from "@/assets/images/contact-illustration.svg";
import contactPattern from "@/assets/images/contact-pattern.svg";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState({});
  const [thanksMsg, setThanksMsg] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e) => {
    return;
    // e.preventDefault();
    // const config = {
    //   SecureToken: import.meta.env.VITE_SECURE_TOKEN,
    //   To: import.meta.env.VITE_CONTACT_EMAIL,
    //   From: message.senderEmail,
    //   Subject: `This is a contact message from ${message.senderName}${
    //     message.phoneNumber ? `and his number is: ${message.phoneNumber}` : ""
    //   }`,
    //   Body: message.messageText,
    // };
    // if (window.Email) {
    //   try {
    //     setIsLoading(true);
    //     window.Email.send(config).then(() => {
    //       setIsLoading(false);
    //       setThanksMsg(true);
    //     });
    //   } catch (error) {
    //     setIsLoading(false);
    //     console.log(error);
    //   }
    // }
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
      style={{
        backgroundImage: `url(${contactPattern.src}), var(--second-surface)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
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
                Let's collaborate and make your vision a reality. Feel free to reach out and let's
                discuss how I can contribute to your success.
              </p>
            </div>
            <div
              className="info-bottom"
              style={{
                backgroundImage: `url(${contactIllustration.src})`,
                minHeight: "19rem",
                backgroundRepeat: "no-repeat",
                backgroundSize: "20.5rem",
                backgroundPosition: "right calc(100% + .75rem)",
              }}
            >
              <ul className="links">
                <li>
                  <a className="contact-link" href="mailto:abubakr.hisham@hotmail.com">
                    <FaEnvelope />
                    <span>abubakr.hisham@hotmail.com</span>
                  </a>
                </li>
                <li>
                  <a className="contact-link" href="tel:+966 53 958 1070">
                    <FaPhone />
                    <span>+966 53 958 1070</span>
                  </a>
                </li>
                <li>
                  <a className="contact-link" href="tel:+249 90 421 9999">
                    <FaPhone />
                    <span>+249 90 421 9999</span>
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
                <FaUser />
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
                <FaEnvelope />
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
                <FaPhone />
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
              <FaPaperPlane />
              Send Message
            </button>
          </form>
          <div className={thanksMsg ? "thanks-message" : "thank-message hide"}>
            <div className="img">
              <img src={thanksIllustration.src} alt="" />
            </div>
            <h3>Thank you!</h3>
            <div className="thanks">Thanks you for contact.</div>
            <button onClick={() => setThanksMsg(false)} className="submit light send-again">
              <FaArrowRotateLeft />
              Send Other Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
