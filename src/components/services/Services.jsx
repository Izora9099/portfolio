import React from "react";
import "./services.css";
import { BsPatchCheckFill } from "react-icons/bs";

export const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p>
                Creating content for your social media pages like TikTok,
                Instagram, Facebook
              </p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p>I create content that captivates and engages.</p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p>
                I can help you reach your target audience with engaging content.
              </p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p>I'm a creative thinker who can come up with original ideas.</p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p> Proficient in writing and editing across various mediums</p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p>Knowledge of storytelling and narrative structure</p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p>
                Ability to create engaging content tailored to specific
                audiences
              </p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p>Experience with social media and marketing materials</p>
            </li>
          </ul>
        </article>
        {/*END OF CONTENT CREATION*/}

        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p>I build websites that are both beautiful and functional.</p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p>
                I'm a web developer who loves to create user-friendly
                experiences.
              </p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p>I'm passionate about using technology to solve problems.</p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p>Proficient in HTML, CSS, and JavaScript</p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p>Knowledge of UI/UX design principles </p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p>
                Familiarity with responsive design and cross-browser
                compatibility
              </p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p>Ability to collaborate with clients and stakeholders</p>
            </li>
          </ul>
        </article>

        {/*END OF WEB DEVELOPMENT*/}

        <article className='service'>
          <div className='service__head'>
            <h3>Digital Art</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p> Proficient in digital cartooning and digital painting</p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p>
                Expertise in framing pictures and professional picture
                enhancement
              </p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p>Knowledge of cutting-edge software and tools</p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p>Collaborated with clients to bring their vision to life</p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p>
                Delivered high-quality work that exceeded client expectation
              </p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p>
                Worked on a variety of projects, from small-scale to large-scale
              </p>
            </li>
            <li>
              <BsPatchCheckFill className='service__list-icon' />
              <p>
                Attention to detail and ability to work to specific client needs
              </p>
            </li>
          </ul>
        </article>
        {/*END OF PHOTOGRAPHY*/}
      </div>
    </section>
  );
};

export default Services;
