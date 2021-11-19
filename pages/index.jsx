import Layout from '../components/Layout'
import About from '../modules/About'
import Featured from '../modules/Featured'
import HeroSection from '../modules/HeroSection'

const Home = () => {
  return (
    <Layout title='Layan Jayasinghe'>
      <HeroSection />
      <About />
      <Featured />
    </Layout>
  )
}

export default Home
