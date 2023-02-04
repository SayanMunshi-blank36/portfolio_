import "./assets/css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo sign">
        <a href="/" className="logo_link">
          <span className="fast-flicker">S</span>ayan{" "}
          <span className="flicker">M</span>unshi
        </a>
      </div>
      <ul className="nav_list">
        <li className="list_items">About</li>
        <li className="list_items">Experience</li>
        <li className="list_items">Projects</li>
        <li className="list_items">Contact</li>
        <li className="list_items">
          <button className="btn_resume">Resume</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
