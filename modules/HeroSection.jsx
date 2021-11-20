import { useEffect } from 'react'
import { gsap } from 'gsap'
import Container from '../components/Container'
import Heading from '../components/Heading'
import LinkButton from '../components/Link'

const HeroSection = () => {
  useEffect(() => {
    gsap.from('#home', {
      opacity: 0,
      y: 40,
      ease: 'power3.out',
      duration: 1,
      delay: 0.3,
    })
  }, [])
  return (
    <Container>
      <div
        id='home'
        style={{ minHeight: '90vh' }}
        className='flex items-center'
      >
        <div>
          <Heading isMono type='h4' color='text-primary-light'>
            Hi there, I am
          </Heading>
          <Heading type='h1' margin='mb-4 sm:mb-8'>
            Layan Jayasinghe.
          </Heading>
          <Heading type='h2' margin='mb-5' color='text-white-dark'>
            UI/UX Designer + Developer
          </Heading>
          <p className='mb-14 sm:text-lg text-white-dark max-w-xl'>
            I&lsquo;m a professional front-end developer (and occasionally do
            backend development) with UI/UX designing skills. Currently
            I&lsquo;m based on Colombo, Sri Lanka.
          </p>

          <LinkButton href='/' padding='py-3 px-8 sm:py-4 sm:px-12'>
            Resume
          </LinkButton>
        </div>
      </div>
    </Container>
  )
}

export default HeroSection
