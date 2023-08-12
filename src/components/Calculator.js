import React from 'react';
import '../App.css';
import Buttons from './Buttons';

function Calculator() {
  return (
    <div>
      <h1 className="title">Math Magicians</h1>
      <div className="calc">
        <Buttons />
      </div>
    </div>
  );
}

export default Calculator;
