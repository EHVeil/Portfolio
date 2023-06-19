import React, { useState, useEffect } from 'react';

function Timer (props) {
  const [time, setTime] = useState(0);
  const [start, clickStart] = useState(false);
  useEffect(() => {

  }, [time, start])
}