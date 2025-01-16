import React from 'react'
import './header.css'
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
<h1>Lemuel</h1>
<h5 className='text-light'>A Software Engineering student, graphic designer and web developer </h5>
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