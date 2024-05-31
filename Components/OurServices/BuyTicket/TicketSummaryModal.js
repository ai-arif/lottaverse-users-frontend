import React from 'react';
import priceConverter from '@/utils/priceConverter';
const TicketSummaryModal = ({ randomNumbers, onClose, onBuyTicket, onDelete, ticketPrice, loading, closeButtonRef }) => {

  return (
    <div className="modal fade" id="ticketSummaryModal" tabIndex="-1" aria-labelledby="ticketSummaryModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content" style={{ background: "#0a1223", color: "white" }}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="ticketSummaryModalLabel">Ticket Summary</h1>
            <div className="rounded-button-container">
              <button data-bs-dismiss="modal" type="button" className="custom-close-button" aria-label="Close"></button>
            </div>

          </div>
          <div className="modal-body">
            {randomNumbers.map((numberCollection, index) => (
              <div key={index} className="d-flex justify-content-between align-items-center mb-2">
                <div className="d-flex">
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
                </div>
                <button onClick={() => onDelete(index)} className="btn btn-danger">Delete</button>
              </div>
            ))}
          </div>
          {/* show a sub heading Checkout and bottom Tickets count with flex between, a horizontal line and total price */}
          <div className="modal-body">
            <h5 className="text-white">Checkout</h5>
            <div className="d-flex justify-content-between">
              <span className="text-white small">Tickets</span>
              <span className="text-white fw-bold">{randomNumbers.length}x</span>
            </div>
            <hr className="text-white" />
            <div className="d-flex justify-content-between">
              <span className="text-white small">Total Price</span>
              <span className="text-white fw-bold">${priceConverter(randomNumbers.length * ticketPrice)}</span>
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center w-100">
          {
              loading ? (
                <button className="btn btn-primary" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Loading...
                </button>
              ) : (
                <button onClick={onBuyTicket} type="button" className="btn btn-primary">Buy With Reward</button>
              )
            }

            {
              loading ? (
                <button className="btn btn-primary" type="button" disabled>
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                  Loading...
                </button>
              ) : (
                <button onClick={onBuyTicket} type="button" className="btn btn-success">Buy With Smart Contract</button>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketSummaryModal;
