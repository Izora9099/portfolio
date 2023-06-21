import React from "react";
import "./testimonial.css";

import AV1 from "../../assets/avat1.jpg";
import AV2 from "../../assets/avat2.jpg";
import AV3 from "../../assets/avat3.jpg";
import AV4 from "../../assets/avat4.jpg";


// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//NEED TO DOWNLOAD AND INSTALL THE SWIPER CORE AND WHAT NOT
export const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      testimonial:
     "Izoragraphics you're the best man! The work you did for me was impeccable and my mom loved her mother's day gift so very much.",
      avatar: AV1,
      Cname: "Rozay Oz",
    },
    {
      id: 2,
      testimonial:
      "You took my reservations against digital art and shattered them in pieces. Your work is the absolute best and I look forward to working extensively with you in the years to come",
      avatar: AV2,
      Cname: "Eliza Fops",
    },
    {
      id: 3,
      testimonial:
      " I have just one word- EPIC! That's all I can say. In any case, I look forward to working with you again soon ",
      avatar: AV3,
      Cname: "Duesen-Berry",
    },
    {
      id: 4,
      testimonial:
      "The digital art was amazing dude. I honestly didn't think it would be that good. Thank you so very much, Look forward to more paintings from you!",
      avatar: AV4,
      Cname: "Terry Reezy",
    },
  ];
  return (
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {testimonials.map((testi) => {
          return (
            <SwiperSlide key={testi.id} className="testimonial">
              <div className="client__avatar">
                <img src={testi.avatar} alt="client avatar" />
              </div>
              <h5 className="client__name"> {testi.Cname} </h5>
              <small className="client__review"> {testi.testimonial} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonial;
