import React from 'react';
import caffeineLogo from '../assets/images/svgs/tct-logo-mobile.svg';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Reveal from 'react-awesome-reveal';
import Contact from '../components/Contact';
import Header from '../partials/Header';
import Process from '../partials/Process';
import { GiCoffeeCup } from "react-icons/gi";

const AboutUs = () => {
  const revealSettings = {
    from: "bottom",
    distance: "20px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    delay: 100,
  };
  return (
    <div id="about-page" className="bg-white">
      <Header
        title="About Us"
        description="Innovative, High-Performance Web Experiences That Drive Results. We love websites and everything related!"
        image="../assets/images/icons/tct-logo-mobile.svg"
        url="https://thecaffeineteam.org/about"
      />
      <div className="tct-about-content max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center">
          <img
            src={caffeineLogo}
            alt="The Caffeine Team"
            width={200}
            height={200}
            className=""
          />
            <h2 className="tct-header-2 text-center mt-8 mb-10 sm:mb-12">
              About The Caffeine Team
            </h2>
          <Reveal {...revealSettings}>
            <p className="text-base sm:text-lg max-w-2xl text-center text-gray-500 mb-10 sm:mb-16 md:mb-20 lg:mb-24">
              We specialize in web strategy, SEO, and creating brilliant
              websites using modern web technologies such as Javascript
              frameworks and third-party services.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Reveal triggerOnce {...revealSettings}>
            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold mb-2">Our Mission</div>
              <p className="text-sm sm:text-base max-w-2xl text-center text-gray-500 mb-5 md:mb-6">
                Our mission is to optimize the web presence and brand of local
                and small to medium-sized companies by creating beautiful,
                functional, and high-performance websites that drive traffic and
                conversions.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold mb-2">Our Values</div>
              <ul className="flex flex-col items-center justify-center gap-1 text-sm sm:text-base text-center text-gray-500">
                <li className=""><GiCoffeeCup className='text-sm text-orange-mid inline mr-1' /> <div className='inline'>Customer satisfaction is our top priority</div></li>
                <li className=""><GiCoffeeCup className='text-sm text-orange-mid inline mr-1' /> <div className='inline'>We believe in transparency and honesty</div></li>
                <li className=""><GiCoffeeCup className='text-sm text-orange-mid inline mr-1' /> <div className='inline'>We strive for excellence in everything we do</div></li>
                <li className=""><GiCoffeeCup className='text-sm text-orange-mid inline mr-1' /> <div className='inline'>We foster a culture of creativity and innovation</div></li>
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-2xl font-bold mb-2">Follow Us</div>
              <div className="flex justify-center">
                <a
                  href="https://facebook.com/the-caffeine-team"
                  className="text-gray-500 hover:text-gray-700 transition duration-300 mx-2"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="https://twitter.com/the-caffeine-team"
                  className="text-gray-500 hover:text-gray-700 transition duration-300 mx-2"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://instagram.com/the-caffeine-team"
                  className="text-gray-500 hover:text-gray-700 transition duration-300 mx-2"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <Process />
      <Contact />
    </div>
  );
};
export default AboutUs;
