import React, { useState, useEffect, useCallback } from 'react'
import djcgLogo from '../assets/images/djcg-logo.png'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Slider from 'react-slick'
import { projects } from '../partials/ProjectsData' // An array of project data
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Reveal from 'react-awesome-reveal'
import Contact from '../components/Contact'
import Header from '../partials/Header'

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeModalSlide, setActiveModalSlide] = useState(0);

  const openModal = (event, projectIndex) => {
    event.stopPropagation();
    setIsModalOpen(true);
    setActiveModalSlide(projectIndex);
  };

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  useEffect(() => {
    const handleModalOutsideClick = (event) => {
      const isClickInsideSlider = event.target.closest('.slick-slider');
      const isClickInsideModalContent = event.target.closest('.modal-content');
      
      if (!isClickInsideSlider && !isClickInsideModalContent) {
        closeModal();
      }
    };
    
  
    if (isModalOpen) {
      document.addEventListener('click', handleModalOutsideClick);
    }
  
    return () => {
      document.removeEventListener('click', handleModalOutsideClick);
    };
  }, [isModalOpen, closeModal]);
  
  

  const settings = {
    dots: false,
    arrows: true,
    prevArrow: <FaAngleLeft className="slick-prev" />,
    nextArrow: <FaAngleRight className="slick-next" />,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
          dotsClass: 'slick-dots custom-dots',
        },
      },
    ]
  }

  const revealSettings = {
    from: 'bottom',
    distance: '20px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    delay: 100,
  }
  return (
    <div id="portfolio-page" className="bg-black-mid">
      <Header
        title="Our Work"
        description="Innovative, High-Performance Web Experiences That Drive Results. We love websites and everything related!"
        image="../assets/images/djcg-logo.png"
        url="https://thecaffeineteam.org/portfolio"
      />
      <div className="djcg-portfolio-content max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center">
          <img
            src={djcgLogo}
            alt="dj Chris G"
            width={200}
            height={200}
            className=""
          />
          <h2 className="djcg-header-2 text-center mt-8 mb-10 sm:mb-12">
            Build With dj Chris G
          </h2>
          <Reveal {...revealSettings}>
            <div className="portfolio-intro text-base sm:text-lg max-w-5xl mx-auto text-center text-gray-500 mb-10 sm:mb-16 md:mb-20 lg:mb-24">
              <p className="mb-5 md:mb-6">
...
              </p>
            </div>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={(event) => openModal(event, index)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-100 w-full"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        {isModalOpen && (
          <div className="fixed z-20 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex items-center justify-center">
            <div className="w-11/12 md:w-full max-w-3xl max-h-3/4 bg-beige-light py-4 px-6">
            <Slider
              {...settings}
              initialSlide={activeModalSlide}
              onClick={(event) => event.stopPropagation()}
            >
                {' '}
                {projects.map((project) => (
                   <div key={project.id}>
                   <div className="aspect-w-16 aspect-h-9">
                     <video
                       src={project.video}
                       alt={project.title}
                       className="object-cover w-full h-full"
                       autoPlay
                       muted
                       loop
                     />
                   </div>
                 </div>
                ))}
              </Slider>
              <button
                className="absolute top-4 right-4 bg-orange-mid hover:bg-blue-teal text-white font-bold text-xl md:text-lg px-10 md:px-8 py-4 md:py-3 transition duration-500 ease-in-out rounded-full shadow-sm"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Contact />
    </div>
  )
}

export default Portfolio
