import Experiences from '../components/Experiences'
import Hero from '../components/Hero'
import Navebar from '../components/Navebar'
import Skills from '../components/Skills'
import SlideBare from '../components/SlideBare'
import AnimatedCounter from '../sections/AnimatedCounter'
import BigRobot from '../sections/BigRobot'


const App = () => {
  return (
    <div className='bg-black'>
      <Navebar />
      <Hero />
      <AnimatedCounter />
      <Experiences />
      <SlideBare />
      <Skills />
      <SlideBare />
    </div>
  )
}


export default App
