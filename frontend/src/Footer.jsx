import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <h2 className="footer-header">
          Empowering social media with accurate mental health risk detection
        </h2>
        <div className="footer-button">
          <Link to="/dashboard">View Demo</Link>
        </div>
      </div>
      <div className="divider"></div>
      <div className="contact">
        <div className="left-foot">
          <div className="logo-foot"></div>
          <div>
            <span className="foot-subtitle">esonex AI</span>
          </div>
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#root">Home</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#">FAQ&apos;s</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
