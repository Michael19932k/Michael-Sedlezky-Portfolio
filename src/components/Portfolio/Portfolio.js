import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import chatPic from "../../assets/chatPic.png";
import favoriteMoviePic from "../../assets/favoriteMoviePic.png";
<<<<<<< HEAD
import greenRadPic from "../../assets/greenRadPic.jpg";
=======
import greenRadPic from "../../assets/greenRadPic.png";
>>>>>>> 88ea0b85bdbb963b9407065a3b3ec01e522a027c

function Portfolio({ PortfolioRef }) {
    return (
        <div className="Portfolio" ref={PortfolioRef}>
            <div className="theTitle">Projects</div>
            <div className="projectCard" style={{ height: "auto" }}>
                <div className="cardContent"style={{background: "linear-gradient(to bottom , white,white,white, transparent)"}}>
                    <div className="cardTitle">Personal Interface for RadGreen Company</div>
                    <div className="cardDescription">The purpose of the web app is to provide the user with a Personal interface with readings of one of the monitoring devices installed inside buildings by Radgreen company, which is dynamically rendered with different data received from radgreen API, also the web app includes graph for each sensor which shows data for selected period, one hour, one day, one month, and one year, graph can show the average value and threshold for the selected sensor, one of the other features is a gauge which calculates the stats of all the sensors and then shows the average for current monitoring device, the web app itself also made to be controlled by JSON meaning you can edit any color, size, text or change the image by just editing the JSON file without need of doing build again, the same thing is possible by the user of web app but with fewer features.</div>
                    <button className="button" onClick={() => { window.open("http://209.97.130.182/mdId=080855") }}>See Live</button>
                    <button className="button" onClick={() => { window.open("https://www.youtube.com/watch?v=VfNZqeiPXv8&feature=youtu.be") }}>Video Demo</button>
                    <button className="button" style={{ width: "fit-content" }} onClick={() => { window.open("https://drive.google.com/open?id=1lV2Khlq8dPZnGu9pEwDRnDVT4Z5_Xu9S") }}>Recomendation Letter</button>
                </div>
<<<<<<< HEAD
                <img className="cardPic" src={greenRadPic} alt="Not found" style={{ height: "300px" }}></img>
=======
                <img className="cardPic" src={greenRadPic} style={{ height: "300px" }}></img>
>>>>>>> 88ea0b85bdbb963b9407065a3b3ec01e522a027c
            </div>
            <div className="projectCard">
                <div className="cardContent">
                    <div className="cardTitle">Personal movie bookmark project</div>
                    <div className="cardDescription">Connected with foreign API. Enables to user search and discover new and soon to be released movies via theMoviedb.org. User gets all the deteils on the movie including mivie trailer and can add them to personaliesed collection stored in MongoDB and displayed on his profile.</div>
<<<<<<< HEAD
                    <button className="button" onClick={() => { window.open("https://michael-app111.herokuapp.com") }}>See Live</button>
                    <button className="button" onClick={() => { window.open("https://github.com/Michael19932k/chat--deploy-0/tree/master/public") }}>Source Code</button>
=======
                    <button className="button" onClick={() => { window.open("https://fav--movies.herokuapp.com/") }}>See Live</button>
                    <button className="button" onClick={() => { window.open("https://github.com/oleg1994/FavouriteMovie") }}>Source Code</button>
>>>>>>> 88ea0b85bdbb963b9407065a3b3ec01e522a027c
                </div>
                <img className="cardPic" src={favoriteMoviePic}></img>
            </div>
            <div className="projectCard">
                <div className="cardContent">
                    <div className="cardTitle">Personal Chat room Project</div>
                    <div className="cardDescription">Basic custom made chat room component. Built in React using Socket.io for instant messaging and MongoDB for data storage.</div>
                    <button className="button" onClick={() => { window.open("https://michael-app111.herokuapp.com") }}>See Live</button>
                    <button className="button" onClick={() => { window.open("https://github.com/Michael19932k/chat--deploy-0/tree/master/public") }}>Source Code</button>
                </div>
                <img className="cardPic" src={chatPic}></img>
            </div>




        </div>
    )
}



export default Portfolio;
{/* <div className="Portfolio" ref={PortfolioRef}>
<div className="theTitle">Projects</div>
<div className="projectCard">
    <div className="cardContent">
        <div className="cardTitle"></div>
        <div className="cardDescription"></div>
        <div className="buttonSeeLive"></div>
        <div className="buttonSeeCode"></div>
    </div>
    <div className="cardPic"></div>
</div>


</div> */}