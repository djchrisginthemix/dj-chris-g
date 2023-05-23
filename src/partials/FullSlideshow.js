import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ParallaxProvider } from 'react-scroll-parallax'
import djcgSlide1 from '../assets/images/djcgSlide1.png'

const slides = [
  {
    image: djcgSlide1,
    alt: 'Slide 1'
  },
  {
    image: 'https://via.placeholder.com/1200x800?text=Slide+2',
    alt: 'Slide 2'
  },
  {
    image: 'https://via.placeholder.com/1200x800?text=Slide+3',
    alt: 'Slide 3'
  }
]

const FullSlideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true
  }


  return (
      <ParallaxProvider scrollAxis="vertical">
      <div className='djcg-slideshow w-screen h-screen'>
          <div className='parallax-container'>
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={index} className='slide'>
                  <div
                    className='parallax-slide'
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
      </div>
    </ParallaxProvider>
  )
}

export default FullSlideshow
