import React, { useEffect } from 'react';
import gsap from 'gsap';
import './App.css'
import Lenis from '@studio-freight/lenis'

const LandingPage = () => {
    useEffect(() => {
      const elements = document.querySelectorAll('.landing-text span');
  
      gsap.fromTo(
        elements,
        { opacity: 0 },
        { opacity: 1, duration: 2, stagger: 0.01, ease: 'power2.out' }
      );
  
      gsap.fromTo(
        elements,
        { y: '40px' },
        { y: '0%', duration: 0.4, stagger: 0.01, ease: 'power2.out' }
      );
    }, []);
    
  return (
    <div className="landing-container">
      <h1 className="landing-text">
        <span>Y</span>
        <span>o</span>
        <span>u</span>
        <span>r</span>
        <span className='space'> </span>
        <span>S</span>
        <span>h</span>
        <span>i</span>
        <span>e</span>
        <span>l</span>
        <span>d</span>
        <span className='space'> </span>
        <span>A</span>
        <span>g</span>
        <span>a</span>
        <span>i</span>
        <span>n</span>
        <span>s</span>
        <span>t</span>
        <span className='space'> </span>
        <span>D</span>
        <span>i</span>
        <span>g</span>
        <span>i</span>
        <span>t</span>
        <span>a</span>
        <span>l</span>
        <span className='space'> </span>
        <span>D</span>
        <span>i</span>
        <span>s</span>
        <span>t</span>
        <span>r</span>
        <span>e</span>
        <span>s</span>
        <span>s</span>

      </h1>
    </div>
  );
};

export default LandingPage;
