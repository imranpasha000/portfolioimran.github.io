import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

function Services() {
  return (
    <section id='services'>
     <h5>What I Offer</h5>
     <h2>Services</h2>


     <div className='container services__container'>
       <article className='services'>
        <div className='services__head'>

          <h3>UI/UX Design</h3>
        </div>
        <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Custom Web Design & Development. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Wireframing. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p> Mobile App Design.</p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Wearables App Design.. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Product Design. </p>
          
        </li>
        </ul>
        
       </article>
      {/* ENS OF UI.UX */}

      <article className='services'>
        <div className='services__head'>

          <h3>Web Development</h3>
        </div>

        <ul className='service__list'>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Front-end design and development. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Back-end development. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Integration. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Continuous support and evolution. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Web redesign / modernization, Help Desk </p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Web development / launch of a web app. </p>
        </li>
        </ul>
       </article>
      {/* ENS WEB DEVELOPMENT */}

      <article className='services'>
        <div className='services__head'>

          <h3>Content Creation</h3>
        </div>

        <ul className='service__list'>
        
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Content creation services are services that develop. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>write, and publish content for your business. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>producing blog posts to white papers to emails. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p> Content creation plans include search engine optimization. </p>
        </li>
        <li>
          <BiCheck className='service__list-icon'/>
          <p>.graphics, video, and more. </p>
        </li>
        </ul>
       </article>
      {/* ENS OF CONTENT CREATION*/}
     </div>
    </section>
  )
}

export default Services
