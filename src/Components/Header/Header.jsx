import "./Header.scss";
import React from "react";
import Logo from "../../Assets/Images/my_logo.png";

function Header() {
  return (
    <header className="container mt-4 pb-4">
      <nav className="navbar">
        <img src={Logo} alt="site logotipe" width={150} />
        <input type="checkbox" id="toggler" />
        <label htmlFor="toggler">
          <i className="icon-hamburger icon"></i>
        </label>
        <div className="menu">
          <ul className="list">
            <li>
              <a href="#home">Home</a>
              <span className="devider"></span>
            </li>
            <li>
              <a href="#about">About me</a>
              <span className="devider"></span>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
              <span className="devider"></span>
            </li>
            <li>
              <a href="#contact">Contact me</a>
              <span className="devider"></span>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
