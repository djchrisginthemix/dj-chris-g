import React, { useState } from 'react';
import Fade from 'react-awesome-reveal';
import SectionHeading from './SectionHeading';
import { useNavigate } from 'react-router-dom';

import {
  FaDesktop,
  FaMobile,
  FaCode,
  FaSearch,
  FaShoppingCart,
  FaChartBar,
  FaFileAlt,
  FaPaintBrush,
  FaUserFriends,
  FaCloudUploadAlt,
  FaShieldAlt,
  FaComments,
} from 'react-icons/fa';

const ServiceCard = ({
  icon,
  title,
  description,
  delay,
  selected,
  onChange,
}) => {
  return (
    <Fade delay={delay} duration={400} offset={0} animateIn="fadeIn">
      <div
        className={`ct-service flex flex-col items-center justify-start text-left ${
          selected ? 'selected' : ''
        }`}
        onClick={onChange}
      >
        <div className="w-full flex gap-x-3 items-center mb-5">
          <div
            className={`text-3xl sm:text-4xl lg:text-5xl transition duration-500 ease-in-out ${
              selected ? 'text-yellow-mid' : 'text-gray-200'
            }`}
          >
            {icon}
          </div>
          <h3
            className={`text-xl sm:text-2xl font-bold transition duration-500 ease-in-out ${
              selected ? 'text-gray-800' : 'text-gray-300'
            }`}
          >
            {title}
          </h3>
        </div>
        <p
          className={`text-base sm:text-lg font-normal transition duration-500 ease-in-out ${
            selected ? 'text-gray-800' : 'text-gray-300'
          }`}
        >
          {description}
        </p>
      </div>
    </Fade>
  )
}

const ServicesGrid = ({ onSubmit }) => {
  const services = [
    {
      icon: <FaDesktop />,
      title: 'Web Design',
      description:
        'We design beautiful, user-friendly, and responsive websites that are tailored to your business needs.',
      delay: 0,
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Development',
      description:
        'We develop mobile apps for iOS and Android that are engaging, intuitive, and optimized for performance.',
      delay: 100,
    },
    {
      icon: <FaCode />,
      title: 'Front-end Development',
      description:
        'We specialize in front-end development using the latest technologies to create fast, responsive, and user-friendly web applications.',
      delay: 200,
    },
    {
      icon: <FaSearch />,
      title: 'Search Engine Optimization',
      description:
        'We help businesses rank higher in search engine results pages by optimizing their websites for relevant keywords and search terms.',
      delay: 300,
    },
    {
      icon: <FaShoppingCart />,
      title: 'E-commerce Development',
      description:
        'We build custom e-commerce solutions that are secure, scalable, and designed to help you grow your online business.',
      delay: 400,
    },
    {
      icon: <FaChartBar />,
      title: 'Analytics and Reporting',
      description:
        'We provide analytics and reporting services to help you track the performance of your website and make data-driven decisions.',
      delay: 500,
    },
    {
      icon: <FaFileAlt />,
      title: 'Content Creation',
      description:
        'We create high-quality content that engages your audience and helps you stand out in a crowded market.',
      delay: 600,
    },
    {
      icon: <FaPaintBrush />,
      title: 'Graphic Design',
      description:
        'We provide a wide range of graphic design services, including logo design, branding, and marketing materials.',
      delay: 700,
    },
    {
      icon: <FaUserFriends />,
      title: 'UX/UI Design',
      description:
        'We design intuitive and user-friendly interfaces that provide an exceptional user experience.',
      delay: 800,
    },
    {
      icon: <FaCloudUploadAlt />,
      title: 'Web Hosting',
      description:
        'We provide reliable and secure web hosting services to ensure that your website is always available to your customers.',
      delay: 900,
    },
    {
      icon: <FaShieldAlt />,
      title: 'Website Security',
      description:
        'We provide website security services to protect your website from hacking attempts and other online threats.',
      delay: 1000,
    },
    {
      icon: <FaComments />,
      title: 'Social Media Marketing',
      description:
        'We provide social media marketing services to help you reach and engage your audience on popular social media platforms.',
      delay: 1100,
    },
  ]

  const [selectedServices, setSelectedServices] = useState([])
  const navigate = useNavigate();

  const handleSelectService = (service) => {
    setSelectedServices((prevSelectedServices) => {
      const alreadySelected = prevSelectedServices.some(
        (s) => s.title === service.title,
      );
      if (alreadySelected) {
        return prevSelectedServices.filter((s) => s.title !== service.title);
      }
      return [...prevSelectedServices, service];
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedServiceTitles = selectedServices.map((service) => service.title);
    navigate(`/contact?services=${selectedServiceTitles.join(',')}`);
  };

  return (
    <section id="services-grid-section" className="w-full max-w-7xl mx-auto py-20 px-6">
      <SectionHeading text="Build the Perfect Plan" />

      <form onSubmit={handleSubmit}>
        <div className="djcg-services-grid grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-4 md:gap-12 my-16">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
              selected={selectedServices.some(
                (s) => s.title === service.title,
              )}
              onChange={() => handleSelectService(service)}
            />
          ))}
        </div>
        <div id="djcg-services-grid-submission" className="w-full grid grid-cols-1 xs:grid-cols-6 gap-8 mt-14 sm:mt-20">
        <div id="djcg-services-selected-container" className="col-span-6 sm:col-span-4 md:col-span-5">
          <div className="text-gray-800 text-xl font-bold mb-6 sm:mb-8">Service(s) you selected:</div>
          <div id="djcg-services-selected" className="service-bubbles flex flex-wrap gap-2 justify-left">
              {services
                .filter(
                  (service) =>
                    selectedServices.findIndex((s) => s.title === service.title) !==
                    -1,
                )
                .map((service, index) => (
                  <div
                    key={service.title}
                    className="service-bubble selected rounded-full bg-orange-mid text-white font-bold text-xs sm:text-sm py-3 px-4 sm:px-6"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {service.title}
                  </div>
                ))}
              </div>
          </div>
          <div id="djcg-services-submit-container" className="col-span-6 sm:col-span-2 md:col-span-1 xs:flex items-end justify-end">
              <input value="Request a Quote" type="submit" className="bg-blue-teal hover:bg-orange-mid text-white text-base md:text-lg font-bold rounded-full transition duration-500 ease-in-out px-10 md:px-14 py-4 shadow-sm" />
          </div>
        </div>
      </form>
    </section>
  );
};
export default ServicesGrid;
