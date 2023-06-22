import React, { useState, useEffect } from 'react';
import NavButton from './navButton.jsx';


function SessionTimer (props) {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  //move state up to the parent component so the times can be used in the submission form etc.

  useEffect(() => {
    let intervalId;

    if (start) {
      intervalId = setInterval(() => setTime(time => time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [start, time])

  const hr = Math.floor(time / 360000);
  const min = Math.floor((time % 360000) / 6000);
  const sec = Math.floor((time % 6000) / 100);


  const handleStartClick = () => {
    setStart(!start);
  }

  const handleReset = () => {
    setTime(0);
  }

  return (
    <>
      <NavButton />
      <div  className="timer">
        {hr}:{min}:{sec}
        {start ? <div onClick={handleStartClick}>Stop</div> : <div onClick={handleStartClick}>Start</div> }
        <span onClick={handleReset}>Reset</span>
      </div>
      <div>
        <form>
          <input placeholder="Category"></input>
          <input placeholder="Activity"></input>
          <input placeholder="Notes"></input>
          <div><input type="submit" /></div>

        </form>
      </div>
    </>
  )
};

export default SessionTimer;