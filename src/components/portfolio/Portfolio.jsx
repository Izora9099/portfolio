import React from "react";
import "./portfolio.css";
import { FaExternalLinkAlt } from "react-icons/fa";
import me from "../../assets/Fury.png";
import me1 from "../../assets/B-W.png";
import me2 from "../../assets/Cool girl.png";
import me3 from "../../assets/Raindrops.png";
import me4 from "../../assets/Shawty.png";
import me5 from "../../assets/MY CRUSH DISPLAY 2.png";
import me6 from "../../assets/OLPWRZ1;lkjhgf.png";
import me7 from "../../assets/Ms Ajax.png";
import me8 from "../../assets/BABY DISPLAY.png";
import me9 from "../../assets/BEAUTY QUEEN2.png";
import me10 from "../../assets/happy mothers day display 3.png";
import me11 from "../../assets/01.png";

const Portfolio = () => {
  return (
    <section class='portfolio' id='portfolio'>
      <h5>See My Work</h5>
      <h2 class='heading'>
        Latest <span>Projects</span>
      </h2>
      <h3 className='section-head'>Digital Art</h3>
      <div class='portfolio-container'>
        <div class='portfolio-box'>
          <img src={me} alt='my image' />
          <div class='portfolio-layer'>
            <h4>Digital Art</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur axime sed error impedit
              nisi quas.
            </p>
            <div className='see-more'>
              <a href='#'>
                <FaExternalLinkAlt />
              </a>
              <br />
              See More!
            </div>
          </div>
        </div>

        <div class='portfolio-box'>
          <img src={me1} alt='my image' />
          <div class='portfolio-layer'>
            <h4>Digital Art</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur axime sed error impedit
              nisi quas.
            </p>
            <div className='see-more'>
              <a href='#'>
                <FaExternalLinkAlt />
              </a>
              <br />
              See More!
            </div>
          </div>
        </div>

        <div class='portfolio-box'>
          <img src={me2} alt='my image' />
          <div class='portfolio-layer'>
            <h4>Digital Art</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur axime sed error impedit
              nisi quas.
            </p>
            <div className='see-more'>
              <a href='#'>
                <FaExternalLinkAlt />
              </a>
              <br />
              See More!
            </div>
          </div>
        </div>
      </div>
      <br />
      <h3 className='section-head'>Digital Art</h3>
      <div class='portfolio-container'>
        <div class='portfolio-box'>
          <img src={me} alt='my image' />
          <div class='portfolio-layer'>
            <h4>Digital Art</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur axime sed error impedit
              nisi quas.
            </p>
            <div className='see-more'>
              <a href='#'>
                <FaExternalLinkAlt />
              </a>
              <br />
              See More!
            </div>
          </div>
        </div>

        <div class='portfolio-box'>
          <img src={me1} alt='my image' />
          <div class='portfolio-layer'>
            <h4>Digital Art</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur axime sed error impedit
              nisi quas.
            </p>
            <div className='see-more'>
              <a href='#'>
                <FaExternalLinkAlt />
              </a>
              <br />
              See More!
            </div>
          </div>
        </div>

        <div class='portfolio-box'>
          <img src={me2} alt='my image' />
          <div class='portfolio-layer'>
            <h4>Digital Art</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur axime sed error impedit
              nisi quas.
            </p>
            <div className='see-more'>
              <a href='#'>
                <FaExternalLinkAlt />
              </a>
              <br />
              See More!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
