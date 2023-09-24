import { BrowserRouter } from "react-router-dom";
import About from "./Components/About"
import Contact from "./Components/Contact"
import Tech from "./Components/Tech"
import Experience from "./Components/Experience"
import Feedbacks from "./Components/Feedbacks"
import Hero from "./Components/Hero"
import StarsCanvas from "./Components/StarsCanvas"
import Navbar from "./Components/Navbar"
import Works from "./Components/Works"
function App() {
  return (
      <BrowserRouter>
          <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
               <Navbar/>
               <Hero/>
            </div>
            <About/>
            <Experience/>
            <Tech/>
            <Works/>
            <Feedbacks/>
            <div className="relative z-0">
              <Contact/>
              <StarsCanvas/>
            </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
