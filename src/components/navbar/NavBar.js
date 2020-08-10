import React, { useState, useEffect } from 'react';
import './NavBar.css';


function NavBar(props) {
    return (
        <div className={props.sticky ? "navbar navbar-sticky" : "navbar"} id="navbarID">
            <div className="navLink navHomePage" onClick={()=>props.scrollToRef (props.HomePageRef)}  >
            HomePage
            </div>
            <div className="navLink navAbout"  onClick={()=>props.scrollToRef (props.AboutRef)} >
            About
            </div>
            <div className="navLink navPortfolio"  onClick={()=>props.scrollToRef (props.PortfolioRef)} >
            Portfolio
            </div>
            <div className="navLink navTechSkills" onClick={()=>props.scrollToRef (props.TechSkillsRef)}>
            TechSkills
            </div>
            <div className="navLink" onClick={()=>props.scrollToRef (props.HomePageRef)}>
            Contact
            </div>
        </div>

    )
}

export default NavBar;
