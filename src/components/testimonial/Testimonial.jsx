import React, { useEffect, useState } from "react";
import appwriteService from '../../appwrite/appwriteService';
import "./testimonial.css";
import { Pagination, Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';

// Helper function to generate a color based on name
const getAvatarColor = (name) => {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5', '#9B59B6'];
  const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  return colors[index];
};

// Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={index < rating ? 'star filled' : 'star'}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
         const response = await appwriteService.listDocuments('681c086300399ca68598', '681c0c6900322cf134e3');
        const testimonials = response.documents.filter(doc => doc.approved);
        setData(testimonials);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      }
    };

    fetchTestimonials();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map((testi) => {
          const avatarColor = getAvatarColor(testi.name);
          const initial = testi.name.charAt(0).toUpperCase();

          return (
            <SwiperSlide key={testi.$id} className="testimonial">
              <div 
                className="client__avatar"
                style={{ 
                  backgroundColor: avatarColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '2rem',
                  fontWeight: 'bold'
                }}
              >
                {initial}
              </div>
              <h5 className="client__name">{testi.name}</h5>
              <StarRating rating={testi.rating} />
              <small className="client__review">{testi.message}</small>
              <p className="review-date">Posted on {formatDate(testi.createdAt)}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
export default Testimonials;
