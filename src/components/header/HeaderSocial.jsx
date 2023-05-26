import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {CgTwitter} from 'react-icons/cg'
const HeaderSocial = () => {
return (
<div className='header__social'>
<a href='https://linkedin.com' target='blank'><BsLinkedin/> @Izoragraphics</a>
<a href='https://github.com' target='blank'><FaGithub/> @         Izora9099    </a>
<a href='https://facebook.com' target='blank'><FaFacebookF/> @Izoragraphics</a>
<a href='https://twitter.com' target='blank'><CgTwitter/> @Izoragraphics </a>
</div>
)
}
export default HeaderSocial
