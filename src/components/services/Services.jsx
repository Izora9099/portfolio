import React from 'react'
import './services.css'
const Services = () => {
  return (
    <section class="services" id="services">
      <h5>Services I Offer</h5>
      <h2 class="heading">Our <span>Services</span></h2>
      <div class="services-container">
        <div class="services-box">
          <i class="bx bx-code-alt"></i>
          <h3>Web Design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo qui
            modi autem expedita iure sit cum facilis fugit voluptates, dicta
            amet nobis? Qui, laborum accusantium.
          </p>
          <a href="#" class="btn">Read More</a>
        </div>
        <div class="services-box">
          <i class="bx bxs-paint"></i>
          <h3>Graphic Design</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo qui
            modi autem expedita iure sit cum facilis fugit voluptates, dicta
            amet nobis? Qui, laborum accusantium.
          </p>
          <a href="#" class="btn">Read More</a>
        </div>
        <div class="services-box">
          <i class="bx bx-bar-chart-alt"></i>
          <h3>Digital Marketing</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo qui
            modi autem expedita iure sit cum facilis fugit voluptates, dicta
            amet nobis? Qui, laborum accusantium.
          </p>
          <a href="#" class="btn">Read More</a>
        </div>
      </div>
    </section>
  )
}

export default Services