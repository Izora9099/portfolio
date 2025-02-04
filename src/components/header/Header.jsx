import React from 'react'
import './header.css'
import TypeWriterEffect from 'react-typewriter-effect';
import { motion } from "framer-motion";
import './CTA'
import CTA from './CTA' //here we import the CTA component inside our header
import me from '../../assets/home.png'
import me1 from '../../assets/Miss Ajax Complete 1.png'

export const Header = () => {
return (
<header>
<div className='container header__container'>
<div className='intro'>
  

    
       

<h5 className='name'>Hello. I'm <i class="htext">NDIFON LEMUEL</i></h5>
<TypeWriterEffect
        textStyle={{
          color: '#0CCAFD',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={2000}
        cursorColor="#0CCAFD"
        multiText={[
          'A Software Engineering student,',
          'Graphic designer',
          'Web developer',
          'UI designer',
          'Video editor',
          'Author',
        ]}
        multiTextDelay={1500}
        typeSpeed={100}
      />
      
<CTA/>


    </div> 


<div className='my_image'>
<img src={me} alt='my pciture'/>
</div>



</div>


<section id="about" class='about'>
    <h5>MAY I HAVE YOUR ATTENTION PLEASE! </h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
       <div className="about__me-image">
       <img src={me1} alt='my profile'/>
        </div>
      

      </div>
      <div className="about__content">
        <div className="about__cards">
        
       
         
 </div>
    <p>
   I am a junior UI/UX designer and a junior software developper.</p>
   <p>
   I use <i className='htext'>HTML, CSS, Javascript.</i> 
   and <i className='htext'>Java</i> for web development.
</p>


   <p>For UI/UX design, I use technologies such as <i class="htext">Figma</i> and <i class="htext">Adobe XD</i>.</p> <p> For web development, I use <i class="htext">React Js.</i>  For android mobile development, I use <i class="htext">Android Studio.</i>  </p>
     <p>  I also dable in digital art and other forms of graphic 
      design using <i class="htext">Adobe Photoshop</i> and <i class="hext">Canva</i> </p>
   </div>
   <div style={{ position: "relative", display: "inline-block" }}>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          border: "2px solid transparent",
          borderRadius: "8px",
        }}
        animate={{
          pathLength: [0, 1, 0], // Loop around the button
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut", // Adjust easing for speed changes
        }}
      />
      
    </div>
    </div>
      </section>
</header>
)
}
export default Header;