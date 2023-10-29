import { useEffect } from 'react';
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
    <div className="page-dashboard">

      <div className="dashbar">
        <div className="logo-dash"></div>
        <div className="title">Dashboard</div>
        <button className="back">Back</button>
      </div>

      <div className="dashboard">

        <div className="input">

          <div className="inbox">
            <div className="prompt">Hello How are you</div>
            <div className="input">
              <input type="text" placeholder="Search..." />
            </div>
          </div>

          <div className="buttons">
            <button className="button seranos">Seranos</button>
            <button className="button theralyse">Theralyse</button>
          </div>

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
