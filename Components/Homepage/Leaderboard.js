import React from "react";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Leaderboard() {
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
  return (
    <div className=" card  mx-auto p-4">
      <div className="d-flex align-items-center gap-5 mx-auto">
        <div className="card leaderboard-card mb-0 px-3">
          <div className="card-title d-flex gap-2 align-items-center justify-content-center">
            <img
              src="img/lock-icon.png"
              alt="check-icon"
              width="25"
              height="25"
            />
            <h5 className="fw-bold mb-0">Locked</h5>
          </div>
          <div className="card-body " style={{ width: "450px" }}>

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
                Easy
              </div>
              <div>
              $3
              </div>
              <div>
                <div style={{ width: 30, height: 30 }}>
                  <CircularProgressbar styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: 'butt',

                    textSize: '46px',

                    pathTransitionDuration: 0.5,

                    pathColor: `blue`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })} className="fw-bold" value={percentage} text={`${percentage}%`} />
                </div>
              </div>
            </div>
            {/* Super, Super-X */}
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
                Super
              </div>
              <div>
              $5
              </div>
              <div>
                <div style={{ width: 30, height: 30 }}>
                  <CircularProgressbar styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: 'butt',

                    textSize: '46px',

                    pathTransitionDuration: 0.5,

                    pathColor: `yellow`,
                    textColor: 'yellow',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })} className="fw-bold" value={percentage} text={`${percentage}%`} />
                </div>
              </div>
            </div>

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
                Super-X
              </div>
              <div>
              $10
              </div>
              <div>
                <div style={{ width: 30, height: 30 }}>
                  <CircularProgressbar styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: 'butt',

                    textSize: '46px',

                    pathTransitionDuration: 0.5,

                    pathColor: `purple`,
                    textColor: '#e2f0f1',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })} className="fw-bold" value={percentage} text={`${percentage}%`} />
                </div>
              </div>
            </div>
          
          </div>
        </div>
        <img src="img/arrow.png" alt="check-icon" width="55" height="55" />
        <div className="unlocked-holder-box">
        <div style={{ width: 200, height: 200 }}>
    
    </div>
    
          <div
            className="card px-4 py-4 my-4 mb-0  leaderboard-card d-flex flex-column align-items-center"
            style={{ borderRadius: "100px" }}
          >
            <div className="card-title">Unlocked</div>
            <div className="card-body">
              <i className="far fa-circle text-warning"></i>
              <div className="d-flex gap-2">
                <img
                  src="img/check-icon.png"
                  alt="check-icon"
                  width="25"
                  height="25"
                />
                <p className="text-warning">$0.000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
