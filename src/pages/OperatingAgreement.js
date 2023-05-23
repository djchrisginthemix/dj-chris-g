import React from 'react';
import caffeineLogo from '../assets/images/svgs/tct-logo-mobile.svg';
import Reveal from 'react-awesome-reveal';
import Contact from '../components/Contact';
import Header from '../partials/Header';
import Process from '../partials/Process';

const OperatingAgreement = () => {
  const revealSettings = {
    from: 'bottom',
    distance: '20px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    delay: 100
  }
  return (
    <div id='operating-agreement-page' className='bg-white'>
      <Header
        title='Operating Agreement'
        description="Innovative, High-Performance Web Experiences That Drive Results. We love websites and everything related!"
        image='../assets/images/icons/tct-logo-mobile.svg'
        url='https://thecaffeineteam.org/operating-agreement'
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
            Operating Agreement
          </h2>
          <Reveal triggerOnce {...revealSettings}>
            <div className='text-sm sm:text-base max-w-7xl text-center text-gray-800 mb-10 sm:mb-16 md:mb-20 lg:mb-24'>
              <p className='mb-4 md:mb-5'>
                This Operating Agreement (the "Agreement") is made and entered
                into on [DATE] by Thomas Hammer, the single member (the
                "Member") of The Caffeine Team LLC (the "Company").
              </p>
              <h3 className='tct-header-3 mb-3 md:mb-4'>
                1. Formation of Company
              </h3>
              <p className='mb-4 md:mb-5'>
                The Member hereby forms a limited liability company under the
                laws of the state of Connecticut to be known as The Caffeine
                Team LLC.
              </p>
              <h3 className='tct-header-3 mb-3 md:mb-4'>2. Purpose</h3>
              <p className='mb-4 md:mb-5'>
                The purpose of the Company is to engage in the business of web
                design and development.
              </p>
              <h3 className='tct-header-3 mb-3 md:mb-4'>3. Management</h3>
              <p className='mb-4 md:mb-5'>
                The Member shall have sole management and control of the Company
                and shall have the power to make all decisions relating to the
                operation of the Company.
              </p>
              <h3 className='tct-header-3 mb-3 md:mb-4'>
                4. Capital Contributions
              </h3>
              <p className='mb-4 md:mb-5'>
                The Member shall contribute capital to the Company in the amount
                of [DOLLAR AMOUNT] in cash.
              </p>
              <h3 className='tct-header-3 mb-3 md:mb-4'>
                5. Allocation of Profits and Losses
              </h3>
              <p className='mb-4 md:mb-5'>
                All profits and losses of the Company shall be allocated to the
                Member in proportion to their ownership interest.
              </p>
              <h3 className='tct-header-3 mb-3 md:mb-4'>6. Distributions</h3>
              <p className='mb-4 md:mb-5'>
                Distributions of the Company's profits shall be made to the
                Member in proportion to their ownership interest.
              </p>
              <h3 className='tct-header-3 mb-3 md:mb-4'>
                7. Transfer of Ownership
              </h3>
              <p className='mb-4 md:mb-5'>
                Ownership interests in the Company may not be transferred
                without the written consent of the Member.
              </p>
              <h3 className='tct-header-3 mb-3 md:mb-4'>8. Dissolution</h3>
              <p className='mb-4 md:mb-5'>
                The Company may be dissolved upon the decision of the Member,
                subject to any applicable legal requirements and obligations.
              </p>
              <h3 className='tct-header-3 mb-3 md:mb-4'>9. Governing Law</h3>
              <p className='mb-4 md:mb-5'>
                This Agreement shall be governed by and construed in accordance
                with the laws of the state of Connecticut.
              </p>
              <h3 className='tct-header-3 mb-3 md:mb-4'>
                10. Entire Agreement
              </h3>
              <p className='mb-4 md:mb-5'>
                This Agreement constitutes the entire agreement between the
                Member and the Company and supersedes all prior and
                contemporaneous agreements and understandings, whether written
                or oral.
              </p>
              <p className='mb-4 md:mb-5'>
                IN WITNESS WHEREOF, the Member has executed this Agreement as of
                the date first above written.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
      <Process />
      <Contact />
    </div>
  );
};
export default OperatingAgreement;
