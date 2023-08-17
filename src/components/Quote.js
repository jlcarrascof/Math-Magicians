import { Link } from 'react-router-dom';
import QuoteContainer from './QuoteContainer';

function Quote() {
  return (
    <div>
      <nav className="header">
        <h1 className="title">Math Magicians</h1>
        <ul className="menu">
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/calculator">Calculator</Link>
          </li>
          <li className="menu-item">
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
      <QuoteContainer />
    </div>
  );
}

export default Quote;
