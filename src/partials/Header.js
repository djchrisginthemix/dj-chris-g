import React, { useState, useEffect, useRef } from "react";
import caffeineLogo from '../assets/images/svgs/tct-logo.svg';
import { Zoom } from "react-awesome-reveal";
import SEO from '../components/SEO';
import Navbar from '../partials/Navbar';
import { MdOutlineCoffeeMaker, MdCoffeeMaker } from 'react-icons/md';

const Header = ({ title, description, image, url }) => {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (showNav) {
      setNavHeight(navRef.current.scrollHeight);
    } else {
      setNavHeight(0);
    }
  }, [showNav]);

  const zoomSettings = {
    from: "bottom",
    fraction: .45,
    duration: 400,
    easing: "cubic-bezier(0.1, 0, 0, 1)",
    delay: 0,
  };

  return (
    <Zoom triggerOnce {...zoomSettings}>
      <header className="bg-beige-light shadow">
        <SEO title={title} description={description} image={image} url={url} />
        <div className="w-full max-w-8xl mx-auto pl-2 pr-4 sm:px-6 py-3">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <a className="hover:opacity-80 duration-500 transition-all ease-in-out" href="/">
                  <h1 className="tct-header-1"><img src={caffeineLogo} alt="The Caffeine Team" width={916} height={537} className="w-96 md:w-64 lg:w-96"/></h1>
                </a>
              </div>

              <div className="flex md:hidden pt-4">
                <button
                  type="button"
                  className={`text-4xl ${
                    showNav ? "text-blue-teal" : "text-gray-800"
                  } hover:text-blue-teal focus:outline-none outline-none transition duration-500 ease-in-out`}
                  aria-label="toggle menu"
                  onClick={() => setShowNav(!showNav)}
                >
                  {showNav ? <MdCoffeeMaker /> : <MdOutlineCoffeeMaker />}
                </button>
              </div>
            </div>

            <nav
              ref={navRef}
              className={`md:flex md:items-center md:justify-center ${
                showNav ? "mobile-nav" : ""
              }`}
              style={{
                height: showNav ? navHeight : "auto",
                overflow: "hidden",
                transition: showNav ? "height 0.3s ease-in-out" : "none",
              }}
            >
              <Navbar showNav={showNav} setShowNav={setShowNav} />
            </nav>
          </div>
        </div>
      </header>
    </Zoom>
  );
};

export default Header;
