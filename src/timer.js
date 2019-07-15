import React, { useState, useEffect } from 'react';
import './App.css';

const Timer = () => {

  const [time, setTime] = useState(60);

  useEffect(() => {
    setInterval(() => {
      setTime(time - 1);
    }, 1000);
  });

  return (
    <div className="timer">{time}</div>
  )
};

export default Timer;
