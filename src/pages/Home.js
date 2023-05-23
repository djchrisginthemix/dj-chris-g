import React from 'react'
import { Parallax } from 'react-parallax'
import Contact from '../components/Contact'
import LinktreeSubscribe from '../components/LinktreeSubscribe'
import Header from '../partials/Header'
import Testimonials from '../components/Testimonials'
import FullSlideshow from '../partials/FullSlideshow'
import loading1 from '../assets/images/loading/loading1.jpg'
import loading2 from '../assets/images/loading/loading2.jpg'
import contactBG from '../assets/images/contact-bg.jpg'

function HomePage () {
  const insideStyles = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)'
  }

  const image1 = loading1
  const image2 = contactBG
  const image3 = loading2

  return (
    <div id='home-page' className='bg-black-asphalt'>
      <Header
        title='Home'
        description='Seasoned maestro of dance, electronic, hip-hop, and underground house music, renowned for mesmerizing sets and creating unforgettable atmospheres'
        image='../assets/images/djcg-logo.png'
        url='https://thecaffeineteam.org/'
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
              <span>Welcome to the sick, twisted world of DJ Chris G</span>{' '}
              <em className='font-light'>#inthemix</em>
            </h1>
            <div class='flex flex-col md:flex-row justify-between gap-8 md:gap-16 md:ml-20'>
              <p className='text-base md:text-2xl'>
                <em>Resident DJ @ Mezzo Grille Fridays</em>
              </p>
              <p className='text-base md:text-2xl md:mt-neg5'>
                <em>Special Featured DJ @ Shrine NightClub, Foxwoods Casino</em>
              </p>
            </div>
          </div>
        </div>
      </Parallax>

      <Parallax bgImage={image1} blur={{ min: 10, max: -10 }}>
        <div className='min-h-screen h-full md:h-3/4 shadow-inner'>
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
        <div className='bg-black-solid shadow-md min-h-screen h-full md:h-screen'>
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
        bgImage={image3}
        strength={200}
        renderLayer={percentage => (
          <div className="h-1/2 shadow-inner">
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
                       <div
            className='flex w-full justify-center items-center h-1/2'><LinktreeSubscribe /></div>
          </div>
        )}
      >
      </Parallax>
    </div>
  )
}

export default HomePage
