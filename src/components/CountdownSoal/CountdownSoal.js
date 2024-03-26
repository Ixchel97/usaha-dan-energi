import React from 'react';
import CountdownTimer from '../../countdownTimer';
import "./CountdownSoal.css"

const CountdownSoal = () => {
const ONE_HOURS_IN_MS = 1 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterOneHours = NOW_IN_MS + ONE_HOURS_IN_MS;
  return (
    <div className="CountdownSoal">
      <CountdownTimer targetDate={dateTimeAfterOneHours} />
    </div>
  )
}

export default CountdownSoal