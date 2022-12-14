import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faFacebookF,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { SiteDataContext } from "../../../context/SiteDataContext";

const Social = () => {
  const data = useContext(SiteDataContext);
  const {
    general: { facebookLink, twitterLink, linkedinLink, gitHubLink, codePenLink },
  } = data;
  return (
    <div className="social-links">
      {data === null ? (
        <span>...</span>
      ) : (
        <ul className="social">
          {facebookLink && (
            <li className="list-group-item">
              <a className="social-link btn btn-light" href={facebookLink}>
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
          )}
          {twitterLink && (
            <li className="list-group-item">
              <a className="social-link btn btn-light" href={twitterLink}>
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
          )}
          {linkedinLink && (
            <li className="list-group-item">
              <a className="social-link btn btn-light" href={linkedinLink}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
          )}
          {gitHubLink && (
            <li className="list-group-item">
              <a className="social-link btn btn-light" href={gitHubLink}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          )}
          {codePenLink && (
            <li className="list-group-item">
              <a className="social-link btn btn-light" href={codePenLink}>
                <FontAwesomeIcon icon={faCodepen} />
              </a>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Social;
