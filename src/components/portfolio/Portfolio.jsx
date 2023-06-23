import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './portfolio.css';
const Portfolio = () => { 
const [data, setData] = useState([]);
useEffect(() => {
axios.get("https://izora-react-backend.cyclic.app/api/portfolio").then(response => {
        const formattedData = response.data.data.map(item => ({
          id:item._id,
          image: item.image,
          title:item.title,
          content:item.content,
          seemore:item.seemore
        }));
        setData(formattedData)
      }).catch(error=> {
        console.log("error fetching portfolio data", error);
      } )
    }, []);
   return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div class='portfolio-container'>
        {
        data.map(({ id, image, title, content, seemore }) => {
          return (
            <div className='portfolio-box'>
              <article key={id} className=''>
                <div className='portfolio__item__image'>
                  <img src={image} alt={title} className='portImage' />
                </div>
                <div className='portfolio-layer'>
                  <h3> {title} </h3>
                  <p>{content}</p>
                  <div className='portfolio__item__cta'>
                    <a
                      href={seemore}
                      className='see-more btn'
                      target='_blank'
                      rel='noreferrer'
                    >
                      See More!
                    </a>
                  </div>
                </div>
              </article>
            </div>
           
          )
        })}
      </div>
    </section>
  );
};

export default Portfolio; 
