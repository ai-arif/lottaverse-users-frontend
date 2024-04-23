import React, { useState } from 'react';
import TicketSummaryModal from './TicketSummaryModal';
import { _BuyTickets } from '@/utils/newUtils/BuyTickets';
import axiosInstance from '../../../utils/axiosInstance'

const BuyTicketModal = ({lotteryId,ticketPrice}) => {
  const [showTicketSummary, setShowTicketSummary] = useState(false);
  const [randomNumbers, setRandomNumbers] = useState([]);

  const generateRandomNumbers = () => {
    const newRandomNumbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
    setRandomNumbers([...randomNumbers, newRandomNumbers]);
  };
  const handleAddTicket = () => {
    setShowTicketSummary(true);
  };
  
  const handleDelete = (index) => {
    const updatedRandomNumbers = [...randomNumbers];
    updatedRandomNumbers.splice(index, 1);
    setRandomNumbers(updatedRandomNumbers);
  };
  const handleCloseTicketSummary = () => {
    setShowTicketSummary(false);
  };

  const handleBuyTicket = async() => {
    if(randomNumbers.length === 0) return alert("Please add a ticket");
    console.log("Number of tickets: ", randomNumbers.length)
    const res= await axiosInstance.post('/api/createpurchasehistory',{
      lotteryId: lotteryId,
      ticketIds: randomNumbers,
      
    })
    if(res.status===200){
      alert("Ticket bought successfully")
      // close the modal
      handleCloseTicketSummary();

    }
    // const response = await _BuyTickets(19,randomNumbers.length, "10000000000000000" );
    // console.log(response)
    setRandomNumbers([]);
    setShowTicketSummary(false);
  };

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ background: "#0a1223", color: "white" }}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Roll the ball</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
                <img onClick={generateRandomNumbers} className='rounded rounded-circle roll-the-ball' width={"100px"} height={"100px"} src="https://previews.123rf.com/images/djvstock/djvstock1705/djvstock170508533/78309597-refresh-arrows-in-circular-direction-icon-over-white-background-vector-illustration.jpg" alt="" />
                <br />
              </div>
              <br />
              {randomNumbers.map((numberCollection, index) => (
                <div key={index}>
                  <div className="d-flex justify-content-between">
                    {numberCollection.map((number, idx) => (
                      <div
                        key={idx}
                        style={{
                          width: "60px",
                          height: "60px",
                          borderRadius: "50%",
                          backgroundColor: "#ffffff",
                          color:"black",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginBottom: "10px",
                          marginRight: "10px"
                        }}
                      >
                        {number}
                      </div>
                    ))}
                    <button onClick={() => handleDelete(index)} className="btn btn-danger">Delete</button>
                  </div>
                  <br />
                </div>
              ))}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button data-bs-toggle="modal" data-bs-target="#ticketSummaryModal" onClick={handleAddTicket} type="button" className="btn btn-primary">Add Ticket</button>
            </div>
          </div>
        </div>
      </div>
      <TicketSummaryModal
        randomNumbers={randomNumbers}
        onClose={handleCloseTicketSummary}
        onBuyTicket={handleBuyTicket}
        onDelete={handleDelete}
        ticketPrice={ticketPrice}
      />
    </div>
  );
};

export default BuyTicketModal;
