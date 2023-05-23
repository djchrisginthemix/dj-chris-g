import React from 'react';
import SectionHeading from './SectionHeading';
import Form from '../partials/Form';

const Contact = () => {
  return (
    <section
      id="contact-section"
      className="text-white px-6 py-10 sm:py-14 md:py-16 lg:py-20"
    >
        <SectionHeading text="Contact Us" color="yellow" />
        <Form />
    </section>
  );
};
export default Contact;
