import React, { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax'
import Contact from '../components/Contact'
import LinktreeSubscribe from '../components/LinktreeSubscribe'
import Header from '../partials/Header'
import Testimonials from '../components/Testimonials'
import FullSlideshow from '../partials/FullSlideshow'
import testimonialsBG from '../assets/images/testimonials-bg.jpg'
import contactFG from '../assets/images/contact-fg.webp'
import contactBGdesktop from '../assets/images/contact-bg.webp'
import contactBGmobile from '../assets/images/contact-bg-mobile.webp'
import loading2 from '../assets/images/loading/loading2.webp'

function HomePage () {
  const insideStyles = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  }

  const testimonialsImage = testimonialsBG;
  const contactDesktopImage = contactBGdesktop;
  const contactMobileImage = contactBGmobile;
  const linktreeImage = loading2;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint to match your mobile size
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const contactImage = isMobile ? contactMobileImage : contactDesktopImage;

  return (
    <div id='home-page' className='bg-black-solid'>
      <Header
        title='Home'
        description='Seasoned maestro of dance, electronic, hip-hop, and underground house music, renowned for mesmerizing sets and creating unforgettable atmospheres'
        image='../assets/images/djcg-logo-simple.svg'
        url='https://chrisginthemix.com/'
      />
      <Parallax
        strength={100}
        renderLayer={percentage => {
          const halfwayPoint = 0.75
          const opacity =
            percentage <= halfwayPoint
              ? 1
              : 1 - (percentage - halfwayPoint) / (1 - halfwayPoint)

          const style = {
            opacity,
            transition: 'opacity 0.5s ease' // Adjust the transition duration as desired
          }

          return (
            <div style={style}>
              <FullSlideshow />
            </div>
          )
        }}
      >
        <div className='h-3/4 shadow-lg'>
          <div
            id='slideshow-headline'
            className='flex flex-col gap-4 md:gap-16 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white absolute w-full max-w-5xl mx-auto md:mt-neg5 px-6 md:pl-80 shadow-md'
            style={insideStyles}
          >
            <h1 className='djcg-header-1 flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center'>
              <div>Welcome to the sick, twisted mind of <span className="text-blue-ice whitespace-nowrap">DJ Chris G</span></div>{' '}
              <a
                title='#inthemix with DJ Chris G'
                target='_blank'
                rel="noreferrer"
                className='text-pink-mid hover:text-blue-ice break-words transition duration-500 ease-in-out'
                href='https://z-p42.www.instagram.com/explore/tags/inthemix/'
              >
                <em className='font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>#inthemix</em>
              </a>
            </h1>
            <div className='flex flex-col md:flex-row justify-between gap-8 md:gap-16 md:ml-20 mt-14 md:mt-24 pb-10'>
              <p className='text-base md:text-xl'>
                <em>Mezzo Grille in Middletown, CT.</em>
              </p>
              <p className='text-base md:text-xl md:mt-neg5'>
                <em>O'Connors Public House in Brookfield, CT.</em>
              </p>
              <p className='text-base md:text-xl md:mt-neg10'>
                <em>My Bar &amp; Grille in Milford, CT.</em>
              </p>
            </div>
          </div>
        </div>
      </Parallax>

      <Parallax bgImage={testimonialsImage} blur={{ min: 10, max: -10 }}>
        <div className='min-h-180vh md:min-h-0 h-full md:h-3/4 shadow-inner'>
          <div
            id='testimonials-container'
            className='absolute w-full max-w-7xl mx-auto'
            style={insideStyles}
          >
            <Testimonials />
          </div>
        </div>
      </Parallax>
      <div id="contact-parallax">
      <Parallax bgImage={contactImage} strength={-500}>
        <div className='shadow-md min-h-160vh md:min-h-0 h-full md:h-screen relative'>
          <div
            id='contact-container'
            className='absolute w-full z-20'
            style={insideStyles}
          >
            <Contact />
          </div>
          <img src={contactFG} alt="DJ Chris G" title="DJ Chris G"  className="absolute z-10 bottom-0 right-10 w-full max-w-80 md:max-w-96 drop-shadow-custom"/>
        </div>
      </Parallax>
      </div>
      <Parallax
        bgImage={linktreeImage}
        strength={200}
        renderLayer={percentage => (
          <div className='h-1/2 shadow-inner'>
            <div
              className='relative'
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
            <div className='flex w-full justify-center items-center h-1/2'>
              <LinktreeSubscribe />
            </div>
          </div>
        )}
      ></Parallax>
    </div>
  )
}

export default HomePage
