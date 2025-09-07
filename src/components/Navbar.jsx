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
            <span>Build Guide</span>
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
