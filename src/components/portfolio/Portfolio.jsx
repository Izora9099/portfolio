import React from 'react'
import './portfolio.css'
import me from '../../assets/OLPWRZ1;lkjhgf.png'
import me1 from '../../assets/B-W.png'
import me2 from '../../assets/Cool girl.png'
import me3 from '../../assets/01.png'
import me4 from '../../assets/Ms Ajax.png'
import me5 from '../../assets/happy mothers day display 3.png'
export const Portfolio = () => {
  const portfolioContent = [
    {
      id: 1,
      image: me,
      title: 'Captivating Digital Art',
      content: ' Get breathtaking digital art at a free price',
      seemore: '#'
    },
    {
      id: 2,
      image: me1,

      title: 'Black and White Art',
      content: 'Grayscale digital art in quality',
      seemore: '#'
    },
    {
      id: 3,
      image: me2,

      title: 'Art to your taste',
      content: ' Any image of your choice can take on a digital art style',
      seemore: '#'
    },
    {
      id: 4,
      image: me3,

      title: 'HD Art',
      content: ' Digital art in extra high quality ',
      seemore: '#'
    },
    {
      id: 5,
      image: me4,

      title: 'Breathtaking Art',
      content: ' Art that will simply make you say wow!',
      seemore: '#'
    },
    {
      id: 6,
      image: me5,

      title: 'Beautiful Art',
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
