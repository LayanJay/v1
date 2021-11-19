import Container from '../components/Container'
import FeaturedProjectCard from '../components/FeaturedProjectCard'
import Heading from '../components/Heading'
import Line from '../components/Line'
import { featuredProjects } from '../lib/data'

const Featured = () => {
  return (
    <Container>
      <section
        id='work'
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
            Projects I’ve contributed
          </Heading>
          <Line lineStyles='hidden md:block' />
        </div>
        <div className='flex flex-col space-y-20 sm:space-y-24'>
          {featuredProjects &&
            featuredProjects.map((project, i) => (
              <FeaturedProjectCard
                key={project.title}
                contentSide={i % 2 === 0 ? 'right' : 'left'}
                {...project}
              />
            ))}
        </div>
      </section>
    </Container>
  )
}

export default Featured
