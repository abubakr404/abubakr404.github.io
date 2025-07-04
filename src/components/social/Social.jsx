import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Link = ({ link, icon }) => (
  <li className="list-group-item">
    <a className="social-link btn btn-light" href={link} target="_blank">
      <FontAwesomeIcon icon={icon} />
    </a>
  </li>
);

const Social = () => {
  return (
    <div className="social-links">
      <ul className="social">
        <Link link="https://www.facebook.com/abubakr404" icon={faFacebookF} />
        <Link link="https://twitter.com/abubakr_404" icon={faTwitter} />
        <Link link="https://linkedin.com/in/abubakr-hisham" icon={faLinkedin} />
        <Link link="https://github.com/abubakr404" icon={faGithub} />
        <Link link="https://wa.me/966539581070" icon={faWhatsapp} />
      </ul>
    </div>
  );
};

export default Social;
