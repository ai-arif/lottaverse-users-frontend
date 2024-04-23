import React, { useEffect, useState } from "react";
import CountdownTimer from "./CountdownTimer";
import { useRouter } from "next/router";
import moment from "moment";

const PackagesComponent = ({data}) => {
  const router=useRouter()
  const [timer, setTimer] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    const calculateTimeLeft = () => {
      if (data?.expiration) {
        // Convert the Unix epoch time to a moment object
        const expirationTime = moment.unix(data.expiration);

        if (expirationTime.isBefore(moment())) {
          // If expiration time is in the past, set the timer to default values
          setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
          // Calculate the difference between now and the expiration time
          const diff = expirationTime.diff(moment(), 'milliseconds');

          // Calculate days, hours, minutes, and seconds from the difference
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);

          setTimer({ days, hours, minutes, seconds });
        }
      } else {
        // If expiration is null, set the timer to default values
        setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Call calculateTimeLeft immediately to set the initial timer values
    calculateTimeLeft();

    // Set up an interval to update the timer every second
    const interval = setInterval(calculateTimeLeft, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [data?.expiration]);


  const getPackgageName=(id)=>{
    if(id%3==0){
      return "EASY"
    }else if(id%3==1){
      return "SUPER"
    }else if(id%3==2){
      return "SUPER-X"
    }
  }

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
            
            <b>{data?.lotteryType?.toUpperCase()}</b>
          </p>
          <div className="ps-3">
            <p className="small">
              Per Ticket <br />
              <span className="text-color small fw-bold">${data?.ticketPrice}</span>
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
            <span className="text-color small fw-bold">${data?.prizes?.firstPrize}</span>
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
            <span className="text-color small fw-bold">${data?.prizes?.secondPrize}</span>
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
            <span className="text-color small fw-bold">${data?.prizes?.thirdPrize}</span>
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
            <span className="text-color small fw-bold">${data?.prizes?.fourthPrize}</span>
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
                <td>{data?.round}</td>
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
