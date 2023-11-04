import { useEffect, useState } from 'react';
import gsap from 'gsap';

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const navs = document.querySelectorAll('.nav-elements, nav');

      gsap.fromTo(
        navs,
        { opacity: 0 },
        { opacity: 1, duration: 1, stagger: 0.01, ease: 'power2.out' }
      );

      gsap.fromTo(
        navs,
        { y: '40px' },
        { y: '0%', duration: 0.4, stagger: 0.01, ease: 'power2.out' }
      );
    }, 2000);

    const handleScroll = () => {
      if (window.scrollY > 300) {
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
    opacity: isTop ? '1' : '0',
    transition: 'opacity 0.4s',
  };

  const navCenterStyles = {
    marginTop: isTop ? '' : '0px',
    marginRight: isTop ? '' : '0px',
  };

  const logoStyles = {
    opacity: isTop ? '1' : '0',
    height: '80px',
    width: '80px',
    transition: 'opacity 0.4s',
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
          <a
            href="https://github.com/ssrikanthreddy/resonex"
            rel="noreferrer"
            target="_blank"
          >
            GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              style={{ fill: '#f6fdc3', marginLeft: '5px' }}
            >
              <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
            </svg>
          </a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
