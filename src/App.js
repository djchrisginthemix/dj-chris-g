import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import withLoading from './partials/withLoading';
import ScrollToTopButton from './partials/ScrollToTopButton';
import ScrollToTopOnload from './partials/ScrollToTopOnload';
import LoadingScreen from './partials/loadingScreen';
import Footer from './partials/Footer';
import Homepage from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Thankyou from './pages/Thankyou';

const HomepageWithLoading = withLoading(Homepage);
const ServicesWithLoading = withLoading(Services);
const PortfolioWithLoading = withLoading(Portfolio);
const ContactWithLoading = withLoading(Contact);
const ThankyouWithLoading = withLoading(Thankyou);

function App() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (hasVisited === 'true') {
      setTimeout(() => {
        setShowLoading(false);
      }, 1500); // Set the timeout to 2 seconds
    } else {
      setTimeout(() => {
        setShowLoading(false);
        localStorage.setItem('hasVisited', 'true');
      }, 7000); // Set the timeout to 10 seconds for the first visit
    }
  }, []);
  

  return (
    <Router basename="/">
      {showLoading ? (
        <LoadingScreen />
      ) : (
        <div className="App">
          <ScrollToTopOnload />
          <Routes>
            <Route exact path="/" element={<HomepageWithLoading />} />
            <Route path="/services" element={<ServicesWithLoading />} />
            <Route path="/portfolio" element={<PortfolioWithLoading />} />
            <Route path="/contact" element={<ContactWithLoading />} />
            <Route path="/thank-you" element={<ThankyouWithLoading />} />

          </Routes>
          <Footer />
          <ScrollToTopButton />
        </div>
      )}
    </Router>
  );
}

export default App;
