import React from 'react';

const DemoButton = () => {
  const handleClick = () => {
    // Add your logic for handling button click here
    // This function will be executed when the button is clicked
  };

  return (
    <button className="demo-button" onClick={handleClick}>
      View Demo
    </button>
  );
};

export default DemoButton;
