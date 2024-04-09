import React, { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import { useRouter } from "next/router";

const PackagesComponent = () => {
  const router=useRouter()
  const [timer, setTimer] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const nextDay = new Date();
      nextDay.setDate(nextDay.getDate() + 1);
      nextDay.setHours(0, 0, 0, 0);
      const now = new Date();
      const diff = nextDay - now;
      const hours = Math.floor(diff / 1000 / 60 / 60);
      const minutes = Math.floor(diff / 1000 / 60) % 60;
      const seconds = Math.floor(diff / 1000) % 60;
      const days = Math.floor(diff / 1000 / 60 / 60 / 24);
      setTimer({ days, hours, minutes, seconds });
    };

    const interval = setInterval(calculateTimeLeft, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      {/* show the day, hour, minute, and seconds timer here */}
      <CountdownTimer 
      days={timer.days}
      hours={timer.hours}
      minutes={timer.minutes}
      seconds={timer.seconds}
      />
      {/* show the timer details here */}
      <div className="card info-card shadow-lg">
      <div className="card-body">
        {/* <h5 className="card-title text-center">
          <i className="bi bi-alarm"></i> {timer.hours}h {timer.minutes}m {timer.seconds}s <span>| Left</span>
        </h5> */}
        <div className="d-flex justify-content-between  my-3">
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
        <div className="d-flex justify-content-between">
          <div>
            <div className="d-flex align-items-center">
              <i class="bi bi-gift text-warning"></i>
              <span className="ps-2">4th Prize</span>
            </div>
          </div>
          <div className="ps-3">
            <span className="text-color small fw-bold">$10</span>
          </div>
        </div>
        
          <table className="table table-dark my-4">
            <thead>
              <tr>
                <th scope="col">Round</th>
                <th scope="col">Ticket Purchased</th>
                <th scope="col">Players</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>100</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
        
        <div className="text-center gap-2 my-4">
          <button onClick={()=>{
            router.push('/our-services/buy-ticket')
          }} className="btn btn-warning " type="button">
            Buy Ticket
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PackagesComponent;
