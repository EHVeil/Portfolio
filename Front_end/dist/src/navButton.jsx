import React from 'react';
import { Link } from 'react-router-dom';

function NavButton(props) {
  return(
    <>
      <Link to="/timer">Practice Timer</Link>
      <Link to="/sessions">Sessions</Link>
      <Link to="/statistics">Statistics</Link>
    </>
  )
};

export default NavButton;