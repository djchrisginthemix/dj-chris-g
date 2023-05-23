import React from 'react';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Cta from '../components/CTA';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import Header from '../partials/Header';
import HeroSlider from '../partials/HeroSlider';
import Process from '../partials/Process';

function HomePage() {
  return (
    <div id="home-page" className="bg-white">
       <Header
        title="Home"
        description="Innovative, High-Performance Web Experiences That Drive Results. We love websites and everything related!"
        image="../assets/images/icons/tct-logo-mobile.svg"
        url="https://thecaffeineteam.org/"
      />
      <HeroSlider />
      <Services />
      <Testimonials />
      <Process />
      <Portfolio />
      <Cta />
      <Contact />
    </div>
  );
};
export default HomePage;