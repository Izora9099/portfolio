import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/img1.png'
import IMG2 from '../../assets/img2.png'
import IMG3 from '../../assets/img3.png'
import IMG4 from '../../assets/img4.png'
import IMG5 from '../../assets/img5.png'
import IMG6 from '../../assets/img6.png'
import me from '../../assets/Fury.png'
import me1 from '../../assets/B-W.png'
import me2 from '../../assets/Cool girl.png'
import me3 from '../../assets/Raindrops.png'
import me4 from '../../assets/Shawty.png'
import me5 from '../../assets/MY CRUSH DISPLAY 2.png'
import me6 from '../../assets/photo_2023-03-26_10-57-34.jpg'
import me7 from '../../assets/Ms Ajax.png'
import me8 from '../../assets/BABY DISPLAY.png'
import me9 from '../../assets/BEAUTY QUEEN2.png'
import me10 from '../../assets/happy mothers day display 3.png'
import me11 from '../../assets/01.png'
import me12 from '../../assets/Raindrops.png'
import ListPortfolio from './listPortfolio'
export const Portfolio = () => {
  const portfolioContent = [
    {
      image: me,
      seemore: '#',
      id: 1,
      title: 'Project1',
      content: ' Transform your space with captivating digital art'
    },
    {
      image: me1,
      seemore: '#',
      id: 2,
      title: 'Project2',
      content: ' Transform your space with captivating digital art'
    },
    {
      image: me2,
      seemore: '#',
      id: 3,
      title: 'Project3',
      content: ' Transform your space with captivating digital art'
    },
    {
      image: me3,
      seemore: '#',
      id: 4,
      title: 'Project4',
      content: ' Transform your space with captivating digital art'
    },
    {
      image: me4,
      seemore: '#',
      id: 5,
      title: 'Project5',
      content: ' Transform your space with captivating digital art'
    },
    {
      image: me5,
      seemore: '#',
      id: 6,
      title: 'Project6',
      content: ' Transform your space with captivating digital art'
    },
    {
      image: me6,
      seemore: '#',
      id: 7,
      title: 'Project7',
      content: ' Transform your space with captivating digital art'
    },
    {
      image: me7,
      seemore: '#',
      id: 8,
      title: 'Project8',
      content: ' Transform your space with captivating digital art'
    },
    {
      image: me8,
      seemore: '#',
      id: 9,
      title: 'Project9',
      content: ' Transform your space with captivating digital art'
    },
    {
      image: me9,
      seemore: '#',
      id: 10,
      title: 'Project10',
      content: ' Transform your space with captivating digital art'
    },
    {
      image: me10,
      seemore: '#',
      id: 11,
      title: 'Project11',
      content: ' Transform your space with captivating digital art'
    },
    {
      image: me11,
      seemore: '#',
      id: 12,
      title: 'Project12',
      content: ' Transform your space with captivating digital art'
    }
  ]
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <ListPortfolio />
      <div class='portfolio-container'>
        {portfolioContent.map((content, id) => {
          return (
            <div className='portfolio-box'>
              <article key={id} className='portfolio-layer'>
                <div className='portfolio__item__image'>
                  <img src={content.image} alt=' one' className='portImage' />
                </div>
                <h3> {content.title} </h3>
                <p>{content.content}</p>
                <div className='portfolio__item__cta'>
                  <a
                    href={content.seemore}
                    className='see-more btn ctn'
                    target='_blank'
                    rel='noreferrer'
                  >
                    See More!
                  </a>
                </div>
              </article>
            </div>
            /*
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
}
      <div class='portfolio-container'>
        
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
      */
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
