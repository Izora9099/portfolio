import React from "react";
import "./Experience.css";
import {BsPatchCheckFill} from "react-icons/bs";
const experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Front End Web Development</h3>
          <div className='experience__content'>
            <div>
              {" "}
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </article>
            </div>
            <div>
              {" "}
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>CSS3+Flexbox</h4>
                <small className='text-light'>Mid Level</small>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>JavaScript</h4>
                <small className='text-light'>Amateur</small>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>React</h4>
                <small className='text-light'>Amateur</small>
              </article>
            </div>
          </div>
        </div>
        <div className='experience__backend'>
          <h3> Digital Arts and Portraits </h3>
          <div className='experience__content'>
            <div>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Digital Arts</h4>
                <small className='text-light'>Professional</small>
              </article>
            </div>
            <div>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Enlargemnts</h4>
                <small className='text-light'>Professional</small>
              </article>
            </div>
           
            <div>
              {" "}
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>Digital Cartooning</h4>
                <small className='text-light'>Mid Level</small>
              </article>
            </div>
          </div>
        </div>
        <div className='experience__backend'>
          <h3> Web Design Backend </h3>
          <div className='experience__content'>
            <div>
              {" "}
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <h4>Node Js</h4>
                <small className='text-light'>Experienced</small>
              </article>
            </div>

            <div>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <h4>My SQL</h4>
                <small className='text-light'>Experienced</small>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
