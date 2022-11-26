import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import { GitHub } from '@mui/icons-material'

function portfolio() {
  return (
    <section id='portfolio'>
 
 <h5> My Recent Work</h5>
 <h2> Portfolio</h2>
 
 <div className='container portfolio__container'>
 <article className='portfolio__item'>
  <div className="portfolio__item-image">
    <img src={IMG1} alt="" />
  </div>
  <h3>Build and Deploy a Fully Responsive Restaurant Website With Modren UIand UX in ReactJS...</h3>
  <div className='portfolio__item-cta'>
 <a href="http://github.com" className='btn' target='_blank'>Github</a>
 <a href="http://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
 </div>
 </article>

 <article className='portfolio__item'>
  <div className="portfolio__item-image">
    <img src={IMG2} alt="" />
  </div>
  <h3>Ecommerce grocery shopping website.</h3>
  <div className='portfolio__item-cta'>
 <a href="http://github.com" className='btn' target='_blank'>Github</a>
 <a href="http://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
 </div>
 </article>

 <article className='portfolio__item'>
  <div className="portfolio__item-image">
    <img src={IMG3} alt="" />
  </div>
  <h3> ToDo List </h3>
  <div className='portfolio__item-cta'>
 <a href="http://github.com" className='btn' target='_blank'>Github</a>
 <a href="http://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
 </div>
 </article>

 <article className='portfolio__item'>
  <div className="portfolio__item-image">
    <img src={IMG4} alt="" />
  </div>
  <h3> Implement the OTP login feature (OTP should received through our phone ) along with other normal login..</h3>
  <div className='portfolio__item-cta'>
 <a href="http://github.com" className='btn' target='_blank'>Github</a>
 <a href="http://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
 </div>
 </article>

 <article className='portfolio__item'>
  <div className="portfolio__item-image">
    <img src={IMG5} alt="" />
  </div>
  <h3> Portfolio compeleted using React.Js and Node.Js</h3>
  <div className='portfolio__item-cta'>
 <a href="http://github.com" className='btn' target='_blank'>Github</a>
 <a href="http://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
 </div>
 </article>


 <article className='portfolio__item'>
  <div className="portfolio__item-image">
    <img src={IMG6} alt="" />
  </div>
  <h3> Create a feature to pull the user's current location on profile page.</h3>
  <div className='portfolio__item-cta'>
 <a href="http://github.com" className='btn' target='_blank'>Github</a>
 <a href="http://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
 </div>
 </article>


 </div>
    </section>
  )
}

export default portfolio