import { useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    setTimeout(() => {
      const navs = document.querySelectorAll('.nav-elements');

      gsap.fromTo(
        navs,
        { opacity: 0 },
        { opacity: 1, duration: 2, stagger: 0.01, ease: 'power2.out' }
      );

      gsap.fromTo(
        navs,
        { y: '40px' },
        { y: '0%', duration: 0.4, stagger: 0.01, ease: 'power2.out' }
      );
    }, 2000);
  }, []);

  return (
    <nav>
      <div className="nav-elements">
        <img className="logo" src="./src/assets/ResonexLogo.png" alt="Logo" />
      </div>
      <div className="nav-elements nav-center">
        <ul className="nav-links">
          <li>
            <a href="#features">
              <span>Features</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#faq">
              <span>FAQ&apos;s</span>
            </a>
          </li>
          <li>
            <a href="#contact">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-elements nav-right">
        <button className="btn gradient-border">
          <Link to="/dashboard">Demo</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
