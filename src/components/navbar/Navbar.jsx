import React from "react";
import { NavLink } from 'react-router-dom';
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";import { TfiGallery, TfiThemifyLogo } from "react-icons/tfi";
import { useState } from "react";
import { FaAddressCard } from "react-icons/fa";
import me from '../../assets/Iz..png'
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { BiRocket } from "react-icons/bi";
const Navbar = () => {
  const [activeNav, setActiveNav] = useState("/"); // Use paths instead of fragment identifiers
  return (
    <nav className='navbar'>
      <div className="Logo">
      Ndifon Lemuel
      </div>

      <div className="link">
        <Link
          to="/"
          onClick={() => setActiveNav("/")}
          className={activeNav === "/" ? "active" : ""}
        >
          <AiOutlineHome className="icon" />
          <div>Home</div>
        </Link>
        <Link
          to="/about"
          onClick={() => setActiveNav("/about")}
          className={activeNav === "/about" ? "active" : ""}
        >
          <AiOutlineUser className="icon" />
          <div>About</div>
        </Link>
        <Link
          to="/experience"
          onClick={() => setActiveNav("/experience")}
          className={activeNav === "/experience" ? "active" : ""}
        >
          <AiOutlineBook className="icon" />
          <div>Skills</div>
        </Link>
        <Link
          to="/portfolio"
          onClick={() => setActiveNav("/portfolio")}
          className={activeNav === "/portfolio" ? "active" : ""}
        >
          <TfiGallery className="icon" />
          <div>Projects</div>
        </Link>
        <Link
          to="/contact"
          onClick={() => setActiveNav("/contact")}
          className={activeNav === "/contact" ? "active" : ""}
        >
          <FaAddressCard className="icon" />
          <div>Contact</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
