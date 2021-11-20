import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Button from '../components/Button'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Line from '../components/Line'
import OtherProjectCard from '../components/OtherProjectCard'

gsap.registerPlugin(ScrollTrigger)

const OtherProjects = ({ projects }) => {
  const [count, setCount] = useState(4)

  const visibleProjects = projects.slice(0, count)

  useEffect(() => {
    gsap.from('#other', {
      scrollTrigger: {
        trigger: '#other',
        start: 'top 80%',
      },
      opacity: 0,
      y: 40,
      ease: 'power3.out',
      duration: 1,
      delay: 0.3,
    })

    gsap.from('#otherProjects section', {
      scrollTrigger: {
        trigger: '#otherProjects section',
        start: 'top 80%',
      },
      stagger: 0.2,
      opacity: 0,
      ease: 'expo.out',
      duration: 0.1,
      delay: 0.3,
    })
  }, [])
  return (
    <Container>
      <section
        id='other'
        style={{ minHeight: '80vh' }}
        className='flex flex-col justify-center py-20'
      >
        <div className='sm:inline-flex sm:items-center sm:space-x-3 mb-8 sm:mb-10'>
          <Heading
            type='h2'
            isMono
            color='text-primary-light'
            textSize='text-xl sm:text-2xl md:text-3xl'
            align='text-center sm:text-left'
          >
            Other Projects
          </Heading>
          <Line lineStyles='hidden md:block' />
        </div>
        <div
          id='otherProjects'
          className='grid grid-rows-1 grid-cols-1 md:grid-cols-2 gap-4 md:gap-5'
        >
          {visibleProjects &&
            visibleProjects.map((project) => (
              <OtherProjectCard key={project.title} {...project} />
            ))}
        </div>
        {count >= projects.length ? (
          <Button
            onClick={() => setCount(4)}
            margin='mx-auto my-16'
            padding='py-3 px-8 sm:py-4 sm:px-12'
          >
            Show Less
          </Button>
        ) : (
          <Button
            onClick={() => setCount((prev) => prev + 4)}
            margin='mx-auto my-16'
            padding='py-3 px-8 sm:py-4 sm:px-12'
          >
            Show More
          </Button>
        )}
      </section>
    </Container>
  )
}

export default OtherProjects
