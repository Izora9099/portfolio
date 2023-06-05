
import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img1.png";
import IMG2 from "../../assets/img2.png";
import IMG3 from "../../assets/img3.png";
import IMG4 from "../../assets/img4.png";
import IMG5 from "../../assets/img5.png";
import IMG6 from "../../assets/img6.png";
import me from "../../assets/Fury.png";
import me1 from "../../assets/B-W.png";
import me2 from "../../assets/Cool girl.png";
import me3 from "../../assets/Raindrops.png";
import me4 from "../../assets/Shawty.png";
import me5 from "../../assets/MY CRUSH DISPLAY 2.png";
import me6 from "../../assets/photo_2023-03-26_10-57-34.jpg";
import me7 from "../../assets/Ms Ajax.png";
import me8 from "../../assets/BABY DISPLAY.png";
import me9 from "../../assets/BEAUTY QUEEN2.png";
import me10 from "../../assets/happy mothers day display 3.png";
import me11 from "../../assets/01.png";
import me12 from "../../assets/Raindrops.png";
const Portfolio = () => {
  return (
    <section id="portfolio">
     <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div class='portfolio-container'>
        <div class='portfolio-box'>
          <img src={me} alt='my image' />
          <div class='portfolio-layer'>
            <h4>Digital Art</h4>
            <p>
              Transform your space with captivating digital art
            </p>
            <div className='  see-more btn ctn'>See More!</div>
          </div>
        </div>
        <div class='portfolio-box'>
          <img src={me1} alt='my image' />
          <div class='portfolio-layer'>
            <h4>Digital Art</h4>
            <p>
              Transform your space with captivating digital art
            </p>
            <div className='  see-more btn'>See More!</div>
          </div>
        </div>
        <div class='portfolio-box'>
          <img src={me2} alt='my image' />
          <div class='portfolio-layer'>
            <h4>Digital Art</h4>
            <p>
              Transform your space with captivating digital art
            </p>
            <div className='  see-more btn'>See More!</div>
          </div>
        </div>
        <div class='portfolio-box'>
          <img src={me6} alt='my image' />
          <div class='portfolio-layer'>
            <h4>Digital Art</h4>
            <p>
              Transform your space with captivating digital art
            </p>
            <div className='  see-more btn'>See More!</div>
          </div>
        </div>

        <div class='portfolio-box'>
          <img src={me4} alt='my image' />
          <div class='portfolio-layer'>
            <h4>Digital Art</h4>
            <p>
              Transform your space with captivating digital art
            </p>
            <div className='  see-more btn'>See More!</div>
          </div>
        </div>

        <div class='portfolio-box'>
          <img src={me5} alt='my image' />
          <div class='portfolio-layer'>
            <h4>Digital Art</h4>
            <p>
              Transform your space with captivating digital art
            </p>
            <div className='  see-more btn'>See More!</div>
          </div>
        </div>
        <div class='portfolio-box'>
          <img src={me7} alt='my image' />
          <div class='portfolio-layer'>
            <h4>Digital Art</h4>
            <p>
              Transform your space with captivating digital art
            </p>
            <div className='  see-more btn'>See More!</div>
          </div>
        </div>
        
        <div class='portfolio-box'>
          <img src={me8} alt='my image' />
          <div class='portfolio-layer'>
            <h4>Digital Art</h4>
            <p>
              Transform your space with captivating digital art
            </p>
            <div className='  see-more btn'>See More!</div>
          </div>
        </div>
        <div class='portfolio-box'>
          <img src={me9} alt='my image' />
          <div class='portfolio-layer'>
            <h4>Digital Art</h4>
            <p>
              Transform your space with captivating digital art
            </p>
            <div className='  see-more btn'>See More!</div>
          </div>
        </div>{" "}
        <div class='portfolio-box'>
          <img src={me10} alt='my image' />
          <div class='portfolio-layer'>
            <h4>Digital Art</h4>
            <p>
              Transform your space with captivating digital art
            </p>
            <div className='  see-more btn'>See More!</div>
          </div>
        </div>
        <div class='portfolio-box'>
          <img src={me11} alt='my image' />
          <div class='portfolio-layer'>
            <h4>Digital Art</h4>
            <p>
              Transform your space with captivating digital art
            </p>
            <div className='  see-more btn'>See More!</div>
          </div>
      </div>
      <div class='portfolio-box'>
          <img src={me12} alt='my image' />
          <div class='portfolio-layer'>
            <h4>Digital Art</h4>
            <p>
              Transform your space with captivating digital art
            </p>
            <div className='  see-more btn'>See More!</div>
          </div>
      </div>
      
    
       </div>
       
    </section>
  );
};

export default Portfolio;
