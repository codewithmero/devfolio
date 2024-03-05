import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./index.css";

function Header(props) {

  const handleNavigation = () => {
    let navigation = document.querySelector('.navigation');
    navigation.classList.toggle('hide-navigation');
  }

  return (
    <header>
      <h2 className="logo">Rudra</h2>
      <nav className="navigation">
        <ul className="nav-links-container">
          <li className="nav-link">
            <a href="#">home</a>
          </li>
          <li className="nav-link">
            <a href="#">about</a>
          </li>
          <li className="nav-link">
            <a href="#">projects</a>
          </li>
          <li className="nav-link btn">
            <a href="#">say hello</a>
          </li>
        </ul>        
        <IoMdClose className="close-navigation" onClick={() => handleNavigation()} />
      </nav>
      <GiHamburgerMenu className="open-navigation" onClick={() => handleNavigation()} />
    </header>
  );
}

export default Header;