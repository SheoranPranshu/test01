import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <NavLink to="/" className="logo">
                    <img src="/img/logo.png" alt="HorizonDroid Logo" />
                    HorizonDroid
                </NavLink>
                <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                    <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/downloads" onClick={() => setMenuOpen(false)}>Downloads</NavLink>
                    <NavLink to="/build" onClick={() => setMenuOpen(false)}>Build</NavLink>
                </div>
                <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
