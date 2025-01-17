import React from 'react'
import './header.css'
import TypeWriterEffect from 'react-typewriter-effect';
import './CTA'
import CTA from './CTA' //here we import the CTA component inside our header
import me from '../../assets/changer.png'
import { FaArrowDown } from "react-icons/fa";

//import HeaderSocial from './HeaderSocial' //import of headerSocial component
export const Header = () => {
return (
<header>
<div className='container header__container'>
<div className='intro'>
  

    
       
<h5>Hello I'm</h5>
<h1 className='name'>Lemuel</h1>
<TypeWriterEffect
        textStyle={{
        //   fontFamily: 'Red Hat Display',
          color: '#fba741',
          fontWeight: 500,
          fontSize: '1.5em',
        }}
        startDelay={2000}
        cursorColor="#fba741"
        multiText={[
          'A Software Engineering student,',
          'graphic designer',
          'web developer',
          'UI designer',
          'video editor',
          'author',
        ]}
        multiTextDelay={1500}
        typeSpeed={100}
      />
<CTA/>


    </div> 

{/**<HeaderSocial/> */}
<div className='my_image'>
<img src={me} alt='my image'/>
</div>
{/*
<a href='#contact' className='scroll__down'>
<FaArrowDown />
</a> */}


</div>
</header>
)
}
export default Header;