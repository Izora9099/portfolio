import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='navbar'>
      <div className="logo">
        <NavLink to="/">
          <img src="/favicon.svg" alt="Ndifon Lemuel" />
          <span className="name-text">Ndifon Lemuel</span>
        </NavLink>
      </div>

      <button 
        className={`hamburger ${isMenuOpen ? 'menu-open' : ''}`} 
        onClick={toggleMenu} 
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`link ${isMenuOpen ? 'menu-open' : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          About
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Skills
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/testimonial"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Testimonials
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? "active" : ""}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
