import Layout from '../components/Layout'
import About from '../modules/About'
import HeroSection from '../modules/HeroSection'

const Home = () => {
  return (
    <Layout title='Layan Jayasinghe'>
      <HeroSection />
      <About />
    </Layout>
  )
}

export default Home
