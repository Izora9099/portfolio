import React from 'react'
import './About.css'
import me from '../../assets/Miss Ajax Complete 1.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
const about = () => {
  return (
   <section id="about" class='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
       <div className="about__me-image">
       <img src={me} alt='my profile'/>
        </div>
      

      </div>
      <div className="about__content">
        <div className="about__cards">
        <article className="about__card">
        <FaAward className='about__icon'/>
        <h5>Experience</h5>
        <small>3+ experience</small>
        </article> 
        <article className="about__card">
        <FiUsers className='about__icon'/>
        <h5>Clients</h5>
        <small>20+ Locally</small>
        </article>
          <article className="about__card">
        <VscFolderLibrary className='about__icon'/>
        <h5>Projects</h5>
        <small>5+ Completed</small>
      </article> 
    </div>
    <p>
    Hi, I'm Ndifon Lemuel, a digital artist, content creator, a front-end web designer and a UI/UX designer.
     I specialize in creating visually stunning & engaging content across various media,
      from digital art to web design. With a passion for creativity and a commitment
       to qualitythat exceed my clients' expectations. My portfolio 
       showcases my diverse skillset, and I look forward to the opportunity to work with you.
       </p>
    <a href="#contact" className='btn btn-primary btn1'>Let's Talk</a>
    </div>
    </div>
      </section>
  )
}

export default about