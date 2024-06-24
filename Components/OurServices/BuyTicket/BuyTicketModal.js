import React, { useEffect, useRef, useState } from 'react';
import TicketSummaryModal from './TicketSummaryModal';
import { _BuyTickets } from '@/utils/newUtils/BuyTickets';
import { _BuyTicketsUSDT } from '@/utils/newUtils/BuyTicketUSDT';
import axiosInstance from '../../../utils/axiosInstance'
import { useSelector } from 'react-redux';
import { _getOwner } from '@/utils/newUtils/getOwner';
import { useWeb3ModalAccount, useWeb3ModalProvider } from '@web3modal/ethers5/react';

const BuyTicketModal = () => {
  const { lotteryId, ticketPrice } = useSelector(state => state.user)
  const [showTicketSummary, setShowTicketSummary] = useState(false);
  const [buyWithCommission, setBuyWithCommission] = useState(false);
  const { address, chainId, isConnected } = useWeb3ModalAccount()
  const { walletProvider } = useWeb3ModalProvider()
  const closeButtonRef = useRef(null);


  const [loading, setLoading] = useState(false);
  const [randomNumbers, setRandomNumbers] = useState([]);



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


  const handleBuyTicket = async (useCommission=false) => {
    if (randomNumbers.length === 0) return alert("Please add a ticket");
    
    setLoading(true);
    
    const price = ticketPrice * randomNumbers.length;
    console.log("Total Price: ", price)
    const res = await axiosInstance.post('/api/prepurchase', {
      lotteryId: lotteryId,
      ticketIds: randomNumbers,
    })

    const owner = await _getOwner(walletProvider, isConnected);
    // calculate 18% of the ticket price
    const percentageAmount = (ticketPrice * 18) / 100;
    const addresses = res.data.data.referAddress;
    const amounts = res.data.data.amount;
    

    // const response2 = await _BuyTickets(lotteryId,randomNumbers.length, price.toString() );
    const response = await _BuyTicketsUSDT(process.env.TOKEN_ADDRESS,
      lotteryId,
      randomNumbers.length,
      price.toString(),
      addresses,
      amounts,
      owner,
      percentageAmount,
      useCommission==true ? true: false,
      walletProvider, isConnected
    )

    if (response?.hash) {
      const res = await axiosInstance.post('/api/createpurchasehistory', {
        lotteryId: lotteryId,
        ticketIds: randomNumbers,
        transactionHash: response?.hash
      })
      if (res.status === 200) {
        closeModal();
        alert("Ticket bought successfully")
        handleCloseTicketSummary();

        setLoading(false);
      }
    }
    else {
      closeModal()
      setLoading(false);
      alert("Something went wrong")
    }

    setRandomNumbers([]);
    setShowTicketSummary(false);
    setLoading(false);
  };

  const closeModal = () => {
    if (closeButtonRef.current) {
      closeButtonRef.current.click();
    }
  }

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div style={{minHeight:"300px"}} className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content" style={{ background: "#0B0629", color: "white" }}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Roll the ball lotteryId {lotteryId}</h1>

              <div className="rounded-button-container">
                <button data-bs-dismiss="modal" type="button" className="custom-close-button" aria-label="Close"></button>
              </div>
            </div>
            <div className="modal-body">
              <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
                <img onClick={generateRandomNumbers} className='rounded rounded-circle roll-the-ball' width={"100px"} height={"100px"} src="https://previews.123rf.com/images/djvstock/djvstock1705/djvstock170508533/78309597-refresh-arrows-in-circular-direction-icon-over-white-background-vector-illustration.jpg" alt="" />
                <br />
              </div>
              <br />
              <div className=' d-flex justify-content-center align-items-center'>
              <div style={{ maxHeight: "240px", overflowY: "auto" }}>


                {randomNumbers.map((numberCollection, index) => (
                  <div key={index}>
                    <div id='buyTicket' className="d-flex justify-content-between">
                      {numberCollection.map((number, idx) => (
                        <div
                          key={idx}
                          style={{
                            width: "40px",
                            height: "40px",
                            marginTop:"10px",
                            marginLeft:"10px",
                            borderRadius: "50%",
                            backgroundColor: "#7359f8",
                            color: "#fff",
                            fontWeight: "bold",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: "2px",
                            marginRight: "10px"
                          }}
                        >
                          {number}
                        </div>
                      ))}
                      {/* <i class="fa-regular fa-trash"></i> */}
                      {/* <div  className="bg-danger p-3"> */}
                      <b className='p-3 text-center'>
                      <i style={{cursor:"pointer"}} onClick={() => handleDelete(index)} className="text-danger  bi bi-trash"></i>
                      </b>
                      {/* </div> */}
                    </div>
                    <br />
                  </div>
                ))}
              </div>
              </div>
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
        setBuyWithCommission={setBuyWithCommission}
        onDelete={handleDelete}
        ticketPrice={ticketPrice}
        loading={loading}
        closeButtonRef={closeButtonRef}

      />
    </div>
  );
};

export default BuyTicketModal;
