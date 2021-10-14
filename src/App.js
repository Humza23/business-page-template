import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home'
import Gallery from "./components/Gallery";
import Gallery2 from "./components/Gallery2"
import Footer from "./components/Footer";

function App() {

  /* Nav change on scroll */
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    window.scrollY >= 10 ? setNav(true) : setNav(false)
  }

  window.addEventListener('scroll', handleNav)
  /* ------------ */  

  return (
    <div className="App">
      <Navbar nav={nav}/>
      <Home />
      <Gallery />
      <Gallery2 />
      <Footer />
    </div>
  );
}

export default App;
