import React from "react";

function Leaderboard() {
  return (
    <div className=" card w-75 mx-auto p-4">
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
          <div className="card-body">
            <div className="d-flex gap-2">
              <img
                src="img/check-icon.png"
                alt="check-icon"
                width="25"
                height="25"
              />
              <p className="text-warning">$0.000</p>
            </div>
            <div className="d-flex gap-2">
              <img
                src="img/check-icon.png"
                alt="check-icon"
                width="25"
                height="25"
              />
              <p className="text-warning">$0.000</p>
            </div>
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
        <img src="img/arrow.png" alt="check-icon" width="55" height="55" />
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
  );
}

export default Leaderboard;
