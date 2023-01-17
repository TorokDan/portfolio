import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// Import Swiper styles
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const avatars = [
  {
    id: 1,
    user_name: 'client 1',
    image: AVTR1,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consectetur, inventore, magnam placeat temporibus, cupiditate praesentium at hic ducimus odio tempore deleniti maiores consequuntur quas ratione optio nam sit dolores?"
  },
  {
    id: 2,
    user_name: 'client 2',
    image: AVTR2,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consectetur, inventore, magnam placeat temporibus, cupiditate praesentium at hic ducimus odio tempore deleniti maiores consequuntur quas ratione optio nam sit dolores?"
  },
  {
    id: 3,
    user_name: 'client 3',
    image: AVTR3,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consectetur, inventore, magnam placeat temporibus, cupiditate praesentium at hic ducimus odio tempore deleniti maiores consequuntur quas ratione optio nam sit dolores?"
  },
  {
    id: 4,
    user_name: 'client 4',
    image: AVTR4,
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consectetur, inventore, magnam placeat temporibus, cupiditate praesentium at hic ducimus odio tempore deleniti maiores consequuntur quas ratione optio nam sit dolores?"
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        cssMode={true}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        spaceBetween={100}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          avatars.map(({ id, user_name, image, review }) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={image} alt={user_name} />
                </div>
                <h5 className='client__name'>{user_name}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials