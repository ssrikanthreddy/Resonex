import React, { useEffect } from 'react';
import gsap from 'gsap';
import './App.css'
import Lenis from '@studio-freight/lenis';
import Navbar from './Navbar';
import DemoButton from './DemoButton';
import Features from './Features';


const LandingPage = () => {

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10*t))
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);


    useEffect(() => {
        
        
        setTimeout(() => {

            const elements = document.querySelectorAll('.name span');
    
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
    
          }, 1000);
      

      setTimeout(() => {

        const elements = document.querySelectorAll('.tagline span');

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

      }, 1500);
    }, []);
    
  return (
    <>
    <div className="landing-container">

        <Navbar/>

        <h1 className="landing-text name">
        <span>R</span><span>e</span><span>s</span><span>o</span><span>n</span><span>e</span><span>x</span><span>.</span><span>A</span><span>I</span>
        </h1>
        <h1 className="landing-text tagline">
            <span>Y</span><span>o</span><span>u</span><span>r</span><span className='space'> </span><span>S</span><span>h</span><span>i</span><span>e</span><span>l</span><span>d</span><span className='space'> </span><span>A</span><span>g</span><span>a</span><span>i</span><span>n</span><span>s</span><span>t</span><span className='space'> </span><span>D</span><span>i</span><span>g</span><span>i</span><span>t</span><span>a</span><span>l</span><span className='space'> </span><span>D</span><span>i</span><span>s</span><span>t</span><span>r</span><span>e</span><span>s</span><span>s</span>
        </h1>

        <DemoButton/>

        <div className='col'>
            <Features/>
            <Features/>
            <Features/>
            <Features/>
            <Features/>
            <Features/>
            <Features/>

        </div>


    </div>
    </>
  );
};

export default LandingPage;
