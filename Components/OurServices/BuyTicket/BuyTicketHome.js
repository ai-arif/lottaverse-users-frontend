import React, { useState } from 'react'
import TicketComponent from './TicketComponent'
import { useSelector } from 'react-redux'

const BuyTicketHome = () => {
  const {packages}=useSelector(state=>state.homepage)
  
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
            {
              packages?.map((item,index)=>(
                <div className="col-xxl-6 col-md-6">
              <TicketComponent data={item} />
            </div>
              ))
            }
            {/* <div className="col-xxl-4 col-md-4">
            <TicketComponent/>
            </div>
            <div className="col-xxl-4 col-md-4">
              <TicketComponent/>
            </div> */}
          </div>
        </section>

    </div>
  )
}

export default BuyTicketHome
