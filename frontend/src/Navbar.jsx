import { useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    setTimeout(() => {
      const navs = document.querySelectorAll('.navbar-option');

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
    <div className="navbar">
      <div className="navbar-option nav-left logo">
        <span>R</span>
        <span>e</span>
        <span>s</span>
        <span>o</span>
        <span>n</span>
        <span>e</span>
        <span>x</span>
        <span>.</span>
        <span>A</span>
        <span>I</span>
      </div>

      <div className="navbar-option nav-center">
        <Link to="/dashboard">
          <span>H</span>
          <span>o</span>
          <span>m</span>
          <span>e</span>
        </Link>
      </div>

      <a href="#features" className="navbar-option nav-center">
        <span>F</span>
        <span>e</span>
        <span>a</span>
        <span>t</span>
        <span>u</span>
        <span>r</span>
        <span>e</span>
        <span>s</span>
      </a>

      <div className="navbar-option nav-center">
        <span>A</span>
        <span>b</span>
        <span>o</span>
        <span>u</span>
        <span>t</span>
      </div>

      <div className="navbar-option nav-right">
        <span>R</span>
        <span>e</span>
        <span>s</span>
        <span>o</span>
        <span>n</span>
        <span>e</span>
        <span>x</span>
        <span>.</span>
        <span>A</span>
        <span>I</span>
      </div>
      {/* Add more options as needed */}
    </div>
  );
};

export default Navbar;
