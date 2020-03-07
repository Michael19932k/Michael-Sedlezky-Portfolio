import React, { useState, useEffect } from 'react';
import './TechSkills.css';
import css from "../../assets/Icons/css.svg";
import ejs from "../../assets/Icons/ejs.png";
import expressjs from "../../assets/Icons/expressjs.svg";
import html5 from "../../assets/Icons/html5.svg";
import js from "../../assets/Icons/js.svg";
import mongoDB from "../../assets/Icons/mongoDB.svg";
import nodejs from "../../assets/Icons/nodejs.svg";
import socketIo from "../../assets/Icons/socketIo.svg";
import reactLogo from "../../assets/Icons/reactLogo.svg";

function TechSkills(props) {
    return (
        <div className="TechSkills" ref={props.TechSkillsRef}>
            <div className="skillsWrapper">
                <div className='skillsContent'>
                    <h1 className='Title'>TechSkills
                    </h1>
                    <div className='skillBlocks'>
                        <div className='skillBlock'>
                            <div className='skillName'>ReactJS</div>
                            <div className='hexagon'>
                                <img src={reactLogo} className='skill__image' alt='skill'></img>
                            </div>
                        </div>
                        <div className='skillBlock'>
                            <div className='skillName'>Node.js</div>
                            <div className='hexagon'>
                                <img src={nodejs} className='skill__image' alt='skill'></img>
                            </div>

                        </div>
                        <div className='skillBlock'>
                            <div className='skillName'>Express</div>
                            <div className='hexagon'><img src={expressjs} className='skill__image' alt='skill'></img></div>

                        </div>
                        <div className='skillBlock'>
                            <div className='skillName'>MongoDB</div>
                            <div className='hexagon'><img src={mongoDB} className='skill__image' alt='skill'></img>
                            </div>

                        </div>
                        <div className='skillBlock'>
                            <div className='skillName'>JavaScript</div>
                            <div className='hexagon'><img src={js} className='skill__image' alt='skill'></img></div>

                        </div>
                        <div className='skillBlock'>
                            <div className='skillName'>HTML</div>
                            <div className='hexagon'><img src={html5} className='skill__image' alt='skill'></img></div>

                        </div>
                        <div className='skillBlock'>
                            <div className='skillName'>CSS</div>
                            <div className='hexagon'><img src={css} className='skill__image' alt='skill'></img></div>

                        </div>
                        <div className='skillBlock'>
                            <div className='skillName'>EJS</div>
                            <div className='hexagon'><img src={ejs} className='skill__image' alt='skill'></img></div>

                        </div>
                        <div className='skillBlock'>
                            <div className='skillName'>Socket.io</div>
                            <div className='hexagon'><img src={socketIo} className='skill__image' alt='skill'></img></div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechSkills;
