import React, { useEffect } from 'react'

const TicketComponent = () => {
    const [timer, setTimer] = React.useState(0)
    // next day countdown hour, minute, second
    const nextDay = new Date();
    nextDay.setDate(nextDay.getDate() + 1);
    nextDay.setHours(0, 0, 0, 0);
    const now = new Date();
    const diff = nextDay - now;
    const hours = Math.floor(diff / 1000 / 60 / 60);
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(`${hours}h ${minutes}m ${seconds}s`);
        }, 1000);
        return () => clearInterval(interval);
    }, [timer]);

    return (
        <div className="card info-card ticket-component">
            <div className="card-body">
                <h5 className="card-title text-center text-white">
                    Yourr Lottoday Combinations
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



                <div className="row align-items-center justify-content-center my-2">
                    <button className="ticket-btn col-md-5 mx-2 text-white btn-outlined" type="button">+RANDOM TICKET</button>
                    <button className="ticket-btn col-md-5 text-white btn-outlined" type="button">+MANUAL TICKET</button>
                </div>
                {/* buy ticket button full width */}
                <div className="d-grid buy-now-container gap-2 my-4">
                    <button className="btn p-2 fw-bold text-white  text-success" type="button">Buy Now</button>
                </div>

            </div>

        </div>
    )
}

export default TicketComponent
