import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

function Navbar(props) {
  return (
    <nav>
      <div className="navbar">
        <Link className="homeLink" to="/" onClick={props.collapseExpanded}>
          Chua Yan Yan
        </Link>
        {props.isMobile ? (
          <button onClick={props.handleClick}>
            <FontAwesomeIcon
              className="icon"
              icon={props.isExpanded ? faXmark : faBars}
            />
          </button>
        ) : (
          <div className="otherLinks">
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        )}
      </div>
      {props.isMobile && props.isExpanded && (
        <div className="expandedMenu">
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
      )}
    </nav>
  );
}

export default Navbar;
