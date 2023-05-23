import React from 'react';
import caffeineLogo from '../assets/images/svgs/tct-logo-mobile.svg';
import Reveal from 'react-awesome-reveal';
import Contact from '../components/Contact';
import Header from '../partials/Header';
import Process from '../partials/Process';

const TermsOfService = () => {
  const revealSettings = {
    from: 'bottom',
    distance: '20px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    delay: 100
  }
  return (
    <div id='terms-of-service-page' className='bg-white'>
      <Header
        title='Terms of Service'
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
            Terms of Service
          </h2>
          <Reveal triggerOnce {...revealSettings}>
            <p className='mb-4 md:mb-5'>
              This Terms of Service agreement (the "Agreement") is made and
              entered into on [DATE] by and between The Caffeine Team LLC (the
              "Company") and the user ("User") accessing or using the services
              provided by the Company.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>
              1. Acceptance of Terms
            </h3>
            <p className='mb-4 md:mb-5'>
              By accessing or using the services provided by the Company, the
              User agrees to be bound by the terms and conditions set forth in
              this Agreement. If the User does not agree with any part of this
              Agreement, they should not access or use the services provided by
              the Company.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>2. Services</h3>
            <p className='mb-4 md:mb-5'>
              The Company provides web design and development services
              ("Services") as described on the Company's website or as agreed
              upon with the User. The Company reserves the right to modify,
              suspend, or discontinue any part of the Services at any time
              without prior notice.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>
              3. Intellectual Property
            </h3>
            <p className='mb-4 md:mb-5'>
              The User acknowledges and agrees that all intellectual property
              rights, including but not limited to copyrights, trademarks, trade
              secrets, and other proprietary rights, associated with the
              Services are owned by the Company. The User shall not reproduce,
              modify, distribute, or create derivative works based on the
              Company's intellectual property without prior written consent from
              the Company.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>
              4. Limitation of Liability
            </h3>
            <p className='mb-4 md:mb-5'>
              The User expressly understands and agrees that the Company shall
              not be liable for any direct, indirect, incidental, consequential,
              or exemplary damages, including but not limited to damages for
              loss of profits, goodwill, use, data, or other intangible losses,
              resulting from the use or inability to use the Services provided
              by the Company.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>5. Indemnification</h3>
            <p className='mb-4 md:mb-5'>
              The User agrees to indemnify, defend, and hold harmless the
              Company and its officers, directors, employees, agents, and
              affiliates from and against any claims, liabilities, damages,
              losses, costs, or expenses arising out of or related to the User's
              use of the Services or violation of this Agreement.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>
              6. Governing Law and Jurisdiction
            </h3>
            <p className='mb-4 md:mb-5'>
              This Agreement shall be governed by and construed in accordance
              with the laws of the state of Connecticut. Any legal action or
              proceeding arising out of or relating to this Agreement shall be
              subject to the exclusive jurisdiction of the courts located in the
              state of Connecticut.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>7. Severability</h3>
            <p className='mb-4 md:mb-5'>
              If any provision of this Agreement is found to be invalid or
              unenforceable, the remaining provisions shall continue to be valid
              and enforceable to the fullest extent permitted by law.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>8. Entire Agreement</h3>
            <p className='mb-4 md:mb-5'>
              This Agreement constitutes the entire agreement between the User
              and the Company and supersedes all prior and contemporaneous
              agreements and understandings, whether written or oral, relating
              to the subject matter of this Agreement.
            </p>
            <p className='mb-4 md:mb-5'>
              IN WITNESS WHEREOF, the User has read, understood, and agreed to
              this Terms of Service agreement as of the date first above
              written.
            </p>
          </Reveal>
        </div>
      </div>
      <Process />
      <Contact />
    </div>
  );
};
export default TermsOfService;
