import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Picing from "./components/Picing";
import Testimonial from "./components/Testimonial";
import Working from "./components/workingStep";
import Foot from "./components/footer";

function App() {
  return (
    <div className="font-primary overflow-x-hidden ">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Working />
      <Picing />
      <Testimonial />
      <Foot />
    </div>
  );
}

export default App;
