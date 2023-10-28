import { useEffect } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const DemoButton = () => {
  const handleClick = () => {
    // Add your logic for handling button click here
    // This function will be executed when the button is clicked
  };

  useEffect(() => {
    setTimeout(() => {
      const demoButton = document.querySelectorAll('.demo-button');

      gsap.fromTo(
        demoButton,
        { opacity: 0 },
        { opacity: 1, duration: 2, stagger: 0.01, ease: 'power2.out' }
      );

      gsap.fromTo(
        demoButton,
        { y: '40px' },
        { y: '0%', duration: 0.4, stagger: 0.01, ease: 'power2.out' }
      );
    }, 2500);
  }, []);

  return (
    <>
      <button className="demo-button" onClick={handleClick}>
        <Link to="/dashboard">View Demo</Link>
      </button>
    </>
  );
};

export default DemoButton;
