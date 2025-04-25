import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import {
  faLinkedin,
  faWhatsapp,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer(props) {
  return (
    <nav className="footer">
      <div className="socialLinks">
        <a
          href="https://www.linkedin.com/in/yanc3093/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icon" icon={faLinkedin} />
        </a>
        <a href="mailto:yanc3093@gmail.com">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
        </a>
        <a
          href="https://wa.me/6580404797"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icon" icon={faWhatsapp} />
        </a>
        <a
          href="https://github.com/yanc3093"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="icon" icon={faGithub} />
        </a>
      </div>
      <div className="appLinks">
        <Link to="/" onClick={props.collapseExpanded}>
          Home
        </Link>
        <Link to="/resume" onClick={props.collapseExpanded}>
          Resume
        </Link>
        <Link to="/projects" onClick={props.collapseExpanded}>
          Projects
        </Link>
        <Link to="/contact" onClick={props.collapseExpanded}>
          Contact
        </Link>
      </div>
      <div className="copyright">
        <FontAwesomeIcon className="icon" icon={faCopyright} />
        2025 Chua Yan Yan. All rights reserved.
      </div>
    </nav>
  );
}

export default Footer;
