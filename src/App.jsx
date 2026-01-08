import Hero from '../components/Hero'
import Navebar from '../components/Navebar'
import Skills from '../components/Skills'
import SlideBare from '../components/SlideBare'
import Testimoniols from '../components/Testimoniols'
import ContactMe from '../components/ContactMe'
import NavLinks from '../components/NacLinks'
import Experiences from '../components/Experiences'
import { Toaster } from 'react-hot-toast'




const App = () => {
  return (
    <div className='bg-black'>
      <Navebar />
      <Hero />
      <Experiences />
      <SlideBare />
      <Skills />
      <SlideBare />
      <Testimoniols />
      <ContactMe />
      <NavLinks />
      <Toaster />
    </div>
  )
}


export default App
