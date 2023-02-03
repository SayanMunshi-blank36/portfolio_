import "./assets/css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo sign">
        <span className="fast-flicker">S</span>ayan{" "}
        <span className="flicker">M</span>unshi
      </div>
      <ul className="nav_list">
        <li className="list_items">About</li>
        <li className="list_items">Skills</li>
        <li className="list_items">Projects</li>
        <li className="list_items">Work Experience</li>
        <li className="list_items">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
