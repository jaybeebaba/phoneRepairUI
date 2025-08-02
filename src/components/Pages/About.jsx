import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../CommonComponents/Hero.jsx';


function About() {
  return (
      <div className="flex items-center">
          <div className='border rounded border-slate-950 p-20'>
            <img src="" alt="" />
          </div>

          <div>
          <h1>About Us</h1>
          <p>Fast, Reliable & Affordable Mobile Repairs</p>

          </div>
          <button>Read More</button>
        
      </div>
  );
}

export default About;
