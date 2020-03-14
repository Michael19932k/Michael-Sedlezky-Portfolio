import React, { useState, useEffect } from 'react';
import './NavBar.css';
import {
    Route,
    NavLink,
    Switch
  } from "react-router-dom";

function NavBar(props) {
const [clickedIcon, setClickedIcon] = useState(false);
console.log(props)

function doStuff(e) {
    // e.preventDefault()
    // console.dir(e.target)
}

    return (
        <div className={props.sticky ? "navbar navbar-sticky" : "navbar"} id="navbarID">
            <div className="navLink" onClick={()=>props.scrollToRef (props.HomePageRef)}  >
            HomePage
            </div>
            <div className="navLink"  onClick={()=>props.scrollToRef (props.AboutRef)} >
            About
            </div>
            <div className="navLink"  onClick={()=>props.scrollToRef (props.PortfolioRef)} >
            Portfolio
            </div>
            <div className="navLink" onClick={()=>props.scrollToRef (props.TechSkillsRef)}>
            TechSkills
            </div>
            <div className="navLink" onClick={()=>window.location.reload()}>
            Contact
            </div>
        </div>

    )
}

export default NavBar;
