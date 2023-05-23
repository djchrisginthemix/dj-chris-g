import React, { useState, useEffect, useMemo } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../assets/css/heroSlider.css'
import Button from '../components/Button'
import partnersSlide from '../assets/images/gifs/partners-responsive-slide.gif'
import vivazCantinaSlide from '../assets/images/webp/vivaz-cantina-slide.webp'
import partnersSeoSlide from '../assets/images/gifs/macbook-vivaz-seo.gif'
import slideBG1 from '../assets/images/webp/slideBG1.webp'
import slideBG2 from '../assets/images/webp/slideBG2.webp'
import slideBG3 from '../assets/images/webp/slideBG3.webp'
import slideBG4 from '../assets/images/webp/slideBG4.webp'
import slideBG5 from '../assets/images/webp/slideBG5.webp'

const HeroSlider = () => {
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
      }, 3000)

      return () => {
        clearInterval(interval) // Clean up the interval when the component unmounts
      }
    }
  }, [isImagesLoaded, slideUrls])

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots custom-dots',
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  }
  const slides = [
    {
      title: 'SEO-Optimized Websites for Maximum Visibility',
      description:
        'Our websites are designed to rank highly on search engines, so your business can be found by more potential customers. We use the latest SEO techniques and strategies to ensure that your website is easily discovered by those searching for your products or services.',
      image: partnersSeoSlide,
      color: 'orange',
      link: '/services'
    },
    {
      title: 'Adaptive and Mobile-Optimized Websites',
      description:
        'We design websites that work seamlessly across all devices, ensuring that your customers can access your site anytime, anywhere. With a focus on responsive design, we deliver user-friendly experiences that drive business growth.',
      image: partnersSlide,
      color: 'blue',
      link: '/services'
    },
    {
      title: 'Stunning and User-Focused Web Design',
      description:
        'Our team specializes in creating visually stunning and user-focused websites that help your business stand out online. From clean layouts to custom graphics, we craft sites that engage visitors and encourage conversions.',
      image: vivazCantinaSlide,
      color: 'yellow',
      link: '/services'
    }
  ]

  return (
    <section
      id='hero-slider-section'
      className='hero-slider relative w-full mx-auto py-10 sm:py-14 md:py-16 lg:py-20'
    >
      <div className='hero-slider-wrapper relative z-10'>
        <Slider {...settings} style={{ zIndex: 2 }}>
          {slides.map((slide, index) => (
            <div key={index} className={`slide w-full relative`}>
              <div className='w-full max-w-8xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12 lg:gap-16 xl:gap-20'>
                <div className='w-full md:w-1/2 px-6'>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className='block relative rounded-lg shadow-lg'
                  />
                </div>
                <div className='w-full md:w-1/2 px-6'>
                  <div className='w-full max-w-2xl mx-auto'>
                    <div className='text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center md:text-left mb-8'>
                      {slide.title}
                    </div>
                    <p className='text-gray-600 mb-8'>{slide.description}</p>
                    <div className='form-actions flex justify-center items-center sm:justify-end sm:items-end mt-8'>
                      <Button
                        useLink={true}
                        text='Learn More'
                        color={slide.color}
                        link={slide.link}
                        size='lg'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
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
    </section>
  )
}

export default HeroSlider
