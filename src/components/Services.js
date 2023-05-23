import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Button from '../components/Button'
import SectionHeading from './SectionHeading'
import Reveal from 'react-awesome-reveal'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const Services = () => {
  const revealSettings = {
    from: 'bottom',
    distance: '20px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    delay: 100
  }

  const services = [
    {
      id: 'tct-service-1',
      title: 'Web Design',
      description:
        "We design beautiful and engaging websites that capture your audience's attention and help grow your business.",
      className:
        'flex flex-col justify-between min-h-18rem bg-blue-teal text-white rounded-lg shadow-md pb-6',
      link: '/services',
      color: 'orangeYellow'
    },
    {
      id: 'tct-service-2',
      title: 'SEO Optimization',
      description:
        'We can help improve your search engine rankings and drive more traffic to your website with our proven SEO strategies.',
      className:
        'flex flex-col justify-between min-h-18rem bg-blue-teal text-white rounded-lg shadow-md pb-6',
      link: '/services',
      color: 'orangeYellow'
    },
    {
      id: 'tct-service-3',
      title: 'E-Commerce Solutions',
      description:
        'We can help you set up and customize your online store with features such as shopping carts, payment gateways, and more.',
      className:
        'flex flex-col justify-between min-h-18rem bg-blue-teal text-white rounded-lg shadow-md pb-6',
      link: '/services',
      color: 'orangeYellow'
    },
    {
      id: 'tct-service-4',
      title: 'Web Development',
      description:
        'We offer a wide range of web development services, including front-end and back-end development, CMS integration, and more.',
      className:
        'flex flex-col justify-between min-h-18rem bg-blue-teal text-white rounded-lg shadow-md pb-6',
      link: '/services',
      color: 'orangeYellow'
    },
    {
      id: 'tct-service-5',
      title: 'UI/UX Design',
      description:
        'We specialize in creating intuitive and user-friendly interfaces that provide a seamless experience for your customers.',
      className:
        'flex flex-col justify-between min-h-18rem bg-blue-teal text-white rounded-lg shadow-md pb-6',
      link: '/services',
      color: 'orangeYellow'
    },
    {
      id: 'tct-service-6',
      title: 'Website Maintenance',
      description:
        'We can help you keep your website up-to-date and running smoothly with regular maintenance and support services.',
      className:
        'flex flex-col justify-between min-h-18rem bg-blue-teal text-white rounded-lg shadow-md pb-6',
      link: '/services',
      color: 'orangeYellow'
    }
  ]

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
    dotsClass: 'slick-dots custom-dots',
    prevArrow: <FaAngleLeft className='slick-prev' />,
    nextArrow: <FaAngleRight className='slick-next' />,
    autoplay: true,
    autoplaySpeed: 6000, // Change this to the desired duration
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <section
      id='services-section'
      className='bg-beige-light shadow-inner py-10 sm:py-14 md:py-16 lg:py-20'
    >
      <div className='w-full mx-auto max-w-7xl'>
        <div className='text-center px-6'>
          <SectionHeading text='Our Popular Services' />
          <p className='text-sm md:text-base text-gray-600 mb-10 sm:mb-12 md:mb-14 lg:mb-16'>
            <strong>The Caffeine Team</strong> offers a variety of solutions
            that can help you grow your business online. Our team of experienced
            professionals specializes in web design, SEO optimization,
            e-commerce solutions, web development, UI/UX design, and website
            maintenance. Whether you need a new website, want to improve your
            search engine rankings, or require ongoing support, we have the
            expertise to help you achieve your goals. We take a user-centric
            approach to all our services and strive to create intuitive and
            user-friendly interfaces that provide a seamless experience for your
            customers. Our commitment to delivering high-quality results is
            reflected in the positive feedback we receive from our clients.
            Choose us for your web development needs, and we will work with you
            to create an online presence that sets you apart from the
            competition.
          </p>
        </div>
        <Reveal triggerOnce {...revealSettings}>
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={service.id} className='px-6 md:px-4'>
                <div className={service.className}>
                  <h3 className='bg-gray-800 text-white text-2xl font-bold rounded-t-lg p-4 mb-4'>
                    {service.title}
                  </h3>
                  <p className='px-6 mb-6'>{service.description}</p>
                  <div className='flex justify-center items-center'>
                    <Button
                      text='Learn More'
                      useLink={true}
                      color={service.color}
                      link={service.link}
                      size='sm'
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Reveal>
      </div>
    </section>
  );
};
export default Services;
