import React from 'react'
import './header.css'
import TypeWriterEffect from 'react-typewriter-effect';
//import { motion } from "framer-motion";
import './CTA'
import CTA from './CTA' //here we import the CTA component inside our header
import me from '../../assets/home.png'
import me1 from '../../assets/Miss Ajax Complete 1.png'

export const Header = () => {
return (
<header>
<div className='container header__container'>
<div className='intro'>
  

  {/*below is the typewriter text effect which I used in the home page of the website.*/}
       

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
    <h2>My Intro</h2>
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

        I am a front-end developper who is passionate about <i className="hex">design</i> and creating visually appealing and engaging user experiences

  </p>
  
     <p>  I also dable in digital art and other forms of graphic 
      design using <i class="htext">Adobe Photoshop</i></p>
   </div>
   
    </div>
      </section>
</header>
)
}
export default Header;