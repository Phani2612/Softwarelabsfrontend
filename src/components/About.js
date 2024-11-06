// AboutUs.js
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Navbar from './Navbar';

function AboutUs() {
  return (
    <div className='aboutmain' >

<Navbar/>

<div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <p>My name is Phani Naidu Kondapalli.</p>
        <p>
          I am a passionate full-stack developer with 1 year of experience. I’m looking for a company where I can learn more, take on challenging work, and dive into research on new technologies. My goal is to constantly improve my skills and contribute meaningfully to innovative projects.
        </p>
        <Link to="/">
          <button className="home-button">Go Back to Home</button>
        </Link>
      </div>
    </div>

    </div>
  );
}

export default AboutUs;
