import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Inbox from './Inbox';
import Output from './Output';

const Dashboard = () => {

  const [targetPercent, setTargetPercent] = useState(50)
  

  const location = useLocation();
  useEffect(() => {
    // Check if the current location is '/dashboard'
    if (location.pathname === '/dashboard') {
      document.body.style.height = '100vh';
    } else {
      document.body.style.height = 'auto';
    }

    // Clean up the style when the component is unmounted
    return () => {
      document.body.style.height = 'auto';
    };
  }, [location.pathname]);

  return (
    <div className="page-dashboard">
      <div className="dashbar">
        <div className="logo-dash"></div>
      </div>

      <div className="dashboard">
        <div className="input">
          <Inbox setTargetPercent={setTargetPercent}/>
        </div>

        <div className="output">
          <Output targetPercent={targetPercent}/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
