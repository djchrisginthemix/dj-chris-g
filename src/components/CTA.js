import React from 'react'
import SectionHeading from '../components/SectionHeading'
import Button from './Button'
import Reveal from 'react-awesome-reveal'

const CTA = () => {
  const revealSettings = {
    from: 'bottom',
    distance: '20px',
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    delay: 100
  }
  return (
    <section
      id='cta-section'
      className='bg-yellow-mid text-gray-800 py-10 sm:py-14 md:py-16 lg:py-20'
    >
      <SectionHeading
        text='Ready to take your website to the next level?'
        color='darkGray'
      />
      <Reveal triggerOnce {...revealSettings}>
        <div className='mx-auto px-6 max-w-7xl text-center'>
          <p className='text-lg mb-8 md:mb-12'>
            At <strong>The Caffeine Team</strong>, we're a team of expert web
            designers and developers committed to delivering the best web design
            services to our clients. We specialize in creating beautiful,
            user-friendly, and responsive websites that are tailored to your
            business needs. Whether you need a simple brochure website or a
            complex e-commerce platform, we've got you covered. Contact us today
            to discuss your project and see how we can help your business grow
            online.
          </p>
          <Button
            text='Get Started'
            useLink={true}
            color='white'
            link='/contact'
            size='lg'
          />
        </div>
      </Reveal>
    </section>
  )
}
export default CTA
