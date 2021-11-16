import Container from '../components/Container'
import Heading from '../components/Heading'

const About = () => {
  return (
    <Container>
      <section style={{ minHeight: '80vh' }}>
        <div>
          <Heading type='h2' isMono margin='mb-5' color='text-primary-light'>
            About Me
          </Heading>
          <p>
            Hello! I&lsquo;m Layan and I love to build things that live on the
            web. Currently, I&lsquo;m a third-year student at SLIIT pursuing a
            degree in information technology specialization in software
            engineering.
          </p>
          <p>
            I aspire toward a career that will allow me to channel my creativity
            through crafting beautiful software and engaging experiences. When
            I&lsquo;m not on the computer, I enjoy traveling, cooking, and
            petting dogs.
          </p>
          <p>
            Here are a few technologies I&lsquo;ve been working with recently:
          </p>
        </div>
        <div></div>
      </section>
    </Container>
  )
}

export default About
