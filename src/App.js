import React, { Fragment, useEffect, useRef, useState } from 'react';
import NavBar from './components/navbar/NavBar';
import About from './components/About/About';
import HomePage from './components/HomePage/HomePage';
import Portfolio from './components/Portfolio/Portfolio';
import './App.css';
import TechSkills from './components/TechSkills/TechSkills';

function App() {
  useEffect(() => {
    console.log(TechSkillsRef.current.offsetTop)
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
    }
  }, [])

  const [isSticky, setSticky] = useState(false)

  const HomePageRef = useRef(null)
  const AboutRef = useRef(null)
  const PortfolioRef = useRef(null)
  const TechSkillsRef = useRef(null)
  const ContactRef = useRef(null)

  const handleScroll = () => {
    var testDiv = document.getElementById("navbarID");
    // console.log(testDiv)
    window.pageYOffset > testDiv.offsetTop + 1
      ? testDiv.style.height = "70px"
      : testDiv.style.height = "100px"
    window.pageYOffset > testDiv.offsetTop + 1
      ? setSticky(true)
      : setSticky(false)
  }
  const scrollToRef =(ref) => window.scrollTo(0, ref.current.offsetTop)   
    

  



  window.addEventListener("scroll", (handleScroll))
  return (
    <div className="App">
      <Fragment>
        <NavBar sticky={isSticky} scrollToRef={scrollToRef} TechSkillsRef={TechSkillsRef} AboutRef={AboutRef} ContactRef={ContactRef} HomePageRef={HomePageRef} PortfolioRef={PortfolioRef} />
        <HomePage HomePageRef={HomePageRef} scrollToRef={scrollToRef} PortfolioRef={PortfolioRef} />
        <About AboutRef={AboutRef} />
        <Portfolio PortfolioRef={PortfolioRef} />
        <TechSkills TechSkillsRef={TechSkillsRef} />
        {/* <Contact ContactRefRef={ContactRef} /> */}
      </Fragment>
    </div>
  );
}

export default App;
