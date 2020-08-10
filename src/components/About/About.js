import React, { useState, useEffect } from 'react';
import './About.css';
import personalPhoto from "../../assets/personalPhoto.jpg";


function About({ AboutRef }) {
    return (
        <div className='About' ref={AboutRef}>
            <div className="AboutHeader"> About Me</div>
            <div className="AboutContent">
                <div className="AboutContentColumnLeft ContentColumns">My name is Michael and I am looking for my first challenge as a web developer. 
                I was originally studying civil engineering, but i always had passion for web development, so I decided to pursue that 
                direction and complete a eight months Full Stack web development course at Interbit. While I contributed already to a number of 
                small scale projects to a local start-ups, I'm still looking to gain a more permanent foothold 
                in the industry as a Junior front-end, back-end or full stack developer. </div>
<<<<<<< HEAD
                <img className="AboutContentColumnMiddle ContentColumns" src={personalPhoto}></img>
=======
                <img className="AboutContentColumnMiddle ContentColumns" src={personalPhoto} alt="Not found"></img>
>>>>>>> da540adbc5d9cca438db590f1515cdff1585c814
                <div className="AboutContentColumnRight ContentColumns">I am highly motivated and very enthusiastic about this field and the possibilities it 
                provides. Constant technological advansments are making the learning curve practicaly limitless and bring something new to
                 discover to each passing day. I am committed to become a professional in the field and posses the capability of independent learning, 
                 as well as, working in a team environment.</div>
            </div>
        </div>
    )
}

export default About;