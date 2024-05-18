import React, { useEffect, useState } from 'react';
import BuyTicketModal from './BuyTicketModal';
import { _getLotteryTicektCount } from '@/utils/newUtils/getLotteryTicektCount';
import { _getLotteryDetails } from '@/utils/newUtils/getLotteryDetails';
import { _getPercentageAmount } from '@/utils/newUtils/getPercentageAmount';
import { _getRemainingTickets } from '@/utils/newUtils/getRemainingTickets';
import { useDispatch } from 'react-redux';
import { setLotteryId,setTicketPrice } from '@/features/user/userSlice';

const TicketComponent = ({data}) => {
    const dispatch=useDispatch()

    const handleSetLotteryId=(id, price)=>{
        dispatch(setLotteryId(id))
        dispatch(setTicketPrice(price))
    }


    return (
        <div className="card info-card ticket-component position-relative">
            <img src="https://img.freepik.com/premium-vector/casino-background_1302-16923.jpg?w=740" className="card-img-top" alt="Cover" style={{ objectFit: 'cover', height: '150px' }} />
            <div className="card-body  w-100" >
                <h5 className="card-title text-center text-white">
                    Your Lottoday Combinations 
                </h5>

                <p className='text-white'><b>Checkout</b></p>
                <div className="d-flex justify-content-between">
                    <span className="ps-2 text-white small">Type</span>
                    <span className="text-white fw-bold">{data?.lotteryType}</span>
                </div>

                <hr className='text-white' />
                <div className="d-flex justify-content-between">
                    <span className="ps-2 text-white small">Per Ticket</span>
                    <span className="text-white fw-bold">{data?.ticketPrice}</span>
                </div>

                {/* <div className="row align-items-center justify-content-center my-2">
                    <button className="ticket-btn bg-info col-md-5 mx-2 text-white btn-outlined" type="button">+RANDOM TICKET</button>
                    <button className="ticket-btn bg-info col-md-5 text-white btn-outlined" type="button">+MANUAL TICKET</button>
                </div> */}

                {/* buy ticket button full width */}
                <div className="d-grid buy-now-container bg-primary  gap-2 my-4">
                    <button onClick={async()=>{
                        handleSetLotteryId(data?.lotteryID, data?.ticketPrice)
                        
                        console.log(data?.lotteryID)
                        const ticketCount=await _getLotteryTicektCount(data?.lotteryID)
                        console.log("ticketCount",ticketCount)
                        const getLotteryDetails =await _getLotteryDetails(data?.lotteryID)
                        console.log(getLotteryDetails)
                        const remainingTickets=await _getRemainingTickets(data?.lotteryID)
                        console.log("remaining tickets",remainingTickets)
                        const percentage = await _getPercentageAmount(data?.lotteryID,5)
                        console.log(percentage)
                    }} data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn p-2 fw-bold text-white  text-success" type="button">Buy Now{data?.lotteryID}</button>
                </div>
            </div>
            <BuyTicketModal/>
        </div>
    );
};

export default TicketComponent;
