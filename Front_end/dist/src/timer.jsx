import React, { useState, useEffect } from 'react';

function Timer (props) {
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  //move state up to the parent component so the times can be used in the submission form etc.

  useEffect(() => {
    let intervalId;
    console.log('useEffect active');
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

  return (
    <div className="timer" onClick={handleStartClick}>
      {start ? <div>
        {hr}:{min}:{sec}
      </div> : <div>Start</div> }
    </div>
  )

}

export default Timer;