import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

function contact() {
  return (
    <section id='contact'>
    
    <h5>Get In Touch</h5>

<h2>Contact Me</h2>

<div className='container contact__container'>
  <div className='contact__options'>
    <article className='contact__option'>
      <MdOutlineEmail className='contact__option-icon'/>
      <h4>Email</h4>
      <h5>Pashaturki19081@gmail.com</h5>
      <a href='https://mail.google.com/mail/u/1/#inbox'>Send a messages</a>
    </article>

    <article className='contact__option'>
      <RiMessengerLine className='contact__option-icon'/>
      <h4>Instagram</h4>
      <h5>pasha_imran00</h5>
      <a href='https://www.instagram.com/pasha_imran00/'>Send a messages</a>
    </article>

    <article className='contact__option'>
      <BsWhatsapp className='contact__option-icon'/>
      <h4>WhatsApp</h4>
      <h5>+91-9639328205</h5>
      <a href='https://web.whatsapp.com/send?phone+919639328205'>Send a messages</a>
    </article>

    </div>
  
   {/* END OF CONTACT OPTION */}

  
    <form action=''>
      <input type='text' name ="name" placeholder="Your Name" required />
      <input type='email' name ="email" placeholder="Your Email" required />
      <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
   <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
  </div>
    </section>
  );
}

export default contact
