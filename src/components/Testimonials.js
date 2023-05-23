import React from 'react';
import SectionHeading from './SectionHeading'
import Reveal from 'react-awesome-reveal';

const Testimonials = () => {
  const revealSettings = {
    from: "bottom",
    distance: "20px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    delay: 100,
  };
  return (
    <section id="testimonials-section" className="bg-white py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto px-6 max-w-7xl">
      <SectionHeading text="Testimonials" />
        <Reveal triggerOnce {...revealSettings}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600">
                "Working with the team at dj Chris G was a great experience. They took the time to understand our business and were able to create a website that exceeded our expectations. The attention to detail and personal touch really made a difference. We couldn't be happier with the end result."
              </p>
              <div className="flex items-center mt-4">
                <div className="mr-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/22.jpg"
                    alt=""
                    className="rounded-full w-12 h-12"
                  />
                </div>
                <div>
                  <p className="text-gray-800 font-bold">Sarah Johnson</p>
                  <p className="text-gray-600">Owner, Johnson's Bakery</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600">
                "I was hesitant to redesign my website, but the team at dj Chris G made the process seamless. They were able to modernize my site and optimize it for search engines, which has resulted in more traffic and leads. Their communication and expertise were top-notch. Highly recommend!"
              </p>
              <div className="flex items-center mt-4">
                <div className="mr-4">
                  <img
                    src="https://randomuser.me/api/portraits/men/38.jpg"
                    alt=""
                    className="rounded-full w-12 h-12"
                  />
                </div>
                <div>
                  <p className="text-gray-800 font-bold">Tom Anderson</p>
                  <p className="text-gray-600">Owner, Anderson Construction</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600">
                "I had a great experience working with dj Chris G. From the initial consultation to the final launch, they were professional, responsive, and accommodating. They really went above and beyond to make sure my website was perfect. I couldn't be happier with the outcome."
              </p>
              <div className="flex items-center mt-4">
                <div className="mr-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/72.jpg"
                    alt=""
                    className="rounded-full w-12 h-12"
                  />
                </div>
                <div>
                  <p className="text-gray-800 font-bold">Jessica Davis</p>
                  <p className="text-gray-600">Owner, Jess's Bakery</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
export default Testimonials;
