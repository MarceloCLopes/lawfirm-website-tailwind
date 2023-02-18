import { Team } from './components/Team'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Footer } from './components/Footer'
import { Contact } from './components/Contact'
import { Newsletter } from './components/Newsletter'
import { Testimonials } from './components/Testimonials'
import { BackToTopBtn } from './components/BackToTopBtn'

function App() {
  return (
    <>
      <Banner />
      <Testimonials />
      <Skills />
      <Team />
      <Newsletter />
      <Contact />
      <Footer />
      <BackToTopBtn />
    </>
  )
}

export default App
