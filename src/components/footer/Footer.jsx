import React from 'react'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsPinterest} from 'react-icons/bs'
import { CgTwitter } from "react-icons/cg";

import './footer.css'
const Footer = () => {
    return (
      <div className="footer__container">
        <a href="#" className="footer__logo">
          Izora Quinn
        </a>

        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">testimonials</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__media">
         
          <a href="https://instagram.com/izoragraphics" >
            <FaInstagramSquare />
          </a>
          <a href="https://pinterest.com/izoragraphics" >
            <BsPinterest />
          </a>
          <a href="https://twitter.com/izoragraphics" >
            <CgTwitter />
          </a>
        </div>

        <div className="copyRight">
            <h3>@copyright IQ 2023</h3>
        </div>
      </div>
    );
}

export default Footer
