import React, { useState, useEffect, useMemo } from 'react'
import '../assets/css/tct-loading-screen.css'
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
            className='bg-black-asphalt opacity-60 absolute inset-0'
            style={{ zIndex: 1 }}
          ></div>
        </div>
      )}
      <div className='container relative z-10'>

      </div>
    </div>
  )
}
export default LoadingScreen
