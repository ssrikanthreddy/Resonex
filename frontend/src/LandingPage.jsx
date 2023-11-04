import { useEffect } from 'react';
import gsap from 'gsap';
import './App.css';
import Lenis from '@studio-freight/lenis';
import Navbar from './Navbar';
import DemoButton from './DemoButton';
import Features from './Features';
import Footer from './Footer';
import FAQ from './FAQ';

const LandingPage = () => {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  useEffect(() => {
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate');

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
    }, 600);

    setTimeout(() => {
      const elements = document.querySelectorAll('.tagline');

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
      <div className="circular-lighting"></div>
      <section id="hero">
        <div className="circular-lighting"></div>
        <Navbar />

        <div className="title-container">
          <span className="title animate">Build your digital distress </span>
          <span className="title animate">
            <span className="gradient-text animate">
              shield today with Resonex AI
            </span>
          </span>
          <p className="tagline ">
            Empowering social media with accurate mental health risk detection.
          </p>
        </div>
        <DemoButton />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default LandingPage;
