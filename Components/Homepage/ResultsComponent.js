import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { _LotteryWinner } from "@/utils/newUtils/LotteryWinner";

function ResultsComponent({data}) {
  const router=useRouter()
  const [winner, setWinner] = useState()
  useEffect(() => {
    const getWinner = async () => {
      const winner = await _LotteryWinner(data?.lotteryID);
      console.log("winner",winner)
      
      setWinner(winner);
    }
    if(data?.lotteryID){
      getWinner()
    }
  } , [data])
  
  return (
    <div className="card info-card shadow-lg">
      <div className="card-body">
        <div className="card-title d-flex justify-content-between">
        <h5>
        {data?.lotteryType?.toUpperCase()}
        </h5>
        <h5>
          Round #{data?.roundCount}
        </h5>
        </div>
        <div className="d-flex justify-content-between">
            <p className="fw-semibold">Winner</p>
            {/* <p className="fw-semibold">Name</p> */}
            {/* <p className="fw-semibold">Ticket No.</p> */}
        </div>
        <div className="d-flex justify-content-between">
            <p className="fw-semibold">{winner==undefined ? 'No winner yet': winner}</p>
            
            {/* <p className="fw-semibold">Ticket No.</p> */}
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
