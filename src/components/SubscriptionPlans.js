import React from 'react';
import Fade from 'react-awesome-reveal';
import { FaCheck, FaTimes } from 'react-icons/fa';
import SectionHeading from './SectionHeading';
import Button from './Button';

const plans = [
  {
    name: 'Basic',
    delay: 0,
    price: 'Starting at $9.99/month',
    initialCost: '$299.00',
    description:
      'Ideal for small businesses and individuals looking to establish an online presence.',
    features: [
      { name: 'Customizable Templates', included: true },
      { name: 'Responsive Design', included: true },
      { name: '1 Page Website', included: true },
      { name: 'Contact Form', included: true },
      { name: 'Basic SEO Setup', included: true },
      { name: 'Domain Name', included: false },
      { name: 'Web Hosting', included: false },
      { name: 'Content Management System', included: false },
      { name: 'SSL Certificate', included: false },
      { name: 'E-commerce Integration', included: false },
      { name: 'Analytics Integration', included: false },
    ],
  },
  {
    name: 'Standard',
    delay: 500,
    price: 'Starting at $19.99/month',
    initialCost: '$499.99',
    description:
      'Perfect for small to medium-sized businesses looking to expand their online presence and reach.',
    features: [
      { name: 'Customizable Templates', included: true },
      { name: 'Responsive Design', included: true },
      { name: '5 Page Website', included: true },
      { name: 'Contact Form', included: true },
      { name: 'Advanced SEO Setup', included: true },
      { name: 'Domain Name', included: true },
      { name: 'Web Hosting', included: true },
      { name: 'Content Management System', included: true },
      { name: 'SSL Certificate', included: false },
      { name: 'E-commerce Integration', included: false },
      { name: 'Analytics Integration', included: false },
    ],
  },
  {
    name: 'Premium',
    delay: 1000,
    price: 'Starting at $49.99/month',
    initialCost: '$899.99',
    description:
      'For businesses looking for a complete online solution with advanced features and capabilities.',
    features: [
      { name: 'Customizable Templates', included: true },
      { name: 'Responsive Design', included: true },
      { name: 'Unlimited Pages', included: true },
      { name: 'Contact Form', included: true },
      { name: 'Advanced SEO Setup', included: true },
      { name: 'Domain Name', included: true },
      { name: 'Web Hosting', included: true },
      { name: 'Content Management System', included: true },
      { name: 'SSL Certificate', included: true },
      { name: 'E-commerce Integration', included: true },
      { name: 'Analytics Integration', included: true },
    ],
  },
]

const Pricing = () => {
  return (
    <section id="subscription-packages-section" className="py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading text="Monthly Subscription Plans" color="orange" />

        <div className="tct-packages-grid grid sm:grid-cols-3 gap-2 sm:gap-4">
          {plans.map((plan, index) => (
            <Fade
              delay={plan.delay}
              duration={400}
              offset={0}
              animateIn="fadeIn"
              key={index}
            >
              <div
                className="tct-package bg-white shadow-lg rounded-lg mb-10 lg:mb-0 flex flex-col"
                key={index}
              >
                <div className="flex flex-col items-center justify-center w-full bg-blue-teal p-5 rounded-t-lg min-h-12rem text-center">
                  <h3 className="text-2xl font-extrabold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-white mb-4">{plan.description}</p>
                </div>
                <ul className="text-sm text-gray-600 px-6 py-8 sm:min-h-24rem">
                  {plan.features.map((feature, index) => (
                    <li className="flex items-center mb-2" key={index}>
                      {feature.included ? (
                        <FaCheck className="text-green-500 mr-2" />
                      ) : (
                        <FaTimes className="text-red-500 mr-2" />
                      )}
                      {feature.name}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col items-center justify-center px-6 py-8 bg-blue-teal-dark text-white">
                  <div className="text-sm md:text-base text-center font-bold mb-2">
                    One-time payment<br /> of {plan.initialCost}{' '}
                    <span className="text-xs md:text-sm text-gray-200 italic font-semibold inline-block">
                      plus tax
                    </span>{' '}
                  </div>
                  <div className="text-base md:text-lg text-yellow-mid font-black">
                    {plan.price}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-full bg-orange-mid rounded-b-lg px-6 py-8">
                   <Button
                    text="Select Plan"
                    useLink={true}
                    color="whiteBlue"
                    link={`/contact?plan=${encodeURIComponent(plan.name)}`}
                    size="md"
                    data={{
                      name: plan.name,
                      price: plan.price,
                      initialCost: plan.initialCost,
                    }}
                  /> 
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Pricing;
