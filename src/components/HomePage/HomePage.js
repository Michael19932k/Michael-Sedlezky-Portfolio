import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

// function HomePage() {

function HomePage(props) {
    return (
        <div className="HomePage" ref={props.HomePageRef}>
            <div className="HomePageComponent">
                <div className="textWrapper">
                    <h1>Hi! I'm Michael Sedlezky</h1>
                    <h2>I'm a Web developer,</h2>
                    <h3>specialized in MERN (MongoDB , Express, React and Node.js).</h3>
                    <a target="_blank" href="https://www.linkedin.com/in/michael-sedlezky-a62a8a190/" style={{color:"black", fontSize:"1.17em", fontWeight: "bold"}}>Linkedin: www.linkedin.com/in/michael-sedlezky-a62a8a190/</a>
                    <h3>Email: michaelsedl93@gmail.com</h3>
                    <button className="button" onClick={()=>props.scrollToRef (props.PortfolioRef)}>Portfolio</button>
                </div>
            </div>

        </div>
    )
}



export default HomePage;
