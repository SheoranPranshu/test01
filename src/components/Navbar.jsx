import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    if (menuActive) {
      document.body.classList.add('menu-active');
    } else {
      document.body.classList.remove('menu-active');
    }
  }, [menuActive]);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <NavLink to="/" className="logo">
            <img src="/img/logo.png" alt="Logo" />
            HorizonDroid
          </NavLink>
          <div className="nav-links">
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/downloads" onClick={closeMenu}>Downloads</NavLink>
            <NavLink to="/build" onClick={closeMenu}>Build</NavLink>
          </div>
        </div>
      </nav>
      <div id="fab-menu-toggle" className="fab-menu-button" onClick={toggleMenu}>
        <i id="fab-icon" className={`fas ${menuActive ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </>
  );
};

export default Navbar;
