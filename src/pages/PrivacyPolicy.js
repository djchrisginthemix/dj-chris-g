import React from 'react';
import caffeineLogo from '../assets/images/svgs/tct-logo-mobile.svg';
import Reveal from 'react-awesome-reveal';
import Contact from '../components/Contact';
import Header from '../partials/Header';
import Process from '../partials/Process';

const PrivacxyPolicy = () => {
  const revealSettings = {
    from: 'bottom',
    distance: '20px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    delay: 100
  }
  return (
    <div id='privacy-policy-page' className='bg-white'>
      <Header
        title='Privacy Policy'
        description="Innovative, High-Performance Web Experiences That Drive Results. We love websites and everything related!"
        image='../assets/images/icons/tct-logo-mobile.svg'
        url='https://thecaffeineteam.org/terms-of-service'
      />
      <div className='tct-about-content max-w-7xl mx-auto px-6 py-20'>
        <div className='flex flex-col items-center'>
          <img
            src={caffeineLogo}
            alt='The Caffeine Team'
            width={200}
            height={200}
            className=''
          />
          <h2 className='tct-header-2 text-center mt-8 mb-10 sm:mb-12'>
            Privacy Policy
          </h2>
          <Reveal triggerOnce {...revealSettings}>
            <p className='mb-4 md:mb-5'>
              This Privacy Policy (the "Policy") outlines how The Caffeine Team
              LLC (the "Company") collects, uses, discloses, and protects the
              personal information provided by users ("User" or "Users") of the
              Company's website and services. By accessing or using the
              Company's website and services, the User agrees to the terms and
              practices described in this Policy.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>
              1. Information Collection
            </h3>
            <p className='mb-4 md:mb-5'>
              The Company may collect personal information from Users, including
              but not limited to name, email address, contact information, and
              any other information provided voluntarily by the User. The
              Company may also collect non-personal information, such as IP
              addresses, browser type, and browsing data.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>2. Use of Information</h3>
            <p className='mb-4 md:mb-5'>
              The Company may use the collected information for various
              purposes, including but not limited to:
            </p>
            <ul className='list-disc pl-6 mb-4 md:mb-5'>
              <li>Providing and personalizing the Company's services</li>
              <li>Communicating with Users</li>
              <li>Improving the Company's website and services</li>
              <li>Conducting research and analysis</li>
              <li>Enforcing the Company's terms and policies</li>
              <li>Protecting the rights and safety of Users and the Company</li>
            </ul>
            <h3 className='tct-header-3 mb-3 md:mb-4'>
              3. Information Disclosure
            </h3>
            <p className='mb-4 md:mb-5'>
              The Company may disclose personal information to third parties in
              the following circumstances:
            </p>
            <ul className='list-disc pl-6 mb-4 md:mb-5'>
              <li>With the User's consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect the rights and safety of Users and the Company</li>
              <li>In connection with a merger, acquisition, or sale of assets</li>
              <li>With trusted service providers who assist in operating the Company's website and services</li>
            </ul>
            <h3 className='tct-header-3 mb-3 md:mb-4'>4. Data Security</h3>
            <p className='mb-4 md:mb-5'>
              The Company takes reasonable measures to protect the security of
              the collected information. However, no method of data transmission
              or storage can be guaranteed as 100% secure. The Company cannot
              warrant the absolute security of the information.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>5. Third-Party Links</h3>
            <p className='mb-4 md:mb-5'>
              The Company's website and services may contain links to
              third-party websites or services. The Company is not responsible
              for the privacy practices or content of these third-party sites.
              Users are encouraged to review the privacy policies of those
              websites before providing any personal information.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>6. Children's Privacy</h3>
            <p className='mb-4 md:mb-5'>
              The Company's website and services are not directed to individuals
              under the age of 13. The Company does not knowingly collect
              personal information from children. If a parent or guardian
              becomes aware that their child has provided personal information
              to the Company, they should contact the Company immediately at
              [CONTACT EMAIL], and the Company will take appropriate steps to
              remove the information from its records.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>
              7. Changes to the Privacy Policy
            </h3>
            <p className='mb-4 md:mb-5'>
              The Company may update this Privacy Policy from time to time. The
              updated version will be indicated by a revised "Last updated"
              date. Users are encouraged to review this Policy periodically for
              any changes. Continued use of the Company's website and services
              after the posting of changes constitutes acceptance of those
              changes.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>
              8. Contact Information
            </h3>
            <p className='mb-4 md:mb-5'>
              If you have any questions or concerns about this Privacy Policy,
              please contact the Company at [CONTACT EMAIL].
            </p>
            <p className='mb-4 md:mb-5'>
              IN WITNESS WHEREOF, the User has read, understood, and agreed to
              this Privacy Policy as of the date first above written.
            </p>
          </Reveal>
        </div>
      </div>
      <Process />
      <Contact />
    </div>
  );
};
export default PrivacxyPolicy;
