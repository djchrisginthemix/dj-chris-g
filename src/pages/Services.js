import React from 'react';
import djcgLogo from '../assets/images/djcg-logo.png';
import ServicesGrid from '../components/ServiceGrid';
import SubscriptionPlans from '../components/SubscriptionPlans';
import Header from '../partials/Header';

const Services = () => {
  return (
    <div id="services-page" className="bg-black-mid">
      <Header
        title="Our Plans and Services"
        description="Innovative, High-Performance Web Experiences That Drive Results. We love websites and everything related!"
        image="../assets/images/djcg-logo.png"
        url="https://thecaffeineteam.org/services"
      />
      <div className="max-w-7xl mx-auto px-6 sm:py-14 md:py-16 lg:py-20">
        <div className="flex flex-col items-center">
          <img
            src={djcgLogo}
            alt="dj Chris G"
            width={200}
            height={200}
            className=""
          />
          <h2 className="djcg-header-2 text-center mt-8 mb-10 sm:mb-12">
            Services Provided By dj Chris G
          </h2>
          <div className="text-gray-600 text-center sm:text-left max-w-5xl mx-auto">
            <p className="text-base sm:text-lg text-center text-gray-500 mb-4">
              At dj Chris G, we offer a variety of web design and
              development services to help your business succeed online. From
              custom website design and development to mobile app development
              and e-commerce solutions, our team of experts has the skills and
              experience to deliver high-quality results that meet your unique
              needs.
            </p>
            <p className="text-base sm:text-lg text-center text-gray-500">
              Our goal is to help you take your online presence to the next
              level. Whether you're a small startup or a large corporation,
              we're committed to providing you with the best possible service
              and helping you achieve your business goals. Contact us today to
              learn more about how we can help your business grow online.
            </p>
          </div>
        </div>
      </div>
      <SubscriptionPlans />
      <hr className="my-10" />
      <ServicesGrid />
    </div>
  )
}
export default Services
