import React from 'react'
import caffeineLogo from '../assets/images/svgs/tct-logo-mobile.svg'
import Reveal from 'react-awesome-reveal'
import Contact from '../components/Contact'
import Header from '../partials/Header'
import Process from '../partials/Process'

const Disclaimer = () => {
  const revealSettings = {
    from: 'bottom',
    distance: '20px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    delay: 100
  }
  return (
    <div id='disclaimer-page' className='bg-white'>
      <Header
        title='Disclaimer'
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
            Disclaimer
          </h2>
          <Reveal triggerOnce {...revealSettings}>
            <p className='mb-4 md:mb-5'>
              This disclaimer governs your use of the website and services
              provided by The Caffeine Team LLC (the "Company"). By accessing or
              using the Company's website and services, you acknowledge and
              agree to the terms and conditions set forth in this disclaimer. If
              you do not agree to this disclaimer, you should not use the
              Company's website and services.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>
              No Professional Advice
            </h3>
            <p className='mb-4 md:mb-5'>
              The information provided by the Company, including but not limited
              to articles, blog posts, and any other content on the website or
              provided during the provision of services, is for general
              informational purposes only. It is not intended as professional
              advice, and it should not be relied upon as such. The Company is
              not engaged in rendering legal, financial, or other professional
              services. If you require professional advice, you should consult
              with a qualified professional in the relevant field.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>No Warranty</h3>
            <p className='mb-4 md:mb-5'>
              The Company makes no representations or warranties of any kind,
              express or implied, regarding the accuracy, completeness,
              reliability, or suitability of the information provided. The use
              of the Company's website and services is at your own risk. The
              Company disclaims all warranties, whether express or implied,
              including but not limited to warranties of merchantability,
              fitness for a particular purpose, and non-infringement.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>
              Limitation of Liability
            </h3>
            <p className='mb-4 md:mb-5'>
              In no event shall the Company be liable for any direct, indirect,
              incidental, consequential, special, or exemplary damages, arising
              out of or in connection with your use of the Company's website and
              services. This includes, but is not limited to, any loss of
              business, revenue, profits, data, or goodwill, even if advised of
              the possibility of such damages.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>Third-Party Links</h3>
            <p className='mb-4 md:mb-5'>
              The Company's website and services may contain links to
              third-party websites or services. The inclusion of any link does
              not imply endorsement by the Company. The Company has no control
              over the content, privacy policies, or practices of third-party
              websites or services and disclaims any responsibility for them.
              Users are encouraged to review the terms and policies of those
              third parties before engaging in any transactions or providing any
              personal information.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>Indemnification</h3>
            <p className='mb-4 md:mb-5'>
              You agree to indemnify and hold harmless the Company, its
              officers, directors, employees, and agents from and against any
              claims, liabilities, damages, losses, and expenses, including
              without limitation reasonable attorney's fees, arising out of or
              in any way connected with your use of the Company's website and
              services or your violation of this disclaimer.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>Severability</h3>
            <p className='mb-4 md:mb-5'>
              If any provision of this disclaimer is found to be unenforceable
              or invalid, the remaining provisions shall still be in effect and
              enforceable to the fullest extent permitted by law.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>Governing Law</h3>
            <p className='mb-4 md:mb-5'>
              This disclaimer shall be governed by and construed in accordance
              with the laws of the state of Connecticut, without regard to its
              conflict of law provisions.
            </p>
            <h3 className='tct-header-3 mb-3 md:mb-4'>Entire Agreement</h3>
            <p className='mb-4 md:mb-5'>
              This disclaimer constitutes the entire agreement between you and
              the Company regarding your use of the Company's website and
              services, superseding any prior agreements or understandings,
              whether written or oral.
            </p>
            <p className='mb-4 md:mb-5'>
              IN WITNESS WHEREOF, you acknowledge that you have read,
              understood, and agreed to this disclaimer as of the date first
              above written.
            </p>
          </Reveal>
        </div>
      </div>
      <Process />
      <Contact />
    </div>
  )
}
export default Disclaimer
