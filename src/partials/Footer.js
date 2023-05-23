import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import FooterForm from './FooterForm';

const Footer = () => {

  return (
    <div className="bg-gray-700">
        <footer id="djcg-footer" className="bg-gray-800 text-white py-20 border-t-2 border-t-white">
          <div id="djcg-footer-layout" className="w-full max-w-8xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto px-6 justify-between gap-12 sm:gap-16">

            {/* About Us Section */}
            <div id="djcg-footer-about-us" className="flex flex-col w-full order-1">
              <div className="text-yellow-mid text-left text-lg sm:text-xl uppercase font-bold mb-4 sm:mb-6">About us</div>
              <p className="text-base">
                <strong>dj Chris G</strong> is a web design and development agency that creates
                beautiful, responsive, and functional websites for businesses of all
                sizes. Our team is passionate about delivering high-quality work and
                helping our clients achieve their online goals.
              </p>
            </div>

            {/* Connect With Us Section */}
            <div id="djcg-footer-connect-with-us" className="flex flex-col w-full order-2">
              <div className="text-yellow-mid text-left text-lg sm:text-xl uppercase font-bold mb-4 sm:mb-6">Connect with us</div>
              <div className="flex gap-2">
                <a href="https://www.facebook.com/" className="djcg-icon mr-4 hover:text-blue-ice transition duration-500 ease-in-out">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="https://www.twitter.com/" className="djcg-icon mr-4 hover:text-blue-ice transition duration-500 ease-in-out">
                  <FaTwitter className="text-3xl" />
                </a>
                <a href="https://www.instagram.com/" className="djcg-icon hover:text-blue-ice transition duration-500 ease-in-out">
                  <FaInstagram className="text-3xl" />
                </a>
              </div>
              {/* Links Section */}
              <div id="djcg-footer-links" className="flex flex-col w-full mt-12 sm:mt-16">
              <div className="text-yellow-mid text-left text-lg sm:text-xl uppercase font-bold mb-4 sm:mb-6">Resources</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-base">
                  <a href="/terms-of-service" className="text-white hover:text-blue-ice hover:underline transition duration-500 ease-in-out">Terms of Service</a>
                  <a href="/privacy-policy" className="text-white hover:text-blue-ice hover:underline transition duration-500 ease-in-out">Privacy Policy</a>
                  <a href="/disclaimer" className="text-white hover:text-blue-ice hover:underline transition duration-500 ease-in-out">Disclaimer</a>
                  <a href="/operating-agreement" className="text-white hover:text-blue-ice hover:underline transition duration-500 ease-in-out">Operating Agreement</a>
                </div>
              </div>
            </div>

            {/* Contact Us Section */}
            <div id="djcg-footer-contact-us" className="flex flex-col w-full order-3">
              <div className="text-yellow-mid text-left text-lg sm:text-xl uppercase font-bold mb-4 sm:mb-6">Contact us</div>
              <div className="flex flex-col">
                <h4 className="text-base font-bold mb-2">dj Chris G LLC</h4>
                <a href="tel:845-558-5493" className="mr-4 hover:underline hover:text-blue-ice text-lg transition duration-500 ease-in-out">
                  845-558-5493
                </a>
                <a href="mailto:help@thecaffeineteam.org" className="hover:underline hover:text-blue-ice text-lg transition duration-500 ease-in-out">
                  help@thecaffeineteam.org
                </a>
              </div>
            </div>

            {/* Get In Touch Section */}
            <div id="djcg-footer-get-in-touch" className="flex flex-col w-full order-4">
              <div className="text-yellow-mid text-left text-lg sm:text-xl uppercase font-bold mb-4 sm:mb-6">Get in touch</div>
                <FooterForm />
            </div>
          </div>
        </footer>
    </div>
  );
};
export default Footer;
