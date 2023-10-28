import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
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
    <div className='page-dashboard'>
      <div className='dashbar'>
        <div className='logo'>
          Logo
        </div>
        <div className='back'>
          Back
        </div>
      </div>
      <div className='dashboard'>
      </div>
    </div>
    
  );
};

export default Dashboard;
