import React from 'react';
import { Link } from 'react-router-dom';
import Buttons from './Buttons';

function Calculator() {
  return (
    <div>
      <nav className="header">
        <h1 className="title">📐 Math Magicians📏</h1>
        <ul className="menu">
          <li className="menu-item">
            <Link to="/Math-Magicians">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/Math-Magicians/calculator">Calculator</Link>
          </li>
          <li className="menu-item">
            <Link to="/Math-Magicians/quote">Quote</Link>
          </li>
        </ul>
      </nav>
      <div className="calc">
        <p className="math-text">Let&#39;s do some math!</p>
        <Buttons />
      </div>
    </div>
  );
}

export default Calculator;
