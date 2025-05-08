import React from "react";
import { NavLink } from 'react-router-dom';
import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
const Navbar = () => {
  const [activeNav, setActiveNav] = useState("/"); // Use paths instead of fragment identifiers
  return (
    <nav className='navbar'>
      <div className="logo">
        <img src="/favicon.svg" alt="Ndifon Lemuel" />
        <span>Ndifon Lemuel</span>
      </div>

      <div className="link">
        <Link
          to="/"
          onClick={() => setActiveNav("/")}
          className={activeNav === "/" ? "active" : ""}
        >
          
          <div>Home</div>
        </Link>
        <Link
          to="/about"
          onClick={() => setActiveNav("/about")}
          className={activeNav === "/about" ? "active" : ""}
        >
          
          <div>About</div>
        </Link>
        <Link
          to="/experience"
          onClick={() => setActiveNav("/experience")}
          className={activeNav === "/experience" ? "active" : ""}
        >
    
          <div>Skills</div>
        </Link>
        <Link
          to="/portfolio"
          onClick={() => setActiveNav("/portfolio")}
          className={activeNav === "/portfolio" ? "active" : ""}
        >
      
          <div>Projects</div>
        </Link>
        
        <Link
        to="/testimonial"
        onClick={() => setActiveNav("/testimonial")}
        className={activeNav === "/testimonial" ? "active" : ""}
        >
          <div>Testimonial</div>
          </Link>
          <Link
        to="/services"
        onClick={() => setActiveNav("/services")}
        className={activeNav === "/services" ? "active" : ""}
        >
          <div>Services</div>
          </Link>
        <Link
          to="/contact"
          onClick={() => setActiveNav("/contact")}
          className={activeNav === "/contact" ? "active" : ""}
        >
         
          <div>Contact</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
