import React from 'react'
import TicketComponent from './TicketComponent'

const BuyTicketHome = () => {
  return (
    <div>
        <div className="pagetitle">
          <h1>Buy Ticket</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Home</a></li>
              <li className="breadcrumb-item active">Our Services</li>
              <li className="breadcrumb-item active">Buy Ticket</li>
            </ol>
          </nav>
        </div>

        <section className="section dashboard">
          <div className="row">
            <div className="col-xxl-4 col-md-4">
              <TicketComponent/>
            </div>
            <div className="col-xxl-4 col-md-4">
              <TicketComponent/>
            </div>
            <div className="col-xxl-4 col-md-4">
              <TicketComponent/>
            </div>
          </div>
        </section>

    </div>
  )
}

export default BuyTicketHome
