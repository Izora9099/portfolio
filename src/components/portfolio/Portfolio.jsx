import React from 'react'
import './portfolio.css'
import me from '../../assets/Fury.png'
import me1 from '../../assets/B-W.png'
import me2 from '../../assets/Cool girl.png'
import me3 from '../../assets/Raindrops.png'
import me4 from '../../assets/Shawty.png'
import me5 from '../../assets/MY CRUSH DISPLAY 2.png'
import me6 from '../../assets/OLPWRZ1;lkjhgf.png'
import me7 from '../../assets/Ms Ajax.png'
import me8 from '../../assets/BABY DISPLAY.png'
import me9 from '../../assets/BEAUTY QUEEN2.png'
import me10 from '../../assets/happy mothers day display 3.png'
import me11 from '../../assets/01.png'

const Portfolio = () => {
  return (
    <section class="portfolio" id="portfolio">
    <h2 class="heading">Latest <span>Projects</span></h2>
    <div class="portfolio-container">
      <div class="portfolio-box">
      <img src={me} alt='my image'/>
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur axime sed error impedit
            nisi quas.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>

      <div class="portfolio-box">
      <img src={me1} alt='my image'/>
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur axime sed error impedit
            nisi quas.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>

      <div class="portfolio-box">
      <img src={me2} alt='my image'/>
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur axime sed error impedit
            nisi quas.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>

      <div class="portfolio-box">
      <img src={me3} alt='my image'/>
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur axime sed error impedit
            nisi quas.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>

      <div class="portfolio-box">
      <img src={me4} alt='my image'/>
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur axime sed error impedit
            nisi quas.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>

      <div class="portfolio-box">
      <img src={me5} alt='my image'/>
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur axime sed error impedit
            nisi quas.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>
      <div class="portfolio-box">
      <img src={me6} alt='my image'/>
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p class="writeup">
            Lorem, ipsum dolor sit amet consectetur axime sed error impedit
            nisi quas.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>

      <div class="portfolio-box">
      <img src={me7} alt='my image'/>
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur axime sed error impedit
            nisi quas.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>

      <div class="portfolio-box">
      <img src={me8} alt='my image'/>
        <div class="portfolio-layer">
          <h4>Web Design</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur axime sed error impedit
            nisi quas.
          </p>
          <a href="#"><i class="bx bx-link-external"></i></a>
        </div>
      </div>
    </div>
    
   
  </section>

  
  )
}

export default Portfolio