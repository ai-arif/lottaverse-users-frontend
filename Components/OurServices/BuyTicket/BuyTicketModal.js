import React, { useState } from 'react';
import TicketSummaryModal from './TicketSummaryModal';
import { _BuyTickets } from '@/utils/newUtils/BuyTickets';
import { _BuyTicketsUSDT } from '@/utils/newUtils/BuyTicketUSDT';
import axiosInstance from '../../../utils/axiosInstance'

const BuyTicketModal = ({ lotteryId, ticketPrice }) => {
  const [showTicketSummary, setShowTicketSummary] = useState(false);
  const [loading, setLoading] = useState(false);
  const [randomNumbers, setRandomNumbers] = useState([]);

  // const generateRandomNumbers = () => {
  //   const newRandomNumbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
  //   setRandomNumbers([...randomNumbers, newRandomNumbers]);
  // };
  const generateRandomNumbers = () => {
    const newRandomNumbers = Array.from({ length: 6 }, () => {
        const now = new Date();
        const uniqueSeed = now.getTime() + now.getMilliseconds();
        return Math.floor((uniqueSeed % 100) + Math.random() * 100) % 100;
    });
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

  const handleBuyTicket = async () => {
    if (randomNumbers.length === 0) return alert("Please add a ticket");
    setLoading(true);
    console.log("Number of tickets: ", randomNumbers.length)
    console.log("Lottery ID: ", lotteryId)
    console.log("Ticket Price: ", ticketPrice)
    const price = ticketPrice * randomNumbers.length;
    console.log("Total Price: ", price)
    const res = await axiosInstance.post('/api/prepurchase', {
      lotteryId: lotteryId,
      ticketIds: randomNumbers,
    })
    const addresses = res.data.data.referAddress;
    const amounts = res.data.data.amount;
    console.log(addresses)
    console.log(amounts)
    // 0x089BB7064d27C0b82D935A35ad46b29d943c8D4D
    
    // const response2 = await _BuyTickets(lotteryId,randomNumbers.length, price.toString() );
    const response = await _BuyTicketsUSDT("0x9de06D9118D4Dc2BBef59b3FA0B0C163d222815A",
      lotteryId,
      randomNumbers.length,
      price.toString(),
      addresses,
      amounts,
      "0xeB3869727865F51E07c3Efe6D4824bE3E2BC7C80",
      "10000000",
      false
    )

    console.log(response)
    console.log(response?.hash)
    if (response?.hash) {
      const res = await axiosInstance.post('/api/createpurchasehistory', {
        lotteryId: lotteryId,
        ticketIds: randomNumbers,
        transactionHash: response.hash
      })
      if (res.status === 200) {
        alert("Ticket bought successfully")
        handleCloseTicketSummary();
        setLoading(false);
      }
    }
    else {
      setLoading(false);
      alert("Something went wrong")
    }

    setRandomNumbers([]);
    setShowTicketSummary(false);
    setLoading(false);
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
              <h1 className="modal-title fs-5" id="exampleModalLabel">Roll the ball - lotteryId {lotteryId}</h1>
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
                          color: "black",
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
        loading={loading}
      />
    </div>
  );
};

export default BuyTicketModal;
