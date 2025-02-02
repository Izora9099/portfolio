import React from 'react'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsPinterest} from 'react-icons/bs'
import { FaTwitterSquare } from "react-icons/fa";
import {SiDeviantart} from "react-icons/si"

import './footer.css'
const Footer = () => {
    return (
      <div className="footer__container">
        
        <a href="#" className="footer__logo"><div>
          <p className='footer__logo'>IZORAGRAPHICS</p>
          </div>
          <div><p className='footer__logo1'>Your Satisfaction, Our Priority</p>
          
          </div></a>

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
         {/* <li>
            <a href="#testimonials">Testimonials</a>
          </li>
         */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        
        <div className="footer__media">
        <a href="https://www.deviantart.com/izoraquinn" >
            <SiDeviantart />
          </a>
          <a href="https://instagram.com/izoragraphics" >
            <FaInstagramSquare />
          </a>
          <a href="https://pinterest.com/izoragraphics" >
            <BsPinterest />
          </a>
          <a href="https://twitter.com/izoragraphics" >
            <FaTwitterSquare />
          </a>
        </div>

        <div className="copyRight">
        <h3>&copy; 2023 Izoragraphics. All rights reserved.</h3>
        </div>
        
      </div>
    );
}

export default Footer
