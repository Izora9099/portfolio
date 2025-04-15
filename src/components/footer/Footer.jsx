import React from 'react'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsBehance, BsPinterest} from 'react-icons/bs'
import { FaTwitterSquare } from "react-icons/fa";
import {SiDeviantart} from "react-icons/si"
import {BsLinkedin} from "react-icons/bs"

import './footer.css'
const Footer = () => {
    return (
      <div className="footer__container">
        
        <a href="#" className="footer__logo">

          @ndifonlemuel
          
          </a>

       
        
        <div className="footer__media">
        <a href="https://www.deviantart.com/izoraquinn" >
            <SiDeviantart />
          </a>
          <a href="https://www.behance.net/ndifonlemuel" >
            <BsBehance/>
          </a>
          <a href="https://pinterest.com/izoragraphics" >
            <BsPinterest />
          </a>
          <a href="https://twitter.com/izoragraphics" >
            <BsLinkedin/>
          </a>

        </div>
        <div className="copyRight">
        <h3>&copy; 2023 ndifonlemuel. All rights reserved.</h3>
        </div>
      
      </div>
    );
}

export default Footer
