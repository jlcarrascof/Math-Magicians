import React from 'react';
import '../App.css';
import Buttons from './Buttons';
import QuoteContainer from './QuoteContainer';

function Calculator() {
  return (
    <body>
      <h1 className="title">Math Magicians</h1>
      <div className="calc">
        <Buttons />
        <QuoteContainer />
      </div>
    </body>
  );
}

export default Calculator;
