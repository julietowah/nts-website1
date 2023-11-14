import Hero from "./components/Hero.jsx"
import Navbar from "./components/Navbar.jsx"
import Tagline from "./components/Tagline.jsx"
import About from "./components/About.jsx"
import Events from "./components/Events.jsx"
import Gallary from "./components/Gallary.jsx"
import Form from "./components/Form.jsx"
import Footer from "./components/Footer.jsx"
import BacktoTop from "./components/BacktoTop.jsx"


function App() {
  
  return (
    <div>
      <Navbar/>
      <Hero />
      <Tagline/>
      <About/>
      <Events/>
      <Gallary/>
      <Form/>
      <Footer/>
      <BacktoTop/>
    </div>
  )
}

export default App
