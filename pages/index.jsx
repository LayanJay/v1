import Layout from '../components/Layout'
import { getAllPosts } from '../lib/utils'
import About from '../modules/About'
import Featured from '../modules/Featured'
import HeroSection from '../modules/HeroSection'
import OtherProjects from '../modules/OtherProjects'

export const getStaticProps = () => {
  const allProjects = getAllPosts([
    'title',
    'subTitle',
    'description',
    'isFeatured',
    'image',
    'imageHeight',
    'stack',
    'url',
    'github',
    'index',
  ])

  return {
    props: { allProjects },
  }
}

const Home = ({ allProjects }) => {
  const featuredProjects = allProjects.filter(
    (post) => post.isFeatured === true
  )
  const otherProjects = allProjects.filter((post) => post.isFeatured !== true)

  return (
    <Layout title='Layan Jayasinghe'>
      <HeroSection />
      <About />
      <Featured projects={featuredProjects} />
      <OtherProjects projects={otherProjects} />
    </Layout>
  )
}

export default Home
