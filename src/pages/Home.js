import React from 'react';
import Contact from '../components/Contact';
import Header from '../partials/Header';
import Testimonials from '../components/Testimonials';
import FullSlideshow from '../partials/FullSlideshow';

function HomePage() {
  return (
    <div id="home-page" className="bg-black-asphalt">
       <Header
        title="Home"
        description="Seasoned maestro of dance, electronic, hip-hop, and underground house music, renowned for mesmerizing sets and creating unforgettable atmospheres"
        image="../assets/images/djcg-logo.png"
        url="https://thecaffeineteam.org/"
      />
      <FullSlideshow />
      <Testimonials />
      <Contact />
    </div>
  );
};
export default HomePage;