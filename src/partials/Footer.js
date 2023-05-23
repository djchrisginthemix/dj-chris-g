import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {

  return (
    <div className="bg-black-mid">
        <footer id="djcg-footer-mid" className="bg-black-asphalt text-white py-20 border-t-2 border-t-white">
          <div id="djcg-footer-layout" className="w-full max-w-8xl grid grid-cols-1 sm:grid-cols-4 mx-auto px-6 justify-around gap-12 sm:gap-16">

            {/* About Us Section */}
            <div id="djcg-footer-about-us" className="flex flex-col w-full cols-span-2 order-1">
              <div className="text-yellow-mid text-left text-lg sm:text-xl uppercase font-bold mb-4 sm:mb-6">About</div>
              <p className="text-base">
                <strong>dj Chris G</strong> is a seasoned expert in dance, electronic, hip-hop, and underground house music, captivating crowds with his dynamic sets, seamless track blending, and infectious energy, while leaving a lasting impression through his immersive and memorable atmospheres.
              </p>
            </div>

            {/* Connect With Us Section */}
            <div id="djcg-footer-connect-with-us" className="flex flex-col w-full order-2">
              <div className="text-yellow-mid text-left text-lg sm:text-xl uppercase font-bold mb-4 sm:mb-6">Connect</div>
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
            </div>

            {/* Contact Us Section */}
            <div id="djcg-footer-contact-us" className="flex flex-col w-full order-3">
              <div className="text-yellow-mid text-left text-lg sm:text-xl uppercase font-bold mb-4 sm:mb-6">Contact</div>
              <div className="flex flex-col">
                <h4 className="text-base font-bold mb-2">dj Chris G</h4>
                <a href="tel:845-558-5493" className="mr-4 hover:underline hover:text-blue-ice text-lg transition duration-500 ease-in-out">
                  ###-###-####
                </a>
                <a href="mailto:help@thecaffeineteam.org" className="hover:underline hover:text-blue-ice text-lg transition duration-500 ease-in-out">
                  djchrisg@gmail.com
                </a>
              </div>
            </div>
          </div>
        </footer>
    </div>
  );
};
export default Footer;
