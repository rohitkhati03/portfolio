import About from "./components/About";
import Certifications from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Project";
import Skills from "./components/Skills";

export default function App() {
return (
<>
<Navbar/>
<Hero/>
<About/>
<Skills/>
<Projects/>
<Certifications/>
<Contact/>
<Footer/>
</>
);
}