import About from "./pages/About"
import Banner from "./pages/Banner"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Nav from "./components/Nav"
import { Services } from "./pages/Services"
import Work from "./pages/Work"



function App() {


  return (
    <>
     <div className=' bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header/>
      
      <Banner/>
      <Nav/>
      <About/>
      <Services/>
      <Work/>
      <Contact/>
   
     </div>
    </>
  )
}

export default App
