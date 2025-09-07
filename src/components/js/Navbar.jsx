import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    if (menuActive) {
      document.body.classList.add('menu-active');
    } else {
      document.body.classList.remove('menu-active');
    }

    return () => {
      document.body.classList.remove('menu-active');
    };
  }, [menuActive]);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuActive(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="desktop-navbar">
        <div className="desktop-navbar-content">
          <NavLink to="/" className="desktop-logo">
            <img src="/img/logo.png" alt="Logo" />
            <span>HorizonDroid</span>
          </NavLink>
          
          <div className="desktop-nav">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              <i className="fas fa-home"></i>
              <span>Home</span>
            </NavLink>
            <NavLink to="/downloads" className={({ isActive }) => isActive ? 'active' : ''}>
              <i className="fas fa-download"></i>
              <span>Downloads</span>
            </NavLink>
            <NavLink to="/build" className={({ isActive }) => isActive ? 'active' : ''}>
              <i className="fas fa-code"></i>
              <span>Build</span>
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="mobile-header">
        <div className="mobile-header-content">
          <NavLink to="/" className="mobile-logo" onClick={closeMenu}>
            <img src="/img/logo.png" alt="Logo" />
            HorizonDroid
          </NavLink>
          <button 
            className={`hamburger ${menuActive ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <aside className="sidebar">
        <div className="sidebar-header">
          <NavLink to="/" className="sidebar-logo" onClick={closeMenu}>
            <img src="/img/logo.png" alt="Logo" />
            <span>HorizonDroid</span>
          </NavLink>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/" onClick={closeMenu}>
            <i className="fas fa-home"></i>
            <span>Home</span>
          </NavLink>
          <NavLink to="/downloads" onClick={closeMenu}>
            <i className="fas fa-download"></i>
            <span>Downloads</span>
          </NavLink>
          <NavLink to="/build" onClick={closeMenu}>
            <i className="fas fa-code"></i>
            <span>Build</span>
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <p>© 2025 HorizonDroid</p>
        </div>
      </aside>

      <div className="main-content">
      </div>
    </>
  );
};

export default Navbar;
