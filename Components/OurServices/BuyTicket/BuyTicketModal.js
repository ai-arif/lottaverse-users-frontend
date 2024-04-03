import React, { useState } from 'react';

const BuyTicketModal = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);

  const generateRandomNumbers = () => {
    const newRandomNumbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 100));
    setRandomNumbers(newRandomNumbers);
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
                
                
                  <img  onClick={generateRandomNumbers} className='rounded rounded-circle' width={"100px"} height={"100px"} src="https://previews.123rf.com/images/djvstock/djvstock1705/djvstock170508533/78309597-refresh-arrows-in-circular-direction-icon-over-white-background-vector-illustration.jpg" alt="" />
                
                <br />
              </div>
              <br />
              <div className="d-flex justify-content-between">
              {randomNumbers.map((number, index) => (
                  <div
                    key={index}
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "50%",
                      backgroundColor: "#ffffff",
                      color:"black",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: "10px"
                    }}
                  >
                    {number}
                  </div>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Add Ticket</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyTicketModal;
