import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Inbox from './Inbox';
import Output from './Output';

const Dashboard = () => {
  const [targetPercent, setTargetPercent] = useState(50);
  const [happy, setHappy] = useState(50);
  const [sad, setSad] = useState(50);

  const location = useLocation();
  useEffect(() => {
    // Check if the current location is '/dashboard'
    if (location.pathname === '/dashboard') {
      document.body.style.height = '100%';
    } else {
      document.body.style.height = 'auto';
    }

    // Clean up the style when the component is unmounted
    return () => {
      document.body.style.height = 'auto';
    };
  }, [location.pathname]);

  return (
    <div className="dashboard">
      <Inbox
        setHappy={setHappy}
        setSad={setSad}
        setTargetPercent={setTargetPercent}
      />
      <Output happy={happy} sad={sad} targetPercent={targetPercent} />
    </div>
  );
};

export default Dashboard;
