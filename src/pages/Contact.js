import React from 'react';
import caffeineLogo from '../assets/images/svgs/tct-logo-mobile.svg';
import Header from '../partials/Header';
import Form from '../partials/Form';

const ContactUs = () => {

  return (
    <div id="contact-page" className="bg-white">
      <Header
        title="Contact Us"
        description="Innovative, High-Performance Web Experiences That Drive Results. We love websites and everything related!"
        image="../assets/images/icons/tct-logo-mobile.svg"
        url="https://thecaffeineteam.org/contact"
      />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center">
          <img
            src={caffeineLogo}
            alt="The Caffeine Team"
            width={200}
            height={200}
            className=""
          />
            <h2 className="tct-header-2 mt-8 mb-10">
              Contact The Caffeine Team
            </h2>
        </div>

        <div className="w-full">
            <div id="tct-form-container" className="py-10 sm:py-14 md:py-16 lg:py-20">
              <Form color="gray" />
            </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
