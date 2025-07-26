import './output.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Services from './components/Services'
import Contact from './components/Contact'
function App() {
  

  return (
    <div className='max-w-[1280px] mx-auto'>
      <Nav />
      <Hero />
      <Services />
      <Contact />
    </div>
  )
}

export default App
