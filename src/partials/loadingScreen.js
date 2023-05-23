import React, { useState, useEffect, useMemo } from 'react'
import '../assets/css/tct-loading-screen.css'
import tctBolt from '../assets/images/svgs/tct-bolt.svg'
import caffeineLogo from '../assets/images/svgs/tct-logo-mobile.svg'
import slideBG1 from '../assets/images/webp/slideBG1.webp'
import slideBG2 from '../assets/images/webp/slideBG2.webp'
import slideBG3 from '../assets/images/webp/slideBG3.webp'
import slideBG4 from '../assets/images/webp/slideBG4.webp'
import slideBG5 from '../assets/images/webp/slideBG5.webp'

const LoadingScreen = () => {
  const slideUrls = useMemo(
    () => [slideBG1, slideBG2, slideBG3, slideBG4, slideBG5],
    []
  )
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isImagesLoaded, setImagesLoaded] = useState(false)

  const preloadImages = async imageUrls => {
    const promises = imageUrls.map(url => {
      return new Promise((resolve, reject) => {
        const image = new Image()
        image.onload = resolve
        image.onerror = reject
        image.src = url
      })
    })

    await Promise.all(promises)
  }

  useEffect(() => {
    const preload = async () => {
      try {
        await preloadImages(slideUrls)
        setImagesLoaded(true)
      } catch (error) {
        console.error('Error preloading images:', error)
      }
    }

    preload()
  }, [slideUrls])

  useEffect(() => {
    if (isImagesLoaded) {
      const interval = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % slideUrls.length)
      }, 2000)

      return () => {
        clearInterval(interval) // Clean up the interval when the component unmounts
      }
    }
  }, [isImagesLoaded, slideUrls])

  useEffect(() => {
    const beans = document.querySelector('.beans')
    const handleAnimationEnd = () => {
      beans.classList.add('hide')
    }
    beans.addEventListener('animationend', handleAnimationEnd)
    return () => {
      beans.removeEventListener('animationend', handleAnimationEnd)
    }
  }, [])

  return (
    <div
      id='caffeine-team-loading-screen'
      className='bg-beige-light w-full h-screen flex items-start justify-center overflow-hidden'
    >
      {isImagesLoaded && (
        <div className='motion-bg'>
          <div
            className='bg-image-container absolute inset-0'
            style={{ zIndex: 0 }}
          >
            {slideUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt=''
                className={`bg-animated-image ${
                  currentImageIndex === index ? 'fade-in' : ''
                }`}
              />
            ))}
          </div>
          <div
            className='bg-white opacity-60 absolute inset-0'
            style={{ zIndex: 1 }}
          ></div>
        </div>
      )}
      <div className='container relative z-10'>
        <div className='h-20 row overflow-hidden'>
          <div className='beans relative' style={{ left: '1rem' }}></div>
          <div className='beans relative' style={{ right: '2rem' }}></div>
          <div className='beans relative' style={{ left: '2rem' }}></div>
          <div className='beans relative' style={{ right: '1rem' }}></div>
        </div>
        <div className='row grinder'>
          <img
            className='tct-logo w-16 pt-4 mx-auto'
            src={caffeineLogo}
            alt='TCT Logo'
          />
        </div>
        <div className='row grinder_bottom'>
          <img
            className='tct-bolt w-28 pt-4 mx-auto'
            src={tctBolt}
            alt='TCT Bolt'
          />
        </div>
        <div className='row v60'></div>
        <div className='row drip'></div>
        <div className='caffeine-steam flex flex-col items-center justify-end mx-auto'>
          <svg
            width='580px'
            height='220px'
            className='m-0 p-0 flex'
            id='Layer_1'
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 429.13 491.77'
          >
            <path
              id='steam-1'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='steam'
              d='M426.78,268.95s-17.23,12.9-7,27.5c6.93,9.89,41,24.4,41,40.86,0,24.1-47.58,21.12-50.49,54.64-1.77,20.4,29.25,39.24,29.25,39.24'
              transform='translate(-295.92 -224.85)'
              strokeDasharray='1,42,30'
            />
            <path
              id='steam-2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='steam'
              d='M514.05,229.35c-.17,13.18-32.64,30.57-32.64,48.59,0,26.6,41,39.4,41,55.86,0,24.1-47.58,21.12-50.49,54.64-1.55,17.87,29,39.1,29.25,39.24'
              transform='translate(-295.92 -224.85)'
              strokeDasharray='54,4,16,7,48'
            />
            <path
              id='steam-3'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='steam'
              d='M554.36,268.95s-17.23,12.9-7,27.5c6.93,9.89,41,24.4,41,40.86,0,24.1-47.58,21.12-50.49,54.64-1.77,20.4,29.25,39.24,29.25,39.24'
              transform='translate(-295.92 -224.85)'
              strokeDasharray='48,12,32'
            />
          </svg>
        </div>
        <div className='row cup' style={{ marginTop: '-8rem' }}></div>
      </div>
    </div>
  )
}
export default LoadingScreen
