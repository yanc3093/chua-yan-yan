import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="homeLink" to="/">
        Chua Yan Yan
      </Link>
      <div className="otherLinks">
        <Link to="/resume">Resume</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
