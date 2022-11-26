import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt="About Image" />

        </div>

      </div>

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
         <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>6+ Months working</small>
          </article>
          
          <article className='about__card'>
         <FiUser className='about__icon'/>
          <h5>Clients</h5>
          <small>10+  Worldwide</small>
          </article>


         <article className='about__card'>
         <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>10+  completed</small>
          </article>
        </div>
     
     <p>To obtain a challenging position that will allow me to utilizes my education,
strong organisational skills and ability in a fast-paced environment.i am willing
to learn new concepts which would help the company to excel as the person.
being an enthusiastic fresher, highly motivated and eager to contribute to team
success through hard work and excellent organisational skills with strong
communication. have a good academic background of electronic and
communication engineering. Good analytical thinking with a practical approach
to problem solving.
</p>

<a href='#contact' className='btn btn-primary'>Let's Talk</a>

      </div>

    </div>
    </section>
  )
}

export default About
