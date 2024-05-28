import { _getLotteryTicektCount } from '@/utils/newUtils/getLotteryTicektCount';
import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const LeaderboardPack = ({item}) => {
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
  const getTicketPurchased = async (id) => {
    const ticket = await _getLotteryTicektCount(id)
    return ticket
  }
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
                    ${item?.lotteryType?.toUpperCase() === "EASY" ? 3:10}
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
