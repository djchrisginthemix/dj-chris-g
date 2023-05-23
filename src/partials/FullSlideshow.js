import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import djcgSlide1 from "../assets/images/djcgSlide1.png";

const slides = [
  {
    image: djcgSlide1,
    alt: "Slide 1",
    parallaxStrength: 0.3
  },
  {
    image: "https://via.placeholder.com/1200x800?text=Slide+2",
    alt: "Slide 2",
    parallaxStrength: 0.5
  },
  {
    image: "https://via.placeholder.com/1200x800?text=Slide+3",
    alt: "Slide 3",
    parallaxStrength: 0.7
  }
];

const FullSlideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="djcg-slideshow relative w-full max-w8xl">
      <ParallaxProvider>
        <Parallax y={[-20, 20]} tagOuter="div">
          <div className="parallax-container">
            <Slider {...settings}>
              {slides.map((slide, index) => (
                <div key={index} className="slide">
                  <div
                    className="parallax-slide"
                    style={{
                      height: '100vh',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        maxHeight: '100%',
                        maxWidth: '100%',
                      }}
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
};

export default FullSlideshow;
