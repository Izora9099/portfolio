import React from 'react'
import {BsBehance, BsGithub, BsPinterest} from 'react-icons/bs'
import {BsLinkedin} from "react-icons/bs"

import './footer.css'
const Footer = () => {
    return (
      <div className="footer__container">   
         <div className="copyRight">
        <h3>Designed and Developed by NDIFON LEMUEL &copy; 2023</h3>
        </div>
        <div className="footer__media">
        <a href="https://github.com/Izora9099" >
            <BsGithub/>
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
       
      </div>
    );
}

export default Footer
