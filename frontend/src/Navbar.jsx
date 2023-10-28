import { useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    setTimeout(() => {
      const navs = document.querySelectorAll('.navbar-option, .nav-center');

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
    <div className="nav">
      <div className="navbar">
        <div className="navbar-option nav-left">
        <div className="logo"></div>
        </div>
        <div className="nav-center">
          <div className="navbar-option">
            <Link to="/dashboard">
              <span>H</span>
              <span>o</span>
              <span>m</span>
              <span>e</span>
            </Link>
          </div>

          <a href="#features" className="navbar-option">
            <span>F</span>
            <span>e</span>
            <span>a</span>
            <span>t</span>
            <span>u</span>
            <span>r</span>
            <span>e</span>
            <span>s</span>
          </a>

          <div className="navbar-option">
            <span>A</span>
            <span>b</span>
            <span>o</span>
            <span>u</span>
            <span>t</span>
          </div>
        </div>

        <div className="navbar-option nav-right">
          <Link to="/dashboard">
            <span>D</span>
            <span>e</span>
            <span>m</span>
            <span>o</span>
          </Link>
        </div>
        {/* Add more options as needed */}
      </div>
    </div>
  );
};

export default Navbar;
