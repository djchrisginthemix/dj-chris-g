import React from 'react';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import Header from '../partials/Header';

function HomePage() {
  return (
    <div id="home-page" className="bg-black-mid">
       <Header
        title="Home"
        description="Innovative, High-Performance Web Experiences That Drive Results. We love websites and everything related!"
        image="../assets/images/djcg-logo.png"
        url="https://thecaffeineteam.org/"
      />
      <Testimonials />
      <Contact />
    </div>
  );
};
export default HomePage;