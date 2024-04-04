import React, { useEffect } from 'react';
import BuyTicketModal from './BuyTicketModal';

const TicketComponent = () => {

    return (
        <div className="card info-card ticket-component position-relative">
            <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="Cover" style={{ objectFit: 'cover', height: '150px' }} />
            <div className="card-body  w-100" >
                <h5 className="card-title text-center text-white">
                    Your Lottoday Combinations
                </h5>

                <p className='text-white'><b>Checkout</b></p>
                <div className="d-flex justify-content-between">
                    <span className="ps-2 text-white small">Tickets</span>
                    <span className="text-white fw-bold">1x</span>
                </div>

                <hr className='text-white' />
                <div className="d-flex justify-content-between">
                    <span className="ps-2 text-white small">Main wallet</span>
                    <span className="text-white fw-bold">1x</span>
                </div>

                {/* <div className="row align-items-center justify-content-center my-2">
                    <button className="ticket-btn bg-info col-md-5 mx-2 text-white btn-outlined" type="button">+RANDOM TICKET</button>
                    <button className="ticket-btn bg-info col-md-5 text-white btn-outlined" type="button">+MANUAL TICKET</button>
                </div> */}

                {/* buy ticket button full width */}
                <div className="d-grid buy-now-container bg-primary  gap-2 my-4">
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn p-2 fw-bold text-white  text-success" type="button">Buy Now</button>
                </div>
            </div>
            <BuyTicketModal/>
        </div>
    );
};

export default TicketComponent;
