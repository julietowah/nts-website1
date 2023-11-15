import Hero from "./components/Hero.jsx"
import Navbar from "./components/Navbar.jsx"
import Tagline from "./components/Tagline.jsx"
import About from "./components/About.jsx"
import Events from "./components/Events.jsx"
import Gallary from "./components/Gallary.jsx"
import Form from "./pages/Form.jsx"
import Footer from "./components/Footer.jsx"
import BacktoTop from "./components/BacktoTop.jsx"


function App() {
  
  return (
    <div>
      
      <Navbar/>
      <Hero />
      <div className=" bg-slate-50">
      <Tagline/>
      
      <About/>
      </div>
      <Events/>
      <Gallary/>
      <Footer/>
      <BacktoTop/>
    </div>
  )
}

export default App
