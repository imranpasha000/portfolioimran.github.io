import React from 'react'
import './Testimonials.css'
import AVATR1 from'../../assets/avatar1.jpg'
import AVATR2 from'../../assets/avatar2.jpg'
import AVATR3 from'../../assets/avatar3.jpg'
import AVATR4 from'../../assets/avatar4.jpg'
/* ************************************** */

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";



function Testimonials() {


  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    
   <section id='testimonials'>
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

  <div className="container testimonials__container">



  <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><article className='testimonial'>
    <div className='client__avatar'>
      <img src={AVATR1} alt="Avatar One" />
      </div>
      <h5 className='client__name'>Ernest Achiever</h5>
      <small className='client__review'>
      Lorem ipsum dolor sit amet. Sed illum
       repellendus sit tenetur neque eos 
       architecto quisquam quo unde alias.
        Aut architecto animi et quis voluptate
         est minus nemo.
      </small>
  </article></SwiperSlide>
        <SwiperSlide><article className='testimonial'>
    <div className='client__avatar'>
      <img src={AVATR2} alt="Avatar One" />
      </div>
      <h5 className='client__name'>Ernest Achiever</h5>
      <small className='client__review'>
      Lorem ipsum dolor sit amet. Sed illum
       repellendus sit tenetur neque eos 
       architecto quisquam quo unde alias.
        Aut architecto animi et quis voluptate
         est minus nemo.
      </small>
  </article></SwiperSlide>
        <SwiperSlide><article className='testimonial'>
    <div className='client__avatar'>
      <img src={AVATR3} alt="Avatar One" />
      </div>
      <h5 className='client__name'>Ernest Achiever</h5>
      <small className='client__review'>
      Lorem ipsum dolor sit amet. Sed illum
       repellendus sit tenetur neque eos 
       architecto quisquam quo unde alias.
        Aut architecto animi et quis voluptate
         est minus nemo.
      </small>
  </article></SwiperSlide>
        <SwiperSlide><article className='testimonial'>
    <div className='client__avatar'>
      <img src={AVATR4} alt="Avatar One" />
      </div>
      <h5 className='client__name'>Ernest Achiever</h5>
      <small className='client__review'>
      Lorem ipsum dolor sit amet. Sed illum
       repellendus sit tenetur neque eos 
       architecto quisquam quo unde alias.
        Aut architecto animi et quis voluptate
         est minus nemo.
      </small>
  </article></SwiperSlide>
        <SwiperSlide><article className='testimonial'>
    <div className='client__avatar'>
      <img src={AVATR1} alt="Avatar One" />
      </div>
      <h5 className='client__name'>Ernest Achiever</h5>
      <small className='client__review'>
      Lorem ipsum dolor sit amet. Sed illum
       repellendus sit tenetur neque eos 
       architecto quisquam quo unde alias.
        Aut architecto animi et quis voluptate
         est minus nemo.
      </small>
  </article></SwiperSlide>
        <SwiperSlide><article className='testimonial'>
    <div className='client__avatar'>
      <img src={AVATR2} alt="Avatar One" />
      </div>
      <h5 className='client__name'>Ernest Achiever</h5>
      <small className='client__review'>
      Lorem ipsum dolor sit amet. Sed illum
       repellendus sit tenetur neque eos 
       architecto quisquam quo unde alias.
        Aut architecto animi et quis voluptate
         est minus nemo.
      </small>
  </article></SwiperSlide>
        <SwiperSlide><article className='testimonial'>
    <div className='client__avatar'>
      <img src={AVATR3} alt="Avatar One" />
      </div>
      <h5 className='client__name'>Ernest Achiever</h5>
      <small className='client__review'>
      Lorem ipsum dolor sit amet. Sed illum
       repellendus sit tenetur neque eos 
       architecto quisquam quo unde alias.
        Aut architecto animi et quis voluptate
         est minus nemo.
      </small>
  </article></SwiperSlide>
        <SwiperSlide><article className='testimonial'>
    <div className='client__avatar'>
      <img src={AVATR4} alt="Avatar One" />
      </div>
      <h5 className='client__name'>Ernest Achiever</h5>
      <small className='client__review'>
      Lorem ipsum dolor sit amet. Sed illum
       repellendus sit tenetur neque eos 
       architecto quisquam quo unde alias.
        Aut architecto animi et quis voluptate
         est minus nemo.
      </small>
  </article></SwiperSlide>
      
      </Swiper>
    </div>
   </section>
  );
}

export default Testimonials
