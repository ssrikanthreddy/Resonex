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
    }, 2500);
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
              <span>F</span>
              <span>e</span>
              <span>a</span>
              <span>t</span>
              <span>u</span>
              <span>r</span>
              <span>e</span>
              <span>s</span>
            </a>
          </li>
          <li>
            <a href="#about">
              <span>A</span>
              <span>b</span>
              <span>o</span>
              <span>u</span>
              <span>t</span>
            </a>
          </li>
          <li>
            <a href="#faq">
              <span>F</span>
              <span>A</span>
              <span>Q</span>
              <span>&apos;</span>
              <span>s</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="nav-elements nav-right">
        <button className="btn">
          <Link to="/dashboard">Demo</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
