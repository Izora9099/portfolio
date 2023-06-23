import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsPinterest} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { FaArrowDown} from 'react-icons/fa'
import {useRef} from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
const form = useRef();
const sendEmail = (e) => {
e.preventDefault();
emailjs.sendForm('service_fd56too', 'template_oaul9ju', form.current,'dpN0BBoXGtUnVgAzl')
e.target.reset()
.then((result) => {
console.log(result.text)
},(error) =>{
console.log(error.text);
});
};
return (
<section id="contact">
<h5>Get in touch</h5>
<h2>Contact me</h2>
<div className="container contact__container">
<div className="contact__options">
<article className='contact__option'>
<MdOutlineEmail className='contact__option__icon'/>
<h4>Email</h4>
<h5>izoragraphics@gmail.com</h5>
<a href='mailto:izoragraphics@gmail.com' target='_blank'>send a
message</a>
</article>
<article className='contact__option'>
<BsPinterest className='contact__option__icon'/>
<h4>Pinterest</h4>
<h5>Profile</h5>
<a href='https://pinterest.com/izoragraphics'
target='_blank'>Connect with me on Pinterest</a>
</article>
<article className='contact__option'>
<BsWhatsapp className='contact__option__icon'/>
<h4>WhatsApp</h4>
<h5>Directly message</h5>
<a href='https://web.whatsapp.com/send?phone=+237658908619'
target='_blank'>Whatsapp me</a>
</article>
</div>




<form ref={form} onSubmit={sendEmail}>
<input type="text" name='name' placeholder='full name' required/>
<input type="email" name='email' placeholder='your email' required/>
<textarea name="message" id="message" cols="30" rows="10"
placeholder='your message' required></textarea>
<button type="submit" className='btn btn-primary btn1'>send message</button>



</form>

</div>

</section>



)
}
export default Contact