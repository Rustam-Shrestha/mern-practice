import { useState } from "react";
import "./Navbar.css";
const Navbar = () => {
     // defining state of navbar menu initially closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // toggling between true and false
  const toggleMenu = () => {
    //functions like a ssort of and gate that will alter binary states every click
    setIsMenuOpen(!isMenuOpen);
  };
  return ( <>
    {" "}
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Logo</div>
        {/* if menu is open then give class named show else dont show */}
        <ul className={isMenuOpen ? "navbar-menu show" : "navbar-menu"}>
          <li>
            <a href="#">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="navbar-toggle" id="toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>{" "}
  </>
  )
}

export default Navbar