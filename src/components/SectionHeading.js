import React from 'react';
import Reveal from 'react-awesome-reveal';

const SectionHeading = ({ text, color="yellow" }) => {
  const revealSettings = {
    from: "bottom",
    distance: "20px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    delay: 100,
  };
  const colorClasses = {
    blue: "bg-blue-teal",
    darkBlue: "bg-blue-teal-dark",
    darkGray: "bg-gray-800",
    orange: "bg-orange-mid",
    yellow: "bg-yellow-mid",
    white: "bg-white",
  };
  return (
    <div className="tct-header-3-container flex flex-col items-center justify-center text-center px-8 mb-8 sm:mb-12">
      <h3 className="tct-header-3">{text}</h3>
      <Reveal triggerOnce {...revealSettings}>
      <div className={`h-1 w-20 ${colorClasses[color]}`}></div>
      </Reveal>
    </div>
  );
};

export default SectionHeading;
