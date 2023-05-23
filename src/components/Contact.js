import React from 'react';
import SectionHeading from './SectionHeading';
import Form from '../partials/Form';

const Contact = () => {
  return (
    <section
      id="contact-section"
      className="bg-blue-teal shadow-inner text-white px-6 py-10 sm:py-14 md:py-16 lg:py-20"
    >
      <div className="w-full max-w-7xl mx-auto">
        <SectionHeading text="Contact Us" color="yellow" />
        <Form />
      </div>
    </section>
  );
};
export default Contact;
