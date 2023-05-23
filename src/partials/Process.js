import React from 'react';
import SectionHeading from '../components/SectionHeading';
import Reveal from 'react-awesome-reveal';
import discoverProcess from '../assets/images/pngs/research-process.png';
import designProcess from '../assets/images/pngs/design-process.png';
import deliverProcess from '../assets/images/pngs/deliver-process.png';
import '../assets/css/card.css';

const OurProcess = () => {
  const revealSettings = {
    from: "bottom",
    distance: "20px",
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    delay: 100,
  };
  return (
    <section id="our-process-section" className="bg-beige-light shadow-inner px-6 py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="w-full max-w-7xl mx-auto">
        <SectionHeading text="Our Process" />
        <Reveal triggerOnce {...revealSettings}>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => (
            <div key={step.title} className="card process-step bg-gray-800 rounded-lg shadow-md h-full text-white">
              <img src={step.image} alt={step.title} className="w-full rounded-t-lg mb-5 md:mb-6" />
              <div className="process-copy w-full p-6">
                <div className="text-xl font-bold mb-4 text-white">{step.title}</div>
                <p className="mb-4">{step.description}</p>
                <ul className="list-disc pl-6">
                  {step.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
};

const processSteps = [
  {
    title: 'Discover',
    image: discoverProcess,
    description:
      'We start every project with a discovery phase where we get to know you, your business, and your target audience. We\'ll ask a lot of questions to better understand your needs and goals for the project.',
    items: [
      'Research your business and target audience',
      'Define project scope and goals',
      'Create a project timeline and budget',
      'Develop a content strategy',
    ],
  },
  {
    title: 'Design',
    image: designProcess,
    description:
      'Once we have a solid understanding of your business and goals, we\'ll begin designing your website. We\'ll create wireframes and mockups to help you visualize the final product and provide feedback.',
    items: [
      'Create wireframes and mockups',
      'Develop a style guide',
      'Design custom graphics and icons',
      'Get your feedback and make revisions',
    ],
  },
  {
    title: 'Deliver',
    image: deliverProcess,
    description:
      'Once we have your final approval on the design, we\'ll start building your website. We\'ll code your website using the latest technologies and make sure it\'s optimized for speed and SEO.',
    items: [
      'Code your website using the latest technologies',
      'Optimize your website for speed and SEO',
      'Test your website on various devices and browsers',
      'Launch your website and provide ongoing support',
    ],
  },
];

export default OurProcess;
