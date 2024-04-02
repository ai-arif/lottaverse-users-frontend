import React from "react";

function ResultsComponent() {
  return (
    <div className="card info-card shadow-lg">
      <div className="card-body">
        <h5 className="card-title">
        EASY
        </h5>
        <div className="d-flex justify-content-between">
            <p className="fw-semibold">Winner</p>
            <p className="fw-semibold">Name</p>
            <p className="fw-semibold">Ticket No.</p>
        </div>
        {/* buy ticket button full width */}
        <div className="d-grid gap-2 my-4">
          <button className="btn btn-warning " type="button">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultsComponent;
