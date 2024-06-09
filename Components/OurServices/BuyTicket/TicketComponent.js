import React, { useEffect, useState } from 'react';
import BuyTicketModal from './BuyTicketModal';
import { _getLotteryTicektCount } from '@/utils/newUtils/getLotteryTicektCount';
import { _getLotteryDetails } from '@/utils/newUtils/getLotteryDetails';
import { _getPercentageAmount } from '@/utils/newUtils/getPercentageAmount';
import { _getRemainingTickets } from '@/utils/newUtils/getRemainingTickets';
import { useDispatch, useSelector } from 'react-redux';
import { setLotteryId,setTicketPrice } from '@/features/user/userSlice';
import { useRouter } from 'next/router';
import priceConverter from '@/utils/priceConverter';

const TicketComponent = ({data}) => {
    const dispatch=useDispatch()
    const {lotteryId, ticketPrice} = useSelector(state=>state.user)
    const router=useRouter()

    const handleSetLotteryId=(id, price)=>{
        dispatch(setLotteryId(id))
        dispatch(setTicketPrice(price))
    }

    useEffect(() => {
        if(router.asPath.includes('#') && lotteryId!=="" && ticketPrice!==""){
            document.getElementById('openModal').click()
        }
        
    }, [])


    return (
        <div className="card info-card ticket-component position-relative">
            <img src={data?.image ? `${process.env.API}${data?.image}`:"https://img.freepik.com/premium-vector/casino-background_1302-16923.jpg?w=740"} className="card-img-top" alt="Cover" style={{ objectFit: 'cover', height: '250px' }} />
            <div className="card-body  w-100" >
                <h5 className="card-title text-center text-white">
                    Your Lottoday Combinations 
                </h5>

                <p className='text-white'><b>{data?.lotteryType.toUpperCase()} JACKPOT</b></p>


                <div className="d-flex justify-content-between">
                    <span className="ps-2 text-white small">Per Ticket</span>
                    <span className="text-white fw-bold">${priceConverter(data?.ticketPrice)}</span>
                </div>


                {/* buy ticket button full width */}
                <div className="d-grid buy-now-container bg-primary  gap-2 my-4">
                <button id='openModal' className='d-none' data-bs-toggle="modal" data-bs-target="#exampleModal">Click</button>
                    <button onClick={async()=>{
                        handleSetLotteryId(data?.lotteryID, data?.ticketPrice)
                        
                    }} data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn p-2 fw-bold text-white  text-success" type="button">Buy Now</button>
                </div>
            </div>
            <BuyTicketModal/>
        </div>
    );
};

export default TicketComponent;
