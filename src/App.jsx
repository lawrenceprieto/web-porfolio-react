import Footer from "./components/footer"
import Header from "./components/header/header"
import Herobanner from "./components/herobanner/herobanner"
import About from "./pages/about/about"
import Contact from "./pages/contact/contact"
import Project from "./pages/project/project"

function App() {
  return (
    <>
      <Header />
      <Herobanner />
      <About />   
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
