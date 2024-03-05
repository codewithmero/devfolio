import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./index.css";
import { NavLink } from 'react-router-dom';

function Header(props) {

  const handleNavigation = () => {
    let navigation = document.querySelector('.navigation');
    navigation.classList.toggle('hide-navigation');
  }

  const handleLinkClick = (e) => {
    let children = Array.from(e.target.parentNode.parentNode.children);
    children.forEach(child => {
      child.children?.[0].classList.remove("active");
    });

    e.target.classList.add("active");
  }
  return (
    <>
      <header>
        <h2 className="logo">Rudra</h2>
        <nav className="navigation">
          <ul className="nav-links-container">
            <li className="nav-link">
              <NavLink to="/" onClick={handleLinkClick}>home</NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/about" onClick={handleLinkClick}>about</NavLink>
            </li>
            <li className="nav-link">
              <a href="/#expertise" onClick={handleLinkClick}>expertise</a>
            </li>
            <li className="nav-link">
              <a href="/#tools" onClick={handleLinkClick}>tools</a>
            </li>
            <li className="nav-link">
              <a href="/#projects" onClick={handleLinkClick}>projects</a>
            </li>
            {/* <li className="nav-link btn">
              <a onClick={() => setInfoPane(c => !c)}>say hello</a>
            </li> */}
          </ul>        
          <IoMdClose className="close-navigation" onClick={() => handleNavigation()} />
        </nav>
        <GiHamburgerMenu className="open-navigation" onClick={() => handleNavigation()} />
      </header>
    </>
  );
}

export default Header;