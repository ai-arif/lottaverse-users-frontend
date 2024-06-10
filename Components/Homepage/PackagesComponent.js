import { setLotteryId, setTicketPrice } from "@/features/user/userSlice";
import priceConverter from "@/utils/priceConverter";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CountdownTimer from "./CountdownTimer";

import { _getLotteryTicektCount } from "@/utils/newUtils/getLotteryTicektCount";

const PackagesComponent = ({ data }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [ticketPurchased, setTicketPurchased] = useState(0);
  const [timer, setTimer] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    getTicketPurchased(data.lotteryID);
    const calculateTimeLeft = () => {
      if (data?.expiration) {
        // Convert the Unix epoch time to a moment object
        const expirationTime = moment.unix(data.expiration);

        if (expirationTime.isBefore(moment())) {
          // If expiration time is in the past, set the timer to default values
          setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
          // Calculate the difference between now and the expiration time
          const diff = expirationTime.diff(moment(), "milliseconds");

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

  const getPackgageName = (id) => {
    if (id % 3 == 0) {
      return "EASY";
    } else if (id % 3 == 1) {
      return "SUPER";
    } else if (id % 3 == 2) {
      return "SUPER-X";
    }
  };
  const getTicketPurchased = async (id) => {
    const ticket = await _getLotteryTicektCount(id);
    setTicketPurchased(ticket);
  };

  return (
    <div className="">
      {/* show the day, hour, minute, and seconds timer here */}
      <CountdownTimer days={timer.days} hours={timer.hours} minutes={timer.minutes} seconds={timer.seconds} />
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
                <span className="text-color small fw-bold">${priceConverter(data?.ticketPrice)}</span>
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
              <span className="text-color small fw-bold">${priceConverter(data?.prizes?.firstPrize)}</span>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <div className="d-flex align-items-center">
                <i class="bi bi-gift text-warning"></i>
                <span className="ps-2">2nd Prize</span>
              </div>
            </div>
            <div className="ps-3">
              <span className="text-color small fw-bold">${priceConverter(data?.prizes?.secondPrize)}</span>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <div className="d-flex align-items-center">
                <i class="bi bi-gift text-warning"></i>
                <span className="ps-2">3rd Prize</span>
              </div>
            </div>
            <div className="ps-3">
              <span className="text-color small fw-bold">${priceConverter(data?.prizes?.thirdPrize)}</span>
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
              <span className="text-color small fw-bold">${priceConverter(data?.prizes?.otherPrizes)}</span>
            </div>
          </div>
          {/* <div className="d-flex justify-content-between">
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
         */}
          <table className="table my-4">
            <thead>
              <tr>
                <th scope="col">Round</th>
                <th scope="col">Ticket Purchased</th>
                <th scope="col">Players</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data?.roundCount}</td>
                <td>{ticketPurchased}</td>
                <td>{data?.userCount}</td>
              </tr>
            </tbody>
          </table>

          <div className="text-center gap-2 my-4">
            <button
              onClick={() => {
                dispatch(setLotteryId(data.lotteryID));
                dispatch(setTicketPrice(data.ticketPrice));
                router.push("/our-services/buy-ticket#buy");
              }}
              className="btn btn-warning "
              type="button"
            >
              Buy Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesComponent;
