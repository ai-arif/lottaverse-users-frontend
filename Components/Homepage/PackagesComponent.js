import React, { useEffect } from "react";

const PackagesComponent = () => {
  const [timer, setTimer] = React.useState(0);
  // next day countdown hour, minute, second
  const nextDay = new Date();
  nextDay.setDate(nextDay.getDate() + 1);
  nextDay.setHours(0, 0, 0, 0);
  const now = new Date();
  const diff = nextDay - now;
  const hours = Math.floor(diff / 1000 / 60 / 60);
  const minutes = Math.floor(diff / 1000 / 60) % 60;
  const seconds = Math.floor(diff / 1000) % 60;
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="card info-card shadow-lg">
      <div className="card-body">
        <h5 className="card-title text-center">
          <i class="bi bi-alarm"></i> {timer} <span>| Left</span>
        </h5>
        <div className="d-flex justify-content-between">
          <p>
            <b>EASY</b>
          </p>
          <div className="ps-3">
            <p className="small">
              Per Ticket <br />
              <span className="text-color small fw-bold">$3</span>
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <div className="d-flex align-items-center">
              <i class="bi bi-gift text-warning"></i>
              <span className="ps-2">1st Prize</span>
            </div>
          </div>
          <div className="ps-3">
            <span className="text-color small fw-bold">$3000</span>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <div className="d-flex align-items-center">
              <i class="bi bi-gift text-warning"></i>
              <span className="ps-2">1st Prize</span>
            </div>
          </div>
          <div className="ps-3">
            <span className="text-color small fw-bold">$3000</span>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <div className="d-flex align-items-center">
              <i class="bi bi-gift text-warning"></i>
              <span className="ps-2">1st Prize</span>
            </div>
          </div>
          <div className="ps-3">
            <span className="text-color small fw-bold">$3000</span>
          </div>
        </div>
        {/* buy ticket button full width */}
        <div className="d-grid gap-2 my-4">
          <button className="btn btn-warning " type="button">
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackagesComponent;
