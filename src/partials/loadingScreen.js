import React, { useState, useEffect, useMemo } from 'react'
import djcgLogo from '../assets/images/djcg-logo.svg'
import '../assets/css/djcg-loading-screen.css'
import loading3 from '../assets/images/loading/loading3.webp'
import loading4 from '../assets/images/loading/loading4.webp'
import loading5 from '../assets/images/loading/loading5.webp'
import loading6 from '../assets/images/loading/loading6.webp'
import loading7 from '../assets/images/loading/loading7.webp'
import loading8 from '../assets/images/loading/loading8.webp'
// import loading9 from '../assets/images/loading/loading9.webp'
// import loading10 from '../assets/images/loading/loading10.webp'
// import loading11 from '../assets/images/loading/loading11.webp'
// import loading12 from '../assets/images/loading/loading12.webp'
// import loading1 from '../assets/images/loading/loading1.webp'
// import loading2 from '../assets/images/loading/loading2.webp'
import flashLoading from '../assets/images/loading/flash-loading.webp'

const LoadingScreen = () => {
  const slideUrls = useMemo(
    () => [
      loading3,
      flashLoading,
      loading4,
      flashLoading,
      loading5,
      flashLoading,
      loading6,
      flashLoading,
      loading7,
      flashLoading,
      loading8,
      flashLoading,
    //   loading9,
    //   flashLoading,
    //   loading10,
    //   flashLoading,
    //   loading11,
    //   flashLoading,
    //   loading12,
    //   flashLoading,
    //   loading1,
    //   flashLoading,
    //   loading2,
    //   flashLoading,
    ],
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
      }, 300)

      return () => {
        clearInterval(interval) // Clean up the interval when the component unmounts
      }
    }
  }, [isImagesLoaded, slideUrls])

  return (
    <div
      id='djcg-loading-screen'
      className='bg-black-solid w-full h-screen flex items-start justify-center overflow-hidden'
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
                alt='Loading dj Chris G'
                width={1200}
                height={800}
                className={`bg-animated-image w-full h-full ${
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
      <div className='w-full h-full flex justify-center items-center z-10'>
        <img
          src={djcgLogo}
          alt='dj Chris G'
          width={362}
          height={154}
          className='w-72 heart-beat-animation drop-shadow-custom'
          style={{ animateDelay: 0}}
        />
      </div>
    </div>
  )
}
export default LoadingScreen
