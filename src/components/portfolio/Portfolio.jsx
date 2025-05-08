import React, { useEffect, useState } from 'react';
import appwriteService from '../../appwrite/appwriteService';
import LoadingSpinner from '../common/LoadingSpinner';
import './portfolio.css';

const Portfolio = () => { 
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await appwriteService.listDocuments('681c086300399ca68598', '681c08a2c05a6f8dfa54');
        const formattedData = response.documents.map(item => ({
          id: item.$id,
          image: item.image,
          title: item.title,
          content: item.content,
          seemore: item.seemore
        }));
        setData(formattedData);
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
        setError('Failed to load portfolio items. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  if (isLoading) {
    return (
      <section id='portfolio'>
        <h5>My recent work</h5>
        <h2>Portfolio</h2>
        <LoadingSpinner />
      </section>
    );
  }

  if (error) {
    return (
      <section id='portfolio'>
        <h5>My recent work</h5>
        <h2>Portfolio</h2>
        <div className="error-message">{error}</div>
      </section>
    );
  }

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
