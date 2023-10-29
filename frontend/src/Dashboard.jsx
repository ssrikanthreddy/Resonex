import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Inbox from './Inbox';

const Dashboard = () => {
  const handleSubmit = (buttonClicked) => {
    if (buttonClicked === 'seranos') {
      // Handle 'seranos' button click
      console.log('Seranos button clicked');
    } else if (buttonClicked === 'theralyse') {
      // Handle 'theralyse' button click
      console.log('Theralyse button clicked');
    }
  };
  
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
        <div className="title">Dashboard</div>
        <button className="back">Back</button>
      </div>

      <div className="dashboard">

        <div className="input">
        <Inbox />
        </div>

        <div className='output'>
          
          <div className='graphs'>

            <div className='probs'>
              <div>Prob1</div>
              <div>Prob2</div>
            </div>

            <div className='maingraph'>
              <div>Main Graph</div>
            </div>

          </div>

          <div className='gptoutput'>
            GPT
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
