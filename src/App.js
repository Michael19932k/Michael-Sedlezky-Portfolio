import React, { Fragment, useEffect, useRef, useState } from 'react';
import NavBar from './components/navbar/NavBar';
import About from './components/About/About';
import HomePage from './components/HomePage/HomePage';
import Portfolio from './components/Portfolio/Portfolio';
import './App.css';
import TechSkills from './components/TechSkills/TechSkills';
import { NavLink } from 'react-router-dom';

function App() {
  useEffect(() => {
    console.log(TechSkillsRef.current.offsetTop)
    console.log(window.pageYOffset)
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

    const allnav = () => {
      let navlinks = document.getElementsByClassName("navLink")
      for (let i = 0; i < navlinks.length; i++) {
        navlinks[i].style.textDecoration = "none"
      }
    }
    const navHomePage = document.getElementsByClassName("navHomePage")[0]
    const navAbout = document.getElementsByClassName("navAbout")[0]
    const navPortfolio = document.getElementsByClassName("navPortfolio")[0]
    const navTechSkills = document.getElementsByClassName("navTechSkills")[0]
    var testDiv = document.getElementById("navbarID");
    window.pageYOffset > testDiv.offsetTop + 1
      ? testDiv.style.height = "70px"
      : testDiv.style.height = "100px"
    window.pageYOffset > testDiv.offsetTop + 1
      ? setSticky(true)
      : setSticky(false)
    // console.log(navAbout)
    switch (window.pageYOffset) {
      case HomePageRef.current.offsetTop<AboutRef.current.offsetTop && HomePageRef.current.offsetTop!=AboutRef.current.offsetTop:
        allnav()
        navHomePage.style.textDecoration = "underline"
        break;

      case AboutRef.current.offsetTop<PortfolioRef.current.offsetTop && AboutRef.current.offsetTop!=PortfolioRef.current.offsetTop:
        allnav()
        navAbout.style.textDecoration = "underline"
        break;

      // case PortfolioRef.current.offsetTop<TechSkillsRef.current.offsetTop:
      //   allnav()
      //   navPortfolio.style.textDecoration = "underline"
      //   break;

      // case TechSkillsRef.current.offsetTop:
      //   allnav()
      //   navTechSkills.style.textDecoration = "underline"
      //   break;

      default:
        break;
    }
  }
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

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
