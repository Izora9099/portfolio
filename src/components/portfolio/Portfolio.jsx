import React from 'react'
import './portfolio.css'
import me from '../../assets/Fury.png'
import me1 from '../../assets/B-W.png'
import me2 from '../../assets/Cool girl.png'
import me3 from '../../assets/01.png'
import me4 from '../../assets/Shawty.png'
import me5 from '../../assets/MY CRUSH DISPLAY 2.png'
import me6 from '../../assets/photo_2023-03-26_10-57-34.jpg'
import me7 from '../../assets/Ms Ajax.png'
import me8 from '../../assets/BABY DISPLAY.png'
import me9 from '../../assets/BEAUTY QUEEN2.png'
import me10 from '../../assets/happy mothers day display 3.png'
import me11 from '../../assets/Raindrops.png'
import me12 from '../../assets/Raindrops.png'

export const Portfolio = () => {
  const portfolioContent = [
    {
      id: 1,
      image: me,
      title: 'Project1',
      content: ' Transform your space with captivating digital art',
      seemore: '#'
    },
    {
      id: 2,
      image: me1,

      title: 'Project2',
      content: ' Transform your space with captivating digital art',
      seemore: '#'
    },
    {
      id: 3,
      image: me2,

      title: 'Project3',
      content: ' Transform your space with captivating digital art',
      seemore: '#'
    },
    {
      id: 4,
      image: me3,

      title: 'Project4',
      content: ' Transform your space with captivating digital art',
      seemore: '#'
    },
    {
      id: 5,
      image: me4,

      title: 'Project5',
      content: ' Transform your space with captivating digital art',
      seemore: '#'
    },
    {
      id: 6,
      image: me5,

      title: 'Project6',
      content: ' Transform your space with captivating digital art',
      seemore: '#'
    },
    {
      id: 7,
      image: me6,

      title: 'Project7',
      content: ' Transform your space with captivating digital art',
      seemore: '#'
    },
    {
      id: 8,
      image: me7,

      title: 'Project8',
      content: ' Transform your space with captivating digital art',
      seemore: '#'
    },
    {
      id: 9,
      image: me8,

      title: 'Project9',
      content: ' Transform your space with captivating digital art',
      seemore: '#'
    },
    {
      id: 10,
      image: me9,

      title: 'Project10',
      content: ' Transform your space with captivating digital art',
      seemore: '#'
    },
    {
      id: 11,
      image: me10,

      title: 'Project11',
      content: ' Transform your space with captivating digital art',
      seemore: '#'
    },
    {
      id: 12,
      image: me11,

      title: 'Project12',
      content: ' Transform your space with captivating digital art',
      seemore: '#'
    }
  ]
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div class='portfolio-container'>
        {portfolioContent.map(({ id, image, title, content, seemore }) => {
          return (
            <div className='portfolio-box'>
              <article key={id} className=''>
                <div className='portfolio__item__image'>
                

                  <img src={image} alt={title} className='portImage' />
                </div>
                <div className="portfolio-layer">
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
