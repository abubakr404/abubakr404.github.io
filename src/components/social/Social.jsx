import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa6";

const Link = ({ link, icon }) => (
  <li className="list-group-item">
    <a className="social-link btn btn-light" href={link} target="_blank">
      {icon()}
    </a>
  </li>
);

const Social = () => {
  return (
    <div className="social-links">
      <ul className="social">
        <Link link="https://www.facebook.com/abubakr404" icon={FaFacebookF} />
        <Link link="https://twitter.com/abubakr_404" icon={FaTwitter} />
        <Link link="https://linkedin.com/in/abubakr-hisham" icon={FaLinkedin} />
        <Link link="https://github.com/abubakr404" icon={FaGithub} />
        <Link link="https://wa.me/249904219999" icon={FaWhatsapp} />
      </ul>
    </div>
  );
};

export default Social;
