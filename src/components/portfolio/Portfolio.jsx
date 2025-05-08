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
        const response = await appwriteService.listDocuments('681c086300399ca68598', '681c087e0031be6c71f1');
        const formattedData = response.documents.map(item => ({
          id: item.$id,
          image: item.imageURL,
          title: item.title,
          description: item.description,
          techStack: Array.isArray(item.techStack) ? item.techStack : [],
          projectLink: item.projectLink
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

  /*
  for getting the imageURL, just navigate to the file in the bucket in appwrite and copy and paste, simple
  
  */
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div class='portfolio-container'>
        {
        data.map(({ id, image, title, description, techStack, projectLink }) => {
          return (
            <div key={id} className='portfolio-box'>
              <article className=''>
                <div className='portfolio__item__image'>
                  <img src={image} alt={title} className='portImage' />
                </div>
                <div className='portfolio-layer'>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className='tech-stack'>
                    {techStack.map((tech, index) => (
                      <span key={index} className='tech-tag'>{tech}</span>
                    ))}
                  </div>
                  <div className='portfolio__item__cta'>
                    <a
                      href={projectLink}
                      className='see-more btn'
                      target='_blank'
                      rel='noreferrer'
                    >
                      View Project
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
