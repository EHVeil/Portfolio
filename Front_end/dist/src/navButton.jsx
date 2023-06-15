import React from 'react';
import { Link } from 'react-router-dom';

function NavButton(props) {
  return(
    <div className="button">
      <Link to="/sessions">Sessions</Link>
      <Link to="/">Practice Timer</Link>
      <Link to="/statistics">Statistics</Link>
    </div>
  )
};

export default NavButton;