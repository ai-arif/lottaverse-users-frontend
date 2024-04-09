import { useRouter } from "next/router";
import React from "react";

function ResultsComponent() {
  const router=useRouter()
  return (
    <div className="card info-card shadow-lg">
      <div className="card-body">
        <div className="card-title d-flex justify-content-between">
        <h5>
        EASY
        </h5>
        <h5>
          Round #1
        </h5>
        </div>
        <div className="d-flex justify-content-between">
            <p className="fw-semibold">Winner</p>
            <p className="fw-semibold">Name</p>
            <p className="fw-semibold">Ticket No.</p>
        </div>
        {/* buy ticket button full width */}
        <div className="d-grid gap-2 my-4">
          <button onClick={()=>{
            router.push('/our-services/winner')
          }} className="btn btn-warning " type="button">
            See More
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultsComponent;
