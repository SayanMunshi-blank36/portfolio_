import "./assets/css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo sign">
        <Link to="/" className="logo_link">
          <span className="fast-flicker">S</span>ayan{" "}
          <span className="flicker">M</span>unshi
        </Link>
      </div>
      <ul className="nav_list">
        <li className="list_items">
          <Link to="/about">About</Link>
        </li>
        <li className="list_items">
          <Link to="/experience">Experience</Link>
        </li>
        <li className="list_items">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="list_items">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="list_items">
          <button className="btn_resume">Resume</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
