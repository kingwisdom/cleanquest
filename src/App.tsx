import About from "./components/about"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Hero from "./components/hero"
import Navigation from "./components/navigation"
import Pricing from "./components/pricing"
import Services from "./components/services"


function App() {

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
