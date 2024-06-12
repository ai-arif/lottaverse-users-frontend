import React from "react";

const CountdownTimer = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="card countdown-timer-card shadow-lg">
      <div className="card-body">
        <h5 className="card-title text-center"></h5>
        <div className="d-flex justify-content-between countdown-container">
          <div className="countdown-item">
            <p className="text-center countdown-number">{days}</p>
            <p className="text-center countdown-label">D</p>
          </div>
          <div className="countdown-item">
            <p className="text-center countdown-number">{hours}</p>
            <p className="text-center countdown-label">H</p>
          </div>
          <div className="countdown-item">
            <p className="text-center countdown-number">{minutes}</p>
            <p className="text-center countdown-label">M</p>
          </div>
          <div className="countdown-item">
            <p className="text-center countdown-number">{seconds}</p>
            <p className="text-center countdown-label">S</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
