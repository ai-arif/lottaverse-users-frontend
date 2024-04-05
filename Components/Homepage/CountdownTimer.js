import React from 'react'

const CountdownTimer = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="card countdown-timer-card shadow-lg">
        <div className="card-body">
          <h5 className="card-title text-center">Countdown</h5>
          <div className="d-flex justify-content-between">
            <div>
              <p className="text-center">{days}</p>
              <p className="text-center">Days</p>
            </div>
            <div>
              <p className="text-center">{hours}</p>
              <p className="text-center">Hours</p>
            </div>
            <div>
              <p className="text-center">{minutes}</p>
              <p className="text-center">Minutes</p>
            </div>
            <div>
              <p className="text-center">{seconds}</p>
              <p className="text-center">Seconds</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default CountdownTimer