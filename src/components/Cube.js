import React from 'react';
import './Cube.css';

function Cube() {
  return (
    <div className="cube">
      <div className="side front"></div>
      <div className="side back"></div>
      <div className="side left"></div>
      <div className="side right"></div>
      <div className="side top"></div>
      <div className="side bottom"></div>
    </div>
  );
}

export default Cube;
