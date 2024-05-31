import { _getLotteryTicektCount } from '@/utils/newUtils/getLotteryTicektCount';
import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const LeaderboardPack = ({item}) => {
  const [ticketPurchased, setTicketPurchased] = useState(0);
    let percentage = 5;
  const getColor = (value) => {
    if (value >= 80) {
      return '#00FF00'; // Green color for values >= 80
    } else if (value >= 50) {
      return '#FFA500'; // Orange color for values >= 50
    } else {
      return '#FF0000'; // Red color for values < 50
    }
  };
  useEffect(() => {
    getTicketPurchased(item.lotteryID)
  }, [item])
  const getTicketPurchased=async(id)=>{
    const ticket=await _getLotteryTicektCount(id)
    setTicketPurchased(ticket)
  }
  const calculateValue = (type, tickets) => {
    const multiplier = type?.toUpperCase() === "EASY" ? 3 : 10;
    const result = tickets * multiplier * 0.05;
    return result.toFixed(3);
  };
  return (
    <div className="d-flex justify-content-between">
                  <div>
                    <img
                      src="img/check-icon.png"
                      alt="check-icon"
                      width="25"
                      height="25"
                    />
                  </div>
                  <div>
                    {item?.lotteryType?.toUpperCase()} 
                  </div>
                  <div>
                  ${calculateValue(item?.lotteryType, ticketPurchased)}
                  </div>
                  <div>
                    <div style={{ width: 30, height: 30 }}>
                      <CircularProgressbar styles={buildStyles({
                        rotation: 0.25,
                        strokeLinecap: 'butt',

                        textSize: '46px',

                        pathTransitionDuration: 0.5,

                        pathColor: getColor(percentage),
                        textColor: '#e2f0f1',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                      })} className="fw-bold" value={percentage} text={`${percentage}%`} />
                    </div>
                  </div>
                </div>
  )
}

export default LeaderboardPack
