import React from 'react'
import { Parallax } from 'react-parallax'
import Contact from '../components/Contact'
import Header from '../partials/Header'
import Testimonials from '../components/Testimonials'
import FullSlideshow from '../partials/FullSlideshow'

function HomePage () {
  const insideStyles = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  }
  const image2 =
    'https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg'
  const image3 =
    'https://images.pexels.com/photos/3210189/pexels-photo-3210189.jpeg'
  const image4 =
    'https://images.pexels.com/photos/2437299/pexels-photo-2437299.jpeg'

  return (
    // <div id="home-page" className="bg-black-asphalt">
    //   <Header
    //     title="Home"
    //     description="Seasoned maestro of dance, electronic, hip-hop, and underground house music, renowned for mesmerizing sets and creating unforgettable atmospheres"
    //     image="../assets/images/djcg-logo.png"
    //     url="https://thecaffeineteam.org/"
    //   />
    //   <Parallax strength={500}>
    //     <div style={{ height: '50vh' }}>
    //       <FullSlideshow />
    //     </div>
    //   </Parallax>
    //   <Parallax strength={300}>
    //     <div style={{ height: '50vh' }}>
    //       <Testimonials />
    //     </div>
    //   </Parallax>
    //   <Parallax strength={400}>
    //     <div style={{ height: '50vh' }}>
    //       <Contact />
    //     </div>
    //   </Parallax>
    // </div>
    <div id='home-page' className='bg-black-asphalt'>
      <Header
        title='Home'
        description='Seasoned maestro of dance, electronic, hip-hop, and underground house music, renowned for mesmerizing sets and creating unforgettable atmospheres'
        image='../assets/images/djcg-logo.png'
        url='https://thecaffeineteam.org/'
      />
<Parallax
  strength={100}
  renderLayer={(percentage) => {
    const halfwayPoint = 0.75;
    const opacity =
      percentage <= halfwayPoint
        ? 1
        : 1 - (percentage - halfwayPoint) / (1 - halfwayPoint);

    const style = {
      opacity,
      transition: 'opacity 0.5s ease', // Adjust the transition duration as desired
    };

    return (
      <div style={style}>
        <FullSlideshow />
      </div>
    );
  }}
>
  <div className='h-3/4 shadow-lg'>
    <div
      id='slideshow-headline'
      className='text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white absolute w-full max-w-3xl mx-auto'
      style={insideStyles}
    >
     <h1 className="djcg-header-1">Welcome to the sick, twisted world of DJ Chris G!</h1>
    </div>
  </div>
</Parallax>


      <Parallax bgImage={image3} blur={{ min: 10, max: -10 }}>
        <div className='h-3/4'>
          <div
            id='testimonials-container'
            className='absolute w-full max-w-7xl mx-auto'
            style={insideStyles}
          >
            <Testimonials />
          </div>
        </div>
      </Parallax>
      <Parallax bgImage={image2} strength={-500}>
        <div className='bg-blue-ice-trans shadow-inner h-screen'>
          <div
            id='contact-container'
            className='absolute w-full'
            style={insideStyles}
          >
            <Contact />
          </div>
        </div>
      </Parallax>
      <Parallax
        bgImage={image4}
        strength={200}
        renderLayer={percentage => (
          <div>
            <div
              style={{
                position: 'absolute',
                background: `rgba(255, 125, 0, ${percentage * 1})`,
                left: '50%',
                top: '50%',
                borderRadius: '50%',
                transform: 'translate(-50%,-50%)',
                width: percentage * 500,
                height: percentage * 500
              }}
            />
          </div>
        )}
      >
        <div style={{ height: 500 }}>
          <div style={insideStyles}>renderProp</div>
        </div>
      </Parallax>
    </div>
  )
}

export default HomePage
