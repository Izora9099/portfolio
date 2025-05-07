import React, { useEffect, useState } from "react";
import appwriteService from '../../appwrite/appwriteService';
import "./testimonial.css";
// import Swiper core and required modules
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import axios from "axios";
  const Testimonials = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get("https://izora-react-backend.cyclic.app/api/testimonial").then(res=> {
          const formmatedData = res.data.data.map(item => ({
              id:item._id,
              avatar:item.avatar,
              name:item.name,
              review:item.review,
        
          }));
  console.log(`Here i am: ${formmatedData}`);
  setData(formmatedData);
  } )
  .catch(error=> console.error(error));
  },[])
      return(
    <section id="testimonial">
      <h5>Review from client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map((testi) => {
          return (
            <SwiperSlide key={testi._id} className="testimonial">
              <div className="client__avatar">
                <img src={testi.avatar} alt="client avatar" />
              </div>
              <h5 className="client__name"> {testi.name} </h5>
              <small className="client__review"> {testi.review} </small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonials;
