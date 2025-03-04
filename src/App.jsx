import "./index.css";
import Navebar from "./components/Navebar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

function App() {
  return (
    <main className='bg-black '>
      <Navebar /> <Hero /> <Highlights /> <Model/> <Features/> <HowItWorks/> <Footer/>
    </main>
  );
}

export default App;
