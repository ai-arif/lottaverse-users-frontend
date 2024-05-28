import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { _LotteryWinner } from "@/utils/newUtils/LotteryWinner";
import priceConverter from "@/utils/priceConverter";
import { _getwinnerIndex } from "@/utils/newUtils/getwinnerIndex";

function ResultsComponent({data}) {
  const router=useRouter()
  const [winner, setWinner] = useState()
  useEffect(() => {
    const getWinner = async () => {
      const winner = await _LotteryWinner(data?.lotteryID);
      console.log("winner",winner)
      // if the winner value is greater than 6, then show first 3 and last 3 characters, put * in between
      if(winner?.length > 6){
        const first = winner.slice(0,3);
        const last = winner.slice(-3);
        const middle = '*****';
        setWinner(first + middle + last);
      }
      else{
        setWinner(winner);
      }
      
    }
    const getTicketId = async () =>{
      const ticketId = await _getwinnerIndex(data?.lotteryID)
      console.log("ticketId",ticketId)
    }
    if(data?.lotteryID){
      getWinner()
      getTicketId()
    }
  } , [data])
  
  return (
    <div className="card info-card shadow-lg"  style={{ backgroundColor: 'transparent' }}>
      <div className="card-body">
        <div className="card-title d-flex justify-content-between">
        <h5>
        {data?.lotteryType?.toUpperCase()}
        </h5>
        <h5>
          Round #{data?.roundCount}
        </h5>
        </div>
        <table className="table">
  <thead>
    <tr>
      <th className="fw-semibold">Winner</th>
      <th className="fw-semibold">Address</th>
      <th className="fw-semibold">Ticket No.</th>
      <th className="fw-semibold">Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1st</td>
      <td className="fw-semibold">{winner == undefined ? 'No winner yet' : winner}</td>
      <td>ticket_no</td>
      <td>${priceConverter(data?.prizes?.firstPrize)}</td>
    </tr>
    <tr>
      <td>2nd</td>
      <td>{data?.secondWinner?.address}</td>
      <td>ticket_no</td>
      <td>${priceConverter(data?.prizes?.secondPrize)}</td>
    </tr>
    <tr>
      <td>3rd</td>
      <td>{data?.thirdWinner?.address}</td>
      <td>ticket_no</td>
      <td>${priceConverter(data?.prizes?.thirdPrize)}</td>
    </tr>
    <tr>
      <td>4th</td>
      <td>{data?.randomWinner?.address}</td>
      <td>ticket_no</td>
      <td>${priceConverter(data?.prizes?.otherPrizes)}</td>
    </tr>
  </tbody>
</table>

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
