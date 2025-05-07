import React from 'react'
import {BsBehance, BsGithub, BsPinterest} from 'react-icons/bs'
import {SiDeviantart} from "react-icons/si"
import {BsLinkedin} from "react-icons/bs"

import './footer.css'
const Footer = () => {
    return (
      <div className="footer__container">
        
        ndifonlemuel       
        
        <div className="footer__media">
        <a href="https://www.deviantart.com/izoraquinn" >
            <BsGithub />
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
