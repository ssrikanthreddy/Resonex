import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
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

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsTop(false);
      } else {
        setIsTop(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyles = {
    display: isTop ? 'block' : 'none',
    transition: 'opacity 0.5s ease-in-out',
  };

  const navCenterStyles = {
    marginTop: isTop ? '' : '12px',
    marginRight: isTop ? '' : '10px',
  };

  const logoStyles = {
    display: isTop ? 'block' : 'none',
    height: '80px',
    width: '80px',
    transition: 'opacity 0.5s ease-in-out',
  };
  return (
    <nav>
      <div className="nav-elements" style={logoStyles}>
        <img className="logo" src="./src/assets/ResonexLogo.png" alt="Logo" />
      </div>
      <div className="nav-elements nav-center" style={navCenterStyles}>
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
      <div className="nav-elements nav-right" style={navbarStyles}>
        <button className="btn gradient-border">
          <Link to="/dashboard">Demo</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
