import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navbar-option nav-left logo">
            <span>R</span><span>e</span><span>s</span><span>o</span><span>n</span><span>e</span><span>x</span><span>.</span><span>A</span><span>I</span>
        </div>
        
        <div className="navbar-option nav-center">
            <span>H</span><span>o</span><span>m</span><span>e</span>
        </div>

        <div className="navbar-option nav-center">
            <span>F</span><span>e</span><span>a</span><span>t</span><span>u</span><span>r</span><span>e</span><span>s</span>
        </div>

        <div className="navbar-option nav-center">
            <span>A</span><span>b</span><span>o</span><span>u</span><span>t</span>
        </div>

      <div className="navbar-option nav-right">
      <span>R</span><span>e</span><span>s</span><span>o</span><span>n</span><span>e</span><span>x</span><span>.</span><span>A</span><span>I</span>
      </div>
      {/* Add more options as needed */}
    </div>
  );
};

export default Navbar;
